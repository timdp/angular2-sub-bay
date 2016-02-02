'use strict'

import bs from '../util/browser-sync'
import paths from '../util/paths'
import $ from '../util/plugins'
import plumb from '../util/plumb'

export default gulp => {
  const serverScripts = `${paths.server.src}/**/*.js`

  gulp.task('standard', () => {
    return gulp.src(serverScripts)
      .pipe(plumb())
      .pipe($.standard())
      .pipe($.standard.reporter('default', {breakOnError: true}))
  })

  gulp.task('js', ['init', 'standard'], () => {
    return gulp.src(serverScripts, {base: paths.server.src})
      .pipe(plumb())
      .pipe($.sourcemaps.init())
      .pipe($.babel())
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(paths.server.dest))
      .pipe(bs.stream())
  })

  gulp.task('server', ['copy', 'js'], () => {
    $.nodemon({
      script: `${paths.dest}/server/server.js`,
      watch: ['server'],
      tasks: ['js']
    })
    gulp.watch([`${paths.server.src}/**/*`, `!${serverScripts}`], ['copy'])
    gulp.watch(serverScripts, ['js'])
  })
}
