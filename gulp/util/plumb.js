'use strict'

import $ from './plugins'

export default () => $.plumber({
  errorHandler: $.notify.onError('Error: <%= error.message %>')
})
