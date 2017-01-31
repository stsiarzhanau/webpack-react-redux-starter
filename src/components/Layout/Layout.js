import React from 'react';
import cx from 'classnames';

import st from './Layout.css';
import webpackLogo from './webpack-logo.png';

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
// Go to code below and change text inside <h1> tag.
// For example to something like 'Hello, everybody!'.
// Save the file.
// You should see changes in your browser.
// Note that there was no full page reload and we haven't lost app state
// (our counter is incrementing as if nothing has happened).


const propTypes = {
  children: React.PropTypes.node.isRequired,
};

function Layout(props) {
  return (
    <div>
      <h1 className={st.heading}>Hello, world!</h1>
      {props.children}
      <img src={webpackLogo} alt="webpack logo" />
      <div className={st.reactLogo} />
      <ul className={st.row}>
        <li className={cx(st.column, st.quarter)}><div>One</div></li>
        <li className={cx(st.column, st.half)}><div>Two</div></li>
        <li className={cx(st.column, st.quarter)}><div>Three</div></li>
      </ul>
    </div>
  );
}

Layout.propTypes = propTypes;

export default Layout;
