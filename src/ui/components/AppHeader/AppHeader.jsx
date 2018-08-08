import React from 'react'

import NavLinks from 'ui/components/NavLinks'

import s from './AppHeader.module.css'

const AppHeader = () => (
  <header className={s.header}>
    <NavLinks />
  </header>
)

export default AppHeader
