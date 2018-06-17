/* eslint-disable no-console */
/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */

import browserSync from 'browser-sync'
import webpack from 'webpack'
import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware'
import chalk from 'chalk'

import webpackConfig from '../config/webpack/webpack.config-dev'

const env = process.env.NODE_ENV
const bs = browserSync.create()
const compiler = webpack(webpackConfig)

const devMiddlewareOptions = {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    all: false,
    timings: true,
    warnings: true,
    errors: true,
    colors: true,
  },
}

bs.init({
  server: {
    baseDir: ['src'],

    middleware: [
      webpackDevMiddleware(compiler, devMiddlewareOptions),
      webpackHotMiddleware(compiler),
    ],
  },

  port: 3000,

  ui: {
    port: 3001,
  },

  open: false,
  reloadOnRestart: true,
  single: true,
})

bs.emitter.on('init', () => {
  console.log(chalk.green(
    `
[Browsersync]  Browsersync server is running.
[Browsersync]  NODE_ENV is set to ${chalk.white.bold(env)}.
[Browsersync]  Access URLs are listed below.
    `
  ))
})
