/* https://github.com/supasate/connected-react-router#step-1 */

import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  // rest of your reducers
})

export default createRootReducer
