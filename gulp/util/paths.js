'use strict'

import path from 'path'

const root = path.resolve(__dirname, '..', '..')
const tsConfig = require(path.join(root, 'tsconfig.json'))
const outDir = tsConfig.compilerOptions.outDir

export default {
  root,
  dest: outDir,
  client: {
    src: path.join(root, 'client'),
    dest: path.join(outDir, 'client')
  },
  server: {
    src: path.join(root, 'server'),
    dest: path.join(outDir, 'server')
  }
}
