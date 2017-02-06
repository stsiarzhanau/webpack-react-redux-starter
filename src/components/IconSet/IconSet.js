import React from 'react';

import './IconSet.css';

import IconAutoprefixer from './autoprefixer.inline.svg';
import IconBabel from './babel.inline.svg';
import IconBrowsersync from './browsersync.inline.svg';
import IconChai from './chai.inline.svg';
import IconEslint from './eslint.inline.svg';
import IconMocha from './mocha.inline.svg';
import IconPostcss from './postcss.inline.svg';
import IconReact from './react.inline.svg';
import IconReactRouter from './react_router.inline.svg';
import IconRedux from './redux.inline.svg';
import IconStylelint from './stylelint.inline.svg';
import IconWebpack from './webpack.inline.svg';

const propTypes = {
  styleName: React.PropTypes.string.isRequired,
};

function IconSet() {
  return (
    <div>
      <ul styleName="iconset">
        <li styleName="icon-container"><IconAutoprefixer styleName="icon" /></li>
        <li styleName="icon-container"><IconBabel styleName="icon" /></li>
        <li styleName="icon-container"><IconBrowsersync styleName="icon" /></li>
        <li styleName="icon-container"><IconChai styleName="icon" /></li>
        <li styleName="icon-container"><IconEslint styleName="icon" /></li>
        <li styleName="icon-container"><IconMocha styleName="icon" /></li>
        <li styleName="icon-container"><IconPostcss styleName="icon" /></li>
        <li styleName="icon-container"><IconReact styleName="icon" /></li>
        <li styleName="icon-container"><IconReactRouter styleName="icon" /></li>
        <li styleName="icon-container"><IconRedux styleName="icon" /></li>
        <li styleName="icon-container"><IconStylelint styleName="icon" /></li>
        <li styleName="icon-container"><IconWebpack styleName="icon" /></li>
      </ul>
    </div>
  );
}

IconSet.propTypes = propTypes;

export default IconSet;
