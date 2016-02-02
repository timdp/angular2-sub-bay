'use strict'

import gulp from 'gulp'
import gutil from 'gulp-util'
import globule from 'globule'
import seq from 'run-sequence'

const subs = globule.find(`${__dirname}/gulp/tasks/*.js`)
for (const sub of subs) {
  gutil.log('Loading subtasks from', gutil.colors.magenta(sub))
  const loadSub = require(sub).default
  loadSub(gulp)
}

gulp.task('default', cb => {
  seq('clean', ['server', 'client'], cb)
})
