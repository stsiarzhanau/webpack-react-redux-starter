import React from 'react'
import { hot } from 'react-hot-loader/root'

import ErrorBoundary from 'ui/components/ErrorBoundary'
import AppHeader from 'ui/components/AppHeader'
import AppFooter from 'ui/components/AppFooter'
import Routes from 'ui/routes'

import 'ui/styles/appStyles.css'


const App = () => (
  <ErrorBoundary>
    <AppHeader />
    <div className="pageContent">
      <Routes />
    </div>
    <AppFooter />
  </ErrorBoundary>
)

/* https://github.com/gaearon/react-hot-loader#getting-started */
export default hot(App)
