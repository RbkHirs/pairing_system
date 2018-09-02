import React from 'react'
import $ from 'jquery'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { browserHistory as history } from 'react-router'
import Paper from 'material-ui/Paper'
import {Row, Col} from 'react-flexbox-grid'

class Student extends React.Component {
  constructor (props) {
    super(props)
    this.state = {states: {
      StudentName: '',
      Level: '',
      CohortNumber: '',
      DUCK: false
    }
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange (e) {
    var states = this.state.states
    var name = e.target.id
    var value = e.target.value
    if (name === 'Level' || name === 'CohortNumber') {
      value = Number(value)
      console.log(value)
    }
    states[name] = value
    this.setState({states: states})
  }

  handleSubmit () {
    console.log(this.state.states)
    var that = this
    $.ajax({
      type: 'POST',
      url: '/api/student/',
      data: that.state.states,
      success: function (data) {
        // once student successfully created redirect the user
        // history.push('/')

      },
      error: function (request, status, error) {
        console.log(error)
      }
    })
  }
  render () {
    return (
      <Paper zDepth={2} style={{alignText: 'center', margin: '1em', padding: '1em'}}>
        <TextField
          onChange={this.onChange}
          value={this.state.StudentName}
          floatingLabelText='Enter a student name:'
          fullWidth
          id='StudentName'
        />
        <br />
        <TextField
          value={this.state.Level}
          onChange={this.onChange}
          floatingLabelText=' Enter a student Level:'
          fullWidth
          id='Level'
        />
        <br />
        <TextField
          value={this.state.CohortNumber}
          onChange={this.onChange}
          floatingLabelText=' Enter a student cohort:'
          fullWidth
          id='CohortNumber'
        />
        <br />
        <Row>
          <Col lg={3} />
          <Col lg={2}>

            <RaisedButton fullWidth label='Add Student' buttonStyle={{ background: '#FF1493'}} onClick={this.handleSubmit} />

          </Col>

          <Col lg={2} />
          <Col lg={2}>

            <RaisedButton fullWidth label='Back' buttonStyle={{ background: '#FF1493'}} onClick={() => history.push('/')} />
          </Col>
        </Row>
      </Paper>

    )
  }
}

export default Student
