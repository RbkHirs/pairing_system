import React from 'react'
import { browserHistory as history } from 'react-router'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import {Tabs, Tab} from 'material-ui/Tabs'
import AppBar from 'material-ui/AppBar'
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pairing: [],
      open: false
    }
  }

  render () {
    return (
      <div>
        <Drawer open={this.state.open}>
          <MenuItem onClick={() => history.push('/groups')}> Groups </MenuItem>
          <MenuItem onClick={() => history.push('/pairs')}> Pairs </MenuItem>
          <MenuItem onClick={() => history.push('/pairing')}> Pairing </MenuItem>
          <MenuItem onClick={() => history.push('/assessments')}> Assessments </MenuItem>
          <MenuItem onClick={() => history.push('/reports')}> Reports </MenuItem>
          <MenuItem onClick={() => history.push('/cohorts')}> Cohorts </MenuItem>
          <MenuItem onClick={() => history.push('/Projects')}> projects </MenuItem>
        </Drawer>
        <AppBar onClick={() => this.setState({open: !this.state.open})} title='Pairing System' style={{background: '#FF1493', fontWeight: 'bold'}} >
          <Tabs>
            <Tab label='&nbsp;Add&nbsp;Students&nbsp;&nbsp;&nbsp;&nbsp;'style={{background: '#FF1493', fontWeight: 'bold'}} onClick={() => history.push('/student')} />
            <Tab label='&nbsp;Groups&nbsp;' style={{background: '#FF1493', fontWeight: 'bold'}} />
          </Tabs>
        </AppBar>
        {this.props.children}
      </div>
    )
  }
}

export default App