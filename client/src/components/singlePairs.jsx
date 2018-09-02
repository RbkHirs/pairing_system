import React from 'react'
import {Row, Col} from 'react-flexbox-grid'
import Avatar from 'material-ui/Avatar'
import Chip from 'material-ui/Chip'

export default class Pairs extends React.Component {
constructor (props) {
super(props)

}

render () {
return (
<div style={{margin: '3em'}}>
{this.props.pairs.map(item => {
return (
<Row>
<Col style={{margin: '1em'}}>
<Chip>
{<Avatar src="http://www.linusakesson.net/programming/kernighans-lever/cat.png" />}
{item[0].StudentName}
<br/> 
Level: {item[0].Level}

</Chip>
</Col>
<Col lg={3} />
<Col style={{margin: '1em'}}>

<Chip>
{<Avatar src="http://www.linusakesson.net/programming/kernighans-lever/cat.png" />}
{item[1].StudentName}
<br/> 
Level: {item[1].Level}
</Chip>

</Col>

</Row>
)
})}
</div>
)
}
}