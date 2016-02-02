'use strict'

import paths from '../util/paths'
import $ from '../util/plugins'

export default gulp => {
  const {src, dest} = paths.server

  gulp.task('copy', () => {
    return gulp.src([`${src}/**/*`, `!${src}/**/*.js`], {base: src})
      .pipe($.newer(dest))
      .pipe(gulp.dest(dest))
  })
}
