import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {Row, Col} from 'react-flexbox-grid';
import RaisedButton from 'material-ui/RaisedButton';
import fetch from 'isomorphic-fetch';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { browserHistory as history } from 'react-router'


export default class Groups extends React.Component {
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
    fetch('/api/groups')
        .then(function(res){
          return res.json()
        })
        .then(function(res){
          that.setState({groups: res})
        })
  }

  createGroup = () =>{
      fetch(`/api/groups`, {
          method: 'post',
      headers: {
        Accept: 'application/json',
      },
           body:JSON.stringify({
        title: this.state.title,
        cohort: this.state.cohort,
      })
    })
        .then(function(response){
          return response.json();
        })
        .then(function (response) {
          that.setState({groups: response})
        }, function (error) {
        })
  }

  render(){
    return (
        <Paper zDepth={2} style={{padding:'1em'}}>
          <Dialog
              title="Create New Group"
              modal={true}
              open={this.state.open}
          >
            <TextField onChange={this.onChange.bind(this)} floatingLabelText="Group name" fullWidth={true} id="group" type="text"/>
            <br/>
            <SelectField
                floatingLabelText="Select Cohort"
                value={this.state.cohort}
                onChange={this.handleChange.bind(this)}
                id="cohort"
            >
              <MenuItem value={1} primaryText="1" />
              <MenuItem value={2} primaryText="2" />
              <MenuItem value={3} primaryText="3" />
              <MenuItem value={4} primaryText="4" />
            </SelectField>
            <br/>
            <div>
              <RaisedButton primary={true} fullWidth={true} label="Create" onClick={this.createGroup}/>
            </div>
          </Dialog>
          <Row style={{padding:'5em'}}>

            <Col lg={3}>
              <RaisedButton
                  label="Create new Group"
                  primary={true}
                  onClick={()=>{this.setState({open: !this.state.open })}}
              />
            </Col>

          </Row>
          {this.state.groups.map( group =>{
            return (
                <Card onClick={()=>{history.push(`/groups/${group._id}`)}} style={{margin:'1em'}}>
                  <CardHeader
                      title={group.title}
                      subtitle="Subtitle"
                      actAsExpander={true}
                  />
                </Card>
            )
          })}
        </Paper>
    )
  }
}
