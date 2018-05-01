import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
// eslint-disable-next-line
import { hot } from 'react-hot-loader';

import UI from 'ui';
import store, { history } from './createStore';

// const foo = { ...store };

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <UI />
    </ConnectedRouter>
  </Provider>
);

export default hot(module)(App);
