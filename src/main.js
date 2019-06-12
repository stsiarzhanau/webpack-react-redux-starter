/* https://redux.js.org/recipes/configuring-your-store */
/* https://github.com/supasate/connected-react-router#step-3 */

/* https://github.com/gaearon/react-hot-loader#getting-started */
import 'react-hot-loader'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { ConnectedRouter as Router } from 'connected-react-router'

// eslint-disable-next-line no-unused-vars
import configureStore, { history, sagaMiddleware } from 'redux_app/configureStore'
// import rootSaga from 'redux_app/sagas'
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

// sagaMiddleware.run(rootSaga)

renderApp()
