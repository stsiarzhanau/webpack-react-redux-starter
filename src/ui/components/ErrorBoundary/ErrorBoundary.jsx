import React, { Component } from 'react'
import PT from 'prop-types'

import s from './ErrorBoundary.module.css'

const propTypes = {
  children: PT.node.isRequired,
}

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)

    this.state = {
      error: null,
      info: null,
    }
  }

  componentDidCatch(error, info) {
    this.setState({ error, info })
  }

  render() {
    const { error, info } = this.state
    const { children } = this.props

    if (error) {
      return (
        <div className={s.root}>
          <h2 className={s.heading}>Something went wrong.</h2>
          <p>{error.toString()}</p>
          <p>{info.componentStack}</p>
        </div>
      )
    }

    return children
  }
}

ErrorBoundary.propTypes = propTypes

export default ErrorBoundary
