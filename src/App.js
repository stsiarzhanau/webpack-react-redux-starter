import React from 'react';

// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';

// import createHistory from 'history/createBrowserHistory';
// import { Route } from 'react-router';

// import { ConnectedRouter, routerReducer, routerMiddleware, push }
//   from 'react-router-redux';

// import reducers from './reducers';

// eslint-disable-next-line
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import s from './app.css';


// const history = createHistory();

// Build the middleware for intercepting and dispatching navigation actions
// const middleware = routerMiddleware(history);

// Add the reducer to your store on the `router` key
// Also apply our middleware for navigating
// const store = createStore(
//   combineReducers({
//     ...reducers,
//     router: routerReducer
//   }),
//   applyMiddleware(middleware)
// );

const NavLinks = () => (
  <nav>
    <NavLink exact to="/" className={s.link} activeClassName={s.activeLink}>
      Home
    </NavLink>
    <NavLink to="/about" className={s.link} activeClassName={s.activeLink}>
      About
    </NavLink>
    <NavLink to="/contacts" className={s.link} activeClassName={s.activeLink}>
      Contacts
    </NavLink>
  </nav>
);

const App = () => (
  <Router>
    <div>
      <NavLinks />
      <Route exact path="/" render={() => <h1>Home</h1>} />
      <Route exact path="/about" render={() => <h1>About</h1>} />
      <Route exact path="/contacts" render={() => <h1>Contacts</h1>} />
    </div>
  </Router>
);

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

// const App = () => (
//   <Provider store={store}>
//     { /* ConnectedRouter will use the store from Provider automatically */ }
//     <ConnectedRouter history={history}>
//       <div>
//         <NavLinks />
//         <Route exact path="/" render={() => <h1>Home</h1>} />
//         <Route exact path="/about" render={() => <h1>About</h1>} />
//         <Route exact path="/contacts" render={() => <h1>Contacts</h1>} />
//       </div>
//     </ConnectedRouter>
//   </Provider>
// );

export default App;
