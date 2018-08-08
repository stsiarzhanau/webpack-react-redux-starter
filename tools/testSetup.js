import chai from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import chaiEnzyme from 'chai-enzyme'
import chaiAsPromised from 'chai-as-promised'

chai.use(sinonChai)
chai.use(chaiEnzyme())
Enzyme.configure({ adapter: new Adapter() })
chai.use(chaiAsPromised)

global.expect = chai.expect
global.sinon = sinon
global.shallow = Enzyme.shallow
global.mount = Enzyme.mount
global.render = Enzyme.render
