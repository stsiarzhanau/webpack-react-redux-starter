import React from 'react';
import Counter from 'components/counter';

// import { createStore, combineReducers, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';

// import createHistory from 'history/createBrowserHistory';
// import { Route } from 'react-router';

// import { ConnectedRouter, routerReducer, routerMiddleware, push }
//   from 'react-router-redux';

// import reducers from './reducers';

// eslint-disable-next-line
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

import s from './styles';


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


// *** INSTRUCTIONS ***

// Open Google Chrome (we can also use other browsers, but it may require
// additional steps in order that everything works properly).
// Go to http://localhost:3000
// Open Chrome devTools (F12) and select 'console' tab.
// Open your terminal (command line).

// Uncomment the next statement and save the file to get an ESLint warning.
// It will be shown both in your terminal and in devTools console.

// console.log('BOO!');

// Uncomment the next statement and save the file to get ESLint error.
// It will be shown both in your terminal and in devTools console.

// var a;

// Uncomment the next statement and save the file to get a syntax error.
// It will be shown both in your terminal, devTools console and also directly
// in browser window (with the help of nice overlay).

// vart a = b;

// Comment all back to get rid of lint end syntax errors.

// Now let's try how Hot Module Replacement works.
// Go to code below and change the text inside of any <NavLink> component.
// For example to something like 'Hello, everybody!'.
// Save the file.
// You should see changes in your browser.
// Note that there was no full page reload and we haven't lost app state
// (our counter is incrementing as if nothing has happened).

// *** END OF INSTRUCTIONS ***


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
      <Counter />
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
