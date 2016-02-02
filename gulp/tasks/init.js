'use strict'

import mkdirp from 'mkdirp'
import paths from '../util/paths'

export default gulp => {
  gulp.task('init', () => mkdirp.sync(paths.dest))
}
