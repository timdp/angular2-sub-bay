'use strict'

import browserSync from 'browser-sync'
import fallback from 'connect-history-api-fallback'
import paths from './paths'
import path from 'path'

const serverConfig = require(path.join(paths.server.src, 'config.json'))
const config = {
  port: serverConfig.port + 1000,
  ui: {
    port: serverConfig.port + 1001
  },
  server: {
    baseDir: paths.root,
    middleware: fallback()
  }
}

const bs = browserSync.create()

export default {
  init: cb => {
    bs.init(config, cb)
  },
  stream: () => bs.stream()
}
