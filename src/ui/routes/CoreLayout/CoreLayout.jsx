import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import PropTypes from 'prop-types'

import Loader from 'ui/components/Loader'
import Page404 from 'ui/components/Page404'
import Home from './Home'
import About from './About'
import Contacts from './Contacts'


const CoreLayout = ({
  isFetching,
  // location: { pathname },
  match: { path },
}) => {
  return isFetching ? (
    <Loader />
  ) : (
    <Switch>
      <Redirect exact from={`${path}`} to={`${path}home`} />
      <Route path={`${path}home`} component={Home} />
      <Route path={`${path}about`} component={About} />
      <Route path={`${path}contacts`} component={Contacts} />
      <Route component={Page404} />
    </Switch>
  )
}

CoreLayout.propTypes = {
  isFetching: PropTypes.bool,
  location: PropTypes.shape({

  }).isRequired,
  match: PropTypes.shape({
    path: PropTypes.string,
  }).isRequired,
}

CoreLayout.defaultProps = {
  isFetching: false,
}

export default CoreLayout
