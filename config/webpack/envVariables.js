/* eslint-disable no-underscore-dangle */
export const isProd = process.env.NODE_ENV === 'production'
export const isDev = process.env.NODE_ENV === 'development'
export const isTest = process.env.TEST === 'true'
export const isCover = process.env.COVER === 'true'

const GLOBALS = {
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
  __PROD__: isProd,
  __DEV__: isDev,
}

export default GLOBALS
