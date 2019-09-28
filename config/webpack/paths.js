// eslint-disable-next-line import/no-extraneous-dependencies
import path from 'path'

const ROOT = path.resolve(__dirname, '../../')
const resolvePath = (relativePath) => path.resolve(ROOT, relativePath)

export const SRC = resolvePath('src')
export const BUILD = resolvePath('build')
export const NODE_MODULES = resolvePath('node_modules')
