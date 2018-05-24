import React from 'react';
import {Grid, Row, Col} from 'react-flexbox-grid';
import SinglePreviouseGroups from './SinglePreviouseGroups';
import methods from './methods';
import fetch from 'isomorphic-fetch';
import Paper from 'material-ui/Paper';


export default class SingleGroup extends React.Component {
  constructor () {
    super()
    this.state = {
      groups: [],
      open: false
    }
  }
  onChange (e) {
    var name = e.target.id
    var value = e.target.value

    if (name === 'group') {
      this.setState({title: value})
    }
  }
  handleChange = (event, index, value) => this.setState({cohort: value});

  componentWillMount () {
    var that = this
    fetch('http://localhost:3000/api/student/createGroupName/GetAll', {
      credentials: 'include',
      headers: {
        Accept: 'application/json',
      }
    })
        .then(function(response){
          return response.json();
        })
        .then(function (response) {
          that.setState({groups: response})
        }, function (error) {
        })
    this.setState({newNames: this.state.names})
  }

  handleGroupSearch = (query) => {
    this.setState({newNames: methods.groupSearch(this.state.names, query)});
  }

  handleNameSearch = (query) => {
    this.setState({newNames: methods.nameSearch(this.state.names, query)});
  }


  render(){
    return (
        <Grid fluid>
          <Paper zDepth={2} style={{alignText: 'center', margin:'1em', padding: '1em'}}>
            <SinglePreviouseGroups handleGroupSearch={(value) => {
              this.handleGroupSearch(value)
            }} handleNameSearch={(value) => {
              this.handleNameSearch(value)
            }} groups={this.state.groups}/>
          </Paper>
        </Grid>
    )
  }
}
