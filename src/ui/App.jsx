import React from 'react'

import ErrorBoundary from 'ui/components/ErrorBoundary'
import AppHeader from 'ui/components/AppHeader'
import AppFooter from 'ui/components/AppFooter'
import Routes from 'ui/routes'
import Counter from 'ui/components/Counter'

import 'ui/appStyles.css'


const App = () => (
  <ErrorBoundary>
    <AppHeader />
    <div className="pageContent">
      <Routes />
    </div>
    <Counter />
    <AppFooter />
  </ErrorBoundary>
)

export default App
