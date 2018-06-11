import React from 'react'
import { NavLink } from 'react-router-dom'

import Icon from 'ui/components/icon'

import homeIcon from 'assets/icons/home.svg'
import aboutIcon from 'assets/icons/about.svg'
import phoneIcon from 'assets/icons/phone-call.svg'

import s from './styles'


// *** INSTRUCTIONS ***

// Open Google Chrome (we can also use other browsers, but it may require
// additional steps in order that everything works properly).
// Go to http://localhost:3000
// Open Chrome devTools (F12) and select 'console' tab.
// Open your terminal (command line).

// Uncomment the next statement and save the file to get a syntax error.
// It will be shown both in your terminal, devTools console and also directly
// in browser window (with the help of nice overlay).

// vart a = b

// Comment all back to get rid of lint end syntax errors.

// Now let's try how Hot Module Replacement works.
// Go to code below and change the text inside of any <NavLink> component.
// For example to something like 'Hello, everybody!'.
// Save the file.
// You should see changes in your browser.
// Note that there was no full page reload and we haven't lost app state
// (our counter is incrementing as if nothing has happened).

// *** END OF INSTRUCTIONS ***


const NavLinks = () => (
  <nav className={s.nav}>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      <Icon glyph={homeIcon} className={s.icon} />
      Home
    </NavLink>
    <NavLink to="/about" className={s.link} activeClassName={s.activeLink}>
      <Icon glyph={aboutIcon} className={s.icon} />
      About
    </NavLink>
    <NavLink to="/contacts" className={s.link} activeClassName={s.activeLink}>
      <Icon glyph={phoneIcon} className={s.icon} />
      Contacts
    </NavLink>
  </nav>
)

export default NavLinks
