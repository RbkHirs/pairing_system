import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {Grid, Row, Col} from 'react-flexbox-grid';
import Avatar from 'material-ui/Avatar';
import Chip from 'material-ui/Chip';
import Pairs from './singlePairs.jsx';
import NotExist from '../messages/notExist.jsx';

export default class SinglePreviouseGroups extends React.Component {
  constructor(props) {
    super(props)
  }

  handleGroupSearch = (evt, value) => {
    this.setState({groupName: value})
    this.props.handleGroupSearch(value)

  }

  handleNameSearch = (evt, value) => {
    this.setState({name: value})
    this.props.handleNameSearch(value)
  }

  render() {
    const style = {
      height: 1200,
      width: 700,
      textAlign: 'center',
      display: 'inline-block',
      margin: '10px'
    }
    return (
        <div>
          <Row>
            <Col lg={2}>
              <TextField
                  hintText='Search by name'
                  fullWidth={true}
                  onChange={this.handleNameSearch}
              />
            </Col>
            <Col lg={2}>
              <TextField
                  hintText='Search By Group '
                  fullWidth={true}
                  onChange={this.handleGroupSearch}
              />
            </Col>
            <Col lg={4}/>
          </Row>
          {this.props.groups.length ? this.props.groups.map(item => {
            return (
                <Paper style={style} zDepth={1}>
                  <Card>
                    <Row>
                      <Col>
                        <CardHeader
                            title={item.title}
                            avatar="images/jsa-128.jpg"
                        />
                      </Col>
                    </Row>
                  </Card>
                  <Pairs pairs={item['Pairs']}/>
                </Paper>
            )
          }) : <NotExist/>}


        </div>
    )
  }
}