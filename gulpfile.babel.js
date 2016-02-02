'use strict'

import gulp from 'gulp'
import loadPlugins from 'gulp-load-plugins'
import del from 'del'
import mkdirp from 'mkdirp'
import seq from 'run-sequence'
import browserSync from 'browser-sync'
import fallback from 'connect-history-api-fallback'

const $ = loadPlugins()
const tsConfig = require('./tsconfig.json')
const serverConfig = require('./server/config.json')

const outDir = tsConfig.compilerOptions.outDir
const tsProject = $.typescript.createProject('tsconfig.json')
const bs = browserSync.create()

const plumb = () => $.plumber({
  errorHandler: $.notify.onError('Error: <%= error.message %>')
})

gulp.task('clean', () => del.sync(outDir))

gulp.task('init', () => mkdirp.sync(outDir))

gulp.task('copy', () => {
  return gulp.src(['server/**/*', '!server/**/*.js'], {base: './'})
    .pipe($.newer(outDir))
    .pipe(gulp.dest(outDir))
})

gulp.task('standard', () => {
  return gulp.src('server/**/*.js')
    .pipe(plumb())
    .pipe($.standard())
    .pipe($.standard.reporter('default', {breakOnError: true}))
})

gulp.task('js', ['standard', 'copy'], () => {
  return gulp.src('server/**/*.js', {base: './'})
    .pipe(plumb())
    .pipe($.sourcemaps.init())
    .pipe($.babel())
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(outDir))
    .pipe(bs.stream())
})

gulp.task('tslint', () => {
  return tsProject.src()
    .pipe(plumb())
    .pipe($.tslint())
    .pipe($.tslint.report('prose'))
})

gulp.task('ts', ['tslint'], () => {
  return tsProject.src()
    .pipe(plumb())
    .pipe($.sourcemaps.init())
    .pipe($.typescript(tsProject))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest(outDir))
    .pipe(bs.stream())
})

gulp.task('server', ['js'], () => {
  $.nodemon({
    script: 'built/server/server.js',
    watch: ['server'],
    tasks: ['js']
  })
  gulp.watch(['server/**/*', '!server/**/*.js'], ['copy'])
  gulp.watch('server/**/*.js', ['js'])
})

gulp.task('client', ['ts'], cb => {
  bs.init({
    port: serverConfig.port + 1000,
    ui: {
      port: serverConfig.port + 1001
    },
    server: {
      baseDir: './',
      middleware: fallback()
    }
  }, cb)
  gulp.watch('client/**/*.ts', ['ts'])
})

gulp.task('default', ['clean'], cb => seq('server', 'client', cb))
