'use strict'

import bs from '../util/browser-sync'
import paths from '../util/paths'
import plumb from '../util/plumb'
import $ from '../util/plugins'
import path from 'path'

export default gulp => {
  const tsProject = $.typescript.createProject(path.join(paths.root, 'tsconfig.json'))

  gulp.task('tslint', () => {
    return tsProject.src()
      .pipe(plumb())
      .pipe($.tslint())
      .pipe($.tslint.report('prose'))
  })

  gulp.task('ts', ['init', 'tslint'], () => {
    return tsProject.src()
      .pipe(plumb())
      .pipe($.sourcemaps.init())
      .pipe($.typescript(tsProject))
      .pipe($.sourcemaps.write())
      .pipe(gulp.dest(paths.dest))
      .pipe(bs.stream())
  })

  gulp.task('client', ['ts'], cb => {
    gulp.watch(`${paths.client.src}/**/*.ts`, ['ts'])
  })
}
