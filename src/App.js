import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'connected-react-router'
import { hot } from 'react-hot-loader'

import UI from 'ui'
import store, { history } from './createStore'

const App = () => (
  <Provider store={store}>
    <Router history={history}>
      <UI />
    </Router>
  </Provider>
)

export default hot(module)(App)
