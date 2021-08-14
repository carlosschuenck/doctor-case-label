import React, { FunctionComponent, lazy, Suspense } from 'react'
import { Switch, Route } from 'react-router-dom'

const ElectronicHealthRecordPage = lazy(() => import('./pages/electronic-health-record/ElectronicHealthRecordPage'))
const LoginPage = lazy(() => import('./pages/login/LoginPage'))
 
const Routes: FunctionComponent = () => { 
  return  (
    <Suspense fallback="loading...">
      <Switch>
        <Route path="/" exact component={LoginPage} />
        <Route path="/ehr" component={ElectronicHealthRecordPage} />
        <Route path="/" component={() => <h1>NOT FOUND</h1>} />
      </Switch>
    </Suspense>
  )
}

export default Routes;