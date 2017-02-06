import React from 'react';

import logoRedux from './logo-redux.png';
import LogoWebpack from './LogoWebpack';
import './Logos.css';

const propTypes = {
  styleName: React.PropTypes.string.isRequired,
};

function Logos() {
  return (
    <div>
      <div styleName="row">
        <div styleName="column">
          <div styleName="logo logo-react" />
        </div>
        <div styleName="column">
          <LogoWebpack styleName="logo-webpack" />
        </div>
        <div styleName="column">
          <img styleName="logo" src={logoRedux} alt="webpack logo" />
        </div>
      </div>
      <div styleName="row">
        <div styleName="column low">
          <div>Background PNG</div>
        </div>
        <div styleName="column low">
          <div>Inline SVG</div>
        </div>
        <div styleName="column low">
          <div>Foreground PNG</div>
        </div>
      </div>
    </div>
  );
}

Logos.propTypes = propTypes;

export default Logos;
