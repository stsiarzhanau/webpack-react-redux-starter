/* https://redux.js.org/recipes/configuring-your-store */

import { createStore, applyMiddleware } from 'redux'
import createHistory from 'history/createBrowserHistory'
import createSagaMiddleware from 'redux-saga'
import { connectRouter, routerMiddleware } from 'connected-react-router'
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension'

import rootReducer from './modules'

export const history = createHistory()
const sagaMiddleware = createSagaMiddleware()

export default function configureStore(preloadedState) {
  const middlewares = [
    routerMiddleware(history),
    sagaMiddleware,
  ]

  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(
    connectRouter(history)(rootReducer),
    preloadedState,
    composedEnhancers,
  )

  if (module.hot) {
    module.hot.accept('./modules', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}
