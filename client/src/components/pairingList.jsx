import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import Paper from 'material-ui/Paper'
import $ from "jquery"
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn
} from 'material-ui/Table'

class Pairing extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      pairing: [],
      groups: {
        title: '',
        Pairs: []

      }
    }
    this.pairingList = this.pairingList.bind(this)
    this.add = this.add.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  add () {
    var states = this.state.groups
    var pairing = this.state.pairing
    states['title'] = this.state.groups['title']
    states['Pairs'] = pairing
    this.setState({
      groups: states
    })
    console.log(this.state.groups)
    var that = this
    $.ajax({
      type: 'PUT',
      url: '/api/update',
      data: {'student': that.state.pairing},
      success: function (res) {
        console.log('sucesss')
      }
    })
    $.ajax({
      type: 'POST',
      url: '/api/groups',
      data: that.state.groups,
      success: function (res) {
        console.log('add Group')
      }
    })
    
  }
  onChange (e) {
    var name = e.target.id
    var value = e.target.value
    console.log(name)
    console.log(value)
    this.state.groups[name] = value
  }

  pairingList () {
    var that = this
    $.ajax({
      type: 'GET',
      url: ' /api/student/',
      data: {},
      success: function (dataB) {
        function randomaize (data) {
          var arr = []
          for (var i = 0; i < data.length; i++) {
            arr.push(data[i])
          }
          var length = arr.length
          for (var i = 0; i < arr.length; i++) {
            var rand = Math.floor(Math.random() * (length - i) + i)
            var previos = arr[i]
            arr[i] = arr[rand]
            arr[rand] = previos
          }
          return arr
        }
        var arr = randomaize(dataB)
        var result = []
        var counter = -1
        var filter = []

        while (arr.length > 0) {
          counter++
          result.push([arr[0]])
          var correntStudent = arr.shift()
          for (var i = 0; i < arr.length; i++) {
            if (arr[i].Level - 1 === correntStudent.Level || arr[i].Level + 1 === correntStudent.Level) {
              if (correntStudent.WhoPairedWith.indexOf(arr[i].StudentName) === -1) {
                // debugger
                result[counter].push(arr[i])
                var index = arr.indexOf(arr[i])
                arr.splice(index, 1)
                break
              }
            }
          }
          for (var i = 0; i < result.length; i++) {
            if (result[i].length === 1) {
              for (var j = i; j < result.length; j++) {
                if (result[j] !== result[i] && result[j].length === 1) {
                  if (result[i][0].WhoPairedWith.indexOf(result[j][0].StudentName) === -1) {
                    result[i].push(result[j][0])
                    result.splice(j, 1)
                  }
                }
              }
            }
          }
        }
        that.state.pairing = result
        that.setState({
          pairing: that.state.pairing
        })
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
              style={{fontSize: '20px'}}
              floatingLabelText=' Enter a Sprint Name:'
              floatingLabelFixed
              floatingLabelStyle={{ fontSize: '20px', fontWeight: 'bold', color: 'black' }}
              onChange={this.onChange}
              id='title'
          /><br />
          <RaisedButton label='Create' buttonStyle={{ background: '#FF1493'}} onClick={this.pairingList} />
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>Student1</TableHeaderColumn>
                <TableHeaderColumn>Level1</TableHeaderColumn>
                <TableHeaderColumn>Student2</TableHeaderColumn>
                <TableHeaderColumn>Level2</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {this.state.pairing.map((student, index) =>
                  <TableRow>
                    <TableRowColumn>{student[0].StudentName}</TableRowColumn>
                    <TableRowColumn>{student[0].Level}</TableRowColumn>
                    <TableRowColumn>{student[1].StudentName}</TableRowColumn>
                    <TableRowColumn>{student[1].Level}</TableRowColumn>
                  </TableRow>
              )}
            </TableBody>
          </Table>
          <RaisedButton label='Submit' buttonStyle={{ background: '#FF1493'}} onChange={this.onChange} onClick={this.add} />
        </Paper> 
    )
  }
}
export default Pairing