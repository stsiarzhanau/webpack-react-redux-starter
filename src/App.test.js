/* eslint-disable no-unused-vars */

import React from 'react';
import chai, { expect } from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow, mount, render } from 'enzyme';

import sinon from 'sinon';
import sinonChai from 'sinon-chai';

/* eslint-enable */
/* eslint-disable no-unused-expressions */

import App from './App';

chai.use(chaiEnzyme());
chai.use(sinonChai);

// Go to code below and replace current assertion with
// expect(Layout).to.not.exist; to fail test suite.
// Save the file to see test framework reporter output in terminal.
// Then change assertion back to initial state and save file again.


describe('App', () => {
  it('should exist ', () => {
    expect(App).to.exist;
  });
});
