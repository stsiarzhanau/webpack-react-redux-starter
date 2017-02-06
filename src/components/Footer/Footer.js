import React from 'react';

import './Footer.css';

const propTypes = {
  styleName: React.PropTypes.string.isRequired,
};

function Footer() {
  return (
    <div>
      <ul styleName="row">
        <li styleName="column quarter"><div>Quarter</div></li>
        <li styleName="column half"><div>Half</div></li>
        <li styleName="column quarter"><div>Quarter</div></li>
      </ul>
    </div>
  );
}

Footer.propTypes = propTypes;

export default Footer;
