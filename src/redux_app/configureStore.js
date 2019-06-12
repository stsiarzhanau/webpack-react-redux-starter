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
export const sagaMiddleware = createSagaMiddleware()
const rootReducer = createRootReducer(history)

export default function configureStore(preloadedState) {
  const middlewares = [
    routerMiddleware(history),
    sagaMiddleware,
  ]

  const middlewareEnhancer = applyMiddleware(...middlewares)
  const enhancers = [middlewareEnhancer]

  /* https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm */
  const composeEnhancers = composeWithDevTools({
    maxAge: 150,
  })

  const store = createStore(
    rootReducer,
    preloadedState,
    composeEnhancers(...enhancers),
  )

  if (process.env.NODE_ENV !== 'production' && module.hot) {
    module.hot.accept('./modules', () => {
      store.replaceReducer(rootReducer)
    })
  }

  return store
}
