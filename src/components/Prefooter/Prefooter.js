import React from 'react';

import './Prefooter.css';

const propTypes = {
  styleName: React.PropTypes.string.isRequired,
};

function Prefooter() {
  return (
    <div>
      <ul styleName="row">
        <li styleName="column one-third"><div>1/3</div></li>
        <li styleName="column two-thirds"><div>2/3</div></li>
      </ul>
    </div>
  );
}

Prefooter.propTypes = propTypes;

export default Prefooter;
