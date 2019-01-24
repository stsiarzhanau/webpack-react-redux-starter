/* https://redux.js.org/recipes/configuring-your-store */
/* https://github.com/supasate/connected-react-router#step-3 */

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'connected-react-router'

import configureStore, { history } from 'redux_app/configureStore'
import App from 'ui/App'

const store = configureStore()

const renderApp = () => render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,
  document.getElementById('react-root'),
)

if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept('ui/App', () => {
    renderApp()
  })
}

renderApp()
