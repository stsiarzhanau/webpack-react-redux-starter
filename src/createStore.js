import { createStore, applyMiddleware } from 'redux'
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension'
import { connectRouter, routerMiddleware } from 'connected-react-router'
import createHistory from 'history/createBrowserHistory'

const rootReducer = state => state

export const history = createHistory()

const middleware = [
  routerMiddleware(history),
]

const store = createStore(
  connectRouter(history)(rootReducer),
  composeWithDevTools(applyMiddleware(...middleware)),
)

export default store
