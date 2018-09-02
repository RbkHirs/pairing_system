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

<AppBar onClick={() => this.setState({open: !this.state.open})} title='Pairing System' style={{background: '#FF1493', fontWeight: 'bold'}} >
<Tabs>
<Tab label='&nbsp;Add&nbsp;Students&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'style={{background: '#FF1493', fontWeight: 'bold'}} onClick={() => history.push('/student')} />
<Tab label='&nbsp;Groups&nbsp;' style={{background: '#FF1493', fontWeight: 'bold'}} onClick={() => history.push('/groups')}/>
<Tab label='&nbsp;Pairing&nbsp;' style={{background: '#FF1493', fontWeight: 'bold'}} onClick={() => history.push('/pairing')}/>
</Tabs>
</AppBar>
{this.props.children}
</div>
)
}
}

export default App