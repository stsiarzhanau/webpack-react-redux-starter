import React from 'react'
import { Route } from 'react-router-dom'

const Routes = () => (
  <div>
    <Route exact path="/" render={() => <h1>Home</h1>} />
    <Route path="/about" render={() => <h1>About</h1>} />
    <Route path="/contacts" render={() => <h1>Contacts</h1>} />
  </div>
)

export default Routes
