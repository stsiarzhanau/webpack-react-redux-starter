/* https://webpack.js.org/api/node */

/* eslint-disable no-console */
/* eslint-disable comma-dangle */
/* eslint-disable function-paren-newline */

import webpack from 'webpack'
import chalk from 'chalk'

import webpackConfig from '../config/webpack/webpack.config-prod'


const env = process.env.NODE_ENV
const compiler = webpack(webpackConfig)

console.log(chalk.cyan(
  `
=>  webpack is bundling project files...`
))

console.log(chalk.green(
  `=>  NODE_ENV is set to ${chalk.white(env)}.
`
))

compiler.run((err, stats) => {
  if (err) {
    console.log(chalk.red(err.stack || err))

    if (err.details) {
      console.log(chalk.red(err.details))
    }

    return
  }

  if (stats.hasErrors()) {
    console.log(chalk.red.bold(
      `
:(  ERRORS DURING COMPILATION!
=>  Fix them and try again!`
    ))

    return
  }

  console.log(stats.toString({
    all: false,
    timings: true,
    warnings: true,
    errors: true,
    colors: true,
  }))

  console.log(chalk.green(
    `
:)  PROJECT FILES ARE COMPILED!
    `
  ))

  if (stats.hasWarnings()) {
    console.log(chalk.yellow(
      `=>  But build have some issues...
=>  Look at compiler warnings above!`
    ))
  }
})
