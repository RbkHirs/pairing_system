/**
 * Created by azoz on 03/04/17.
 */
import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './src/index'
import PreviousGroups from './src/components/previousGroups'
import Student from './src/components/addStudent'

const routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App} />
    <Route path='/addStudent' component={Student} />
    <Route path='/previousGroups' component={PreviousGroups} />
    
  </Router>
)

export default routes
