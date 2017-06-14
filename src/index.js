import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';


const rootEl = document.getElementById('react-root');

ReactDOM.render(
  <App />,
  rootEl // eslint-disable-line comma-dangle
);
