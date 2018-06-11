/* eslint-disable no-console */
/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */

import browserSync from 'browser-sync'
import compression from 'compression'
import chalk from 'chalk'

const env = process.env.NODE_ENV
const bs = browserSync.create()

bs.init({
  server: {
    baseDir: ['dist'],

    middleware: [
      compression(),
    ],
  },

  port: 4000,

  ui: {
    port: 4001,
  },

  open: false,
  reloadOnRestart: true,
  single: true,
})

bs.emitter.on('init', () => {
  console.log(chalk.green(
    `[Browsersync]  Browsersync server is running.
[Browsersync]  NODE_ENV is set to ${chalk.white.bold(env)}.
[Browsersync]  Access URLs are listed below.
    `
  ))
})
