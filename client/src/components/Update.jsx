import React from 'react'
import $ from 'jquery'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import { browserHistory as history } from 'react-router'
import Paper from 'material-ui/Paper'
import {Row, Col} from 'react-flexbox-grid'

class Update extends React.Component {
  constructor (props) {
    super(props)
    this.state = { 
    groups: {
        title: '',
        Pairs: []

      },
    pairing:[]
    }
    this.onChange = this.onChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  onChange (e) {
  var states=this.state.pair1;
    var name = e.target.id
    var value = e.target.value;
    console.log(name)
    console.log(value)
    this.state.groups[name] = value
    if(name==="SprintName"){
    this.state.groups['title']=value;
    }
    console.log(this.state.groups)

    
  }

  handleSubmit () {
    var obj = this.state.groups
    var arr=[]
    var pair1 =[]
    var pair2 =[]
    var pair3 =[]
    var pair4 =[]
    var pair5 =[]
    var pair6 =[]
    var pair7 =[]
    var pair8 =[]
    var pair9 =[]
    var pair10 =[]
    var pair11=[]
    var pair12=[]
    var pair13=[]
    var pair14=[]
    var pair15=[]
    var pair16=[]
    var pair17=[]
    var pair18=[]
    var pair19=[]
    var pair20=[]
    var pair21=[]
    var pair22=[]
    var pair23=[]
    var pair24=[]
    var pair25=[]
    var pair26=[]
    var pair27=[]
    var pair28=[]

    for(var key in obj){
    if(key==="pair11"||key==="pair12"){
    pair1.push(obj[key])
    

    }

    if(key==="pair21"||key==="pair22"){
    pair2.push(obj[key])
    

    }

    if(key==="pair31"||key==="pair32"){
    pair3.push(obj[key])
    

    }

    if(key==="pair41"||key==="pair42"){
    pair4.push(obj[key])
  

    }
    

    if(key==="pair51"||key==="pair52"){
    pair5.push(obj[key])
    
    }
    


    if(key==="pair61"||key==="pair62"){
    pair6.push(obj[key])
    

    }
  
    if(key==="pair71"||key==="pair72"){
    pair7.push(obj[key])
  

    }
    if(key==="pair81"||key==="pair82"){
    pair8.push(obj[key])
    
    }
    if(key==="pair91"||key==="pair92"){
    pair9.push(obj[key])
    console.log(key)

    }
    if(key==="pair101"||key==="pair102"){
    pair10.push(obj[key])
    
    }
    if(key==="pair111"||key==="pair112"){
    pair11.push(obj[key])
    
    }
    if(key==="pair121"||key==="pair122"){
    pair12.push(obj[key])
    console.log(key)

    }
    if(key==="pair131"||key==="pair132"){
    pair13.push(obj[key])
    

    }
    if(key==="pair141"||key==="pair142"){
    pair14.push(obj[key])
    console.log(pair14)
    

    }
    if(key==="pair151"||key==="pair152"){
    pair15.push(obj[key])
    

    }
    if(key==="pair161"||key==="pair162"){
    pair16.push(obj[key])
    

    }
    if(key==="pair171"||key==="pair172"){
    pair17.push(obj[key])

    }
    if(key==="pair181"||key==="pair182"){
    pair18.push(obj[key])
   

    }
    if(key==="pair191"||key==="pair192"){
    pair19.push(obj[key])

    }
    if(key==="pair201"||key==="pair202"){
    pair20.push(obj[key])
    

    }
    if(key==="pair211"||key==="pair212"){
    pair21.push(obj[key])
    console.log(key)

    }
    if(key==="pair221"||key==="pair222"){
    pair22.push(obj[key])
    

    }
    if(key==="pair231"||key==="pair232"){
    pair23.push(obj[key])
    

    }
    if(key==="pair241"||key==="pair242"){
    pair24.push(obj[key])
   

    }
    if(key==="pair251"||key==="pair252"){
    pair25.push(obj[key])
    
    }
    if(key==="pair261"||key==="pair262"){
    pair26.push(obj[key])
    

    }
    if(key==="pair271"||key==="pair272"){
    pair27.push(obj[key])
    
    }
    if(key==="pair281"||key==="pair282"){
    pair28.push(obj[key])
  

    }

} 
  arr.push(pair1)
  arr.push(pair2)
  arr.push(pair3)
  arr.push(pair4)
  arr.push(pair5)
  arr.push(pair6)
  arr.push(pair7)
  arr.push(pair8)
  arr.push(pair9)
  arr.push(pair10)
  arr.push(pair11)
  arr.push(pair12)
  arr.push(pair13)
  arr.push(pair14)
  arr.push(pair15)
  arr.push(pair16)
  arr.push(pair17)
  arr.push(pair18)
  arr.push(pair19)
  arr.push(pair20)
  arr.push(pair21)
  arr.push(pair22)
  arr.push(pair23)
  arr.push(pair24)
  arr.push(pair25)
  arr.push(pair26)
  arr.push(pair27)
  arr.push(pair28);
   for(var i=0;i<arr.length;i++){
   if(arr[i].length<=0){
   arr.splice(i,1);
   }
   
   }
   console.log(arr)
    this.setState({pairing:arr})
    
    var states = this.state.groups
    var pairing = this.state.pairing
    states['title'] = this.state.groups['title']
    states['Pairs'] = pairing
    this.setState({
      groups: states
    })
    console.log(this.state.pairing)
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
  render () {
    return (
      <Paper zDepth={2} style={{alignText: 'center', margin: '1em', padding: '1em'}}>
        <TextField
          onChange={this.onChange}
          floatingLabelText='Sprint Name:'
          id='SprintName'
        />
         <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair11'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair12'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair21'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair22'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair31'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair32'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1'
          id='pair41'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2:'
          id='pair42'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair51'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair52'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair61'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair62'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair71'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair72'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1'
          id='pair81'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2:'
          id='pair82'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair91'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair92'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1'
          id='pair101'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2:'
          id='pair102'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair111'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair112'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair121'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair122'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair131'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair132'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1'
          id='pair141'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2:'
          id='pair142'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair151'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair152'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair161'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair162'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair171'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair172'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1'
          id='pair181'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2:'
          id='pair182'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair191'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair192'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair201'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='202'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair211'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair212'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1'
          id='pair221'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2:'
          id='pair222'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair231'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair232'
        />
        <br />
        <TextField
          value={this.state.Level}
          onChange={this.onChange}
          floatingLabelText='Pair1'
          id='pair241'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2:'
          id='pair242'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair251'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair252'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair261'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair262'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1:'
          id='pair271'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2'
          id='pair272'
        />
        <br />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair1'
          id='pair281'
        />
        <TextField
          onChange={this.onChange}
          floatingLabelText='Pair2:'
          id='pair282'
        />
        <br />
        
        <Row>
          <Col lg={3} />
          <Col lg={2}>

            <RaisedButton fullWidth label='Add Pairs' buttonStyle={{ background: '#FF1493'}} onClick={this.handleSubmit} />

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

export default Update
