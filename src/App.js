import React from 'react';
// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import createHistory from 'history/createBrowserHistory';
// import { ConnectedRouter, routerReducer, routerMiddleware }
//   from 'react-router-redux';

import { BrowserRouter as Router } from 'react-router-dom';

import UI from 'ui';

// import reducers from './reducers';


// const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
// const store = createStore(
//   combineReducers({
//     // ...reducers,
//     router: routerReducer,
//   }),
//   applyMiddleware(middleware),
// );

// Now you can dispatch navigation actions from anywhere!
// import { push } from 'react-router-redux';
// store.dispatch(push('/foo'));

// const App = () => (
//   <Provider store={store}>
//     <ConnectedRouter history={history}>
//       <UI />
//     </ConnectedRouter>
//   </Provider>
// );

const App = () => (
  <Router>
    <UI />
  </Router>
);

export default App;
