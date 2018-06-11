import React from 'react'
import PT from 'prop-types'
import cn from 'classnames'

import s from './styles'

const propTypes = {
  glyph: PT.shape({
    id: PT.string,
    toString: PT.func,
    url: PT.string,
    viewBox: PT.string,
  }).isRequired,
  className: PT.string,
}

const defaultProps = {
  className: '',
}

const Icon = ({ glyph, className }) => {
  const { viewBox, url } = glyph
  const classes = cn(s.icon, className)

  return (
    <svg className={classes} viewBox={viewBox}>
      <use xlinkHref={url} />
    </svg>
  )
}

Icon.propTypes = propTypes
Icon.defaultProps = defaultProps

export default Icon
