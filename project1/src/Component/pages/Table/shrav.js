import React, { Component } from "react";
import Calendar from "react-calendar";
import moment from "moment";
// import "./App.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
//import Container from '@material-ui/core/Container';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
// import Header from './Header';
import { StylesContext } from "@material-ui/styles/StylesProvider";
import Modal from 'react-bootstrap/Modal'
import Container from 'react-bootstrap/Container'
import "/home/nineleaps/loginproo/Events-Web-development/src/Calendar.css"
class shrav extends Component {

state = {
date: "",
date1: "",
date2: "",
ename:[],

};
jump=()=>{
window.location.href="/Ecreate"
}

_onSubmit = async (day) => {
var dateTime = moment( day, 'MM-DD-YYYY HH:mm:ss',true).format("YYYY-MM-DD");
console.log(dateTime)
const response = await axios({
method: 'post',
url: 'http://192.168.1.117:3000/notes',
data: {
date: dateTime
}
});
await this.setState ({date1:response.data[0]});
console.log(response)
return response;
}

render() {

return (

<div className="App">

<Calendar

defaultDate={new Date()}
defaultView="month"
events={this.state.events}

onClickDay={(day) => this._onSubmit(day)}

style={{ height: '50' , float: 'left' }}
/>

<div class="hello">
<Modal.Dialog >
<Modal.Header >
<br></br>
<br>
</br>
<Modal.Title>{this.state.date1.ename}</Modal.Title>
</Modal.Header>

<Modal.Body>
<p>venue:{this.state.date1.venue}</p>
<p>description:{this.state.date1.description}</p>
<p>time:{this.state.date1.time}</p>
</Modal.Body>

<Modal.Footer>
<br>
</br>
</Modal.Footer>
</Modal.Dialog>



</div>
<button class="button button1" variant="primary" type="submit" onClick={this.jump} >
create event
</button>
</div>
);
}
}

export default shrav;