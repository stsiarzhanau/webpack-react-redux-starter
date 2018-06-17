require('babel-polyfill')
require('./jsdomSetup')

const chai = require('chai')
const chaiAsPromised = require('chai-as-promised')
const sinon = require('sinon')
const sinonChai = require('sinon-chai')
const Enzyme = require('enzyme')
const Adapter = require('enzyme-adapter-react-16')
const chaiEnzyme = require('chai-enzyme')

chai.use(chaiAsPromised)
chai.use(sinonChai)
chai.use(chaiEnzyme())
Enzyme.configure({ adapter: new Adapter() })

global.expect = chai.expect
global.sinon = sinon
global.shallow = Enzyme.shallow
global.mount = Enzyme.mount
global.render = Enzyme.render
