import React from 'react'

import Counter from 'ui/components/Counter'

import s from './AppFooter.module.css'

const AppFooter = () => (
  <footer className={s.footer}>
    <Counter />
  </footer>
)

export default AppFooter
