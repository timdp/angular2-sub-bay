'use strict'

import paths from '../util/paths'
import del from 'del'

export default gulp => {
  gulp.task('clean', () => del.sync(paths.dest))
}
