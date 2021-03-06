/**
 * Created by azoz on 03/04/17.
 //
 */
import React from 'react'
import {Router, Route, IndexRoute, browserHistory, browserHistory as history} from 'react-router'
import Main from './src/Main.jsx'
import Student from './src/components/addStudent.jsx'
import Groups from './src/components/Groups.jsx'
import Pairing from './src/components/pairingList.jsx'
import Group from './src/components/Group.jsx'

const routes = (
    <Router history={browserHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Groups} />
        <Route path='/student' component={Student} />
        <Route path='/groups/:id' component={Group} />
        <Route path='/pairing' component={Pairing} />
        <Route path='/assessments' component={null} />
        <Route path='/cohorts' component={null} />
        <Route path='/projects' component={null} />
      </Route>
    </Router>
)

export default routes
