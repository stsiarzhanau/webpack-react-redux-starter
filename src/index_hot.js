import React from 'react';
import ReactDOM from 'react-dom';
// eslint-disable-next-line
import { AppContainer } from 'react-hot-loader';

import App from './app';


const rootEl = document.getElementById('react-root');

ReactDOM.render(
  <AppContainer>
    <App />
  </AppContainer>,
  rootEl // eslint-disable-line comma-dangle
);

if (module.hot) {
  module.hot.accept('./app', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    // eslint-disable-next-line global-require
    const NextApp = require('./app').default;

    ReactDOM.render(
      <AppContainer>
        <NextApp />
      </AppContainer>,
      rootEl // eslint-disable-line comma-dangle
    );
  });
}
