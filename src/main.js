import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'connected-react-router'
import { AppContainer } from 'react-hot-loader'

import configureStore, { history } from 'redux_app/configureStore'
import App from 'ui/App'

const store = configureStore()

const renderApp = () => render(
  <Provider store={store}>
    <Router history={history}>
      <AppContainer>
        <App />
      </AppContainer>
    </Router>
  </Provider>,
  document.getElementById('react-root'),
)

if (module.hot) {
  module.hot.accept('ui/App', () => { renderApp() })
}

renderApp()
