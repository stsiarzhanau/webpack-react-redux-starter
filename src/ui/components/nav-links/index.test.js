/* eslint-disable no-unused-vars */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';

/* eslint-enable */
/* eslint-disable no-unused-expressions */

import NavLinks from './index';

Enzyme.configure({ adapter: new Adapter() });

chai.use(chaiEnzyme());
chai.use(sinonChai);


// *** INSTRUCTIONS ***

// Go to code below and replace current assertion with
// expect(App).to.not.exist; to fail test suite.
// Save the file to see test framework reporter output in terminal.
// Then change assertion back to initial state and save file again.

// *** END OF INSTRUCTIONS ***


describe('NavLinks', () => {
  it('should exist ', () => {
    expect(NavLinks).to.exist;
  });
});
