/* https://redux.js.org/recipes/configuring-your-store */
/* https://github.com/supasate/connected-react-router#step-2 */

import { applyMiddleware, createStore } from 'redux'
import { createBrowserHistory } from 'history'
import { routerMiddleware } from 'connected-react-router'
import createSagaMiddleware from 'redux-saga'
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension'

import createRootReducer from './modules'

export const history = createBrowserHistory()
const sagaMiddleware = createSagaMiddleware()
const rootReducer = createRootReducer(history)

export default function configureStore(preloadedState) {
  const middlewares = [
    routerMiddleware(history),
    sagaMiddleware,
  ]

  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer]
  const composedEnhancers = composeWithDevTools(...enhancers)

  const store = createStore(
    rootReducer,
    preloadedState,
    composedEnhancers,
  )

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./modules', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}
