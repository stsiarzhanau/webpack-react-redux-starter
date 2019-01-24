/* https://github.com/airbnb/enzyme/blob/master/docs/guides/jsdom.md */
import { JSDOM } from 'jsdom'

/* https://github.com/jsdom/jsdom/issues/2383#issuecomment-442199291 */
const jsdom = new JSDOM('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
})

const { window } = jsdom

function copyProps(src, target) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  })
}

global.window = window
global.document = window.document
global.navigator = {
  userAgent: 'node.js',
}

global.requestAnimationFrame = function (callback) {
  return setTimeout(callback, 0)
}

global.cancelAnimationFrame = function (id) {
  clearTimeout(id)
}

copyProps(window, global)
