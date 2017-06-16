import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import s from './styles';


const propTypes = {
  glyph: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

const Icon = ({ glyph, className }) => {
  const classes = cn(s.icon, className);

  return (
    <svg className={classes}>
      <use xlinkHref={glyph} />
    </svg>
  );
};

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
