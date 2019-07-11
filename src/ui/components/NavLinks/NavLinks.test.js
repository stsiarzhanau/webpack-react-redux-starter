import React from 'react'
import { NavLink } from 'react-router-dom'
import NavLinks from './index'

// *** INSTRUCTIONS ***

// npm run test:watch
// Go to code below and replace current assertion with
// expect(App).to.not.exist to fail test suite.
// Save the file to see test framework reporter output in terminal.
// Then change assertion back to initial state and save file again.

// *** END OF INSTRUCTIONS ***

describe('NavLinks', () => {
  it('should exist ', () => {
    expect(NavLinks).to.exist
  })
})

describe('NavLinks', () => {
  it('renders 3 NavLink components', () => {
    const wrapper = shallow(<NavLinks />)
    expect(wrapper.find(NavLink)).to.have.length(3)
  })
})
