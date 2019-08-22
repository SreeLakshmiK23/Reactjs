import React, { Component } from "react";
import {Nav,NavDropdown,Navbar,Table,Button,ButtonToolbar} from 'react-bootstrap';
import axios from "axios";
// import { object } from "prop-types";
// import {Redirect} from 'react-router-dom';
// import { Link } from 'react-router-dom';
// import { List, Datagrid, TextField, CloneButton } from 'react-admin';


class list extends Component{
 constructor (props){
   super(props);
   this.state={
     EditObject:undefined,
   }

 }

 myEditClick=(obj,id)=>{
   console.log(obj,"event::event")
//  event.preventDefault();
 const { EditObject } = this.state;
  this.props.history.push({
    pathname: '/editreward/' + obj.id
  })
  console.log(this.props,"this.props")
}

componentDidMount(){
 this.userlist();
}

  userlist(){
    axios.get("https://3823889a.ngrok.io/list").then((EditData)=>{
    this.setState({EditObject:EditData.data})
   
   })
  //  console.log(this.state.EditObject);
}
//  ("div.reward_name").click(function(e) {  
//     var reward_name = (this).attr("reward_name");  
//   });



 render(){
   let {EditObject}=this.state;
    return(
      <div>  
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
         <Navbar.Brand href="#home">Rewards and Recognisation</Navbar.Brand>
         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
         <Navbar.Collapse id="responsive-navbar-nav">
         <Nav className="mr-auto">
         <Nav.Link href="/createreward">createreward</Nav.Link>
         <Nav.Link href="/Awarded">Awarded</Nav.Link>
         <Nav.Link href="/Nominate">Nominate</Nav.Link>
         <Nav.Link href="/Track">Track</Nav.Link>
         <Nav.Link href="/Reports">Reports</Nav.Link>
         <NavDropdown title="Profile" id="collasible-nav-dropdown">
         <NavDropdown.Item href="#action/3.1">Logout</NavDropdown.Item>
         <Navbar fixed="top" />
         {/* <Navbar sticky="top" /> */}
         <NavDropdown.Divider />
         </NavDropdown>
         </Nav>
         </Navbar.Collapse>
         </Navbar>
         <br>
         </br>
         <br>
         </br>
         <Table striped bordered hover>
         <thead>
         <tr>
         <th>reward_name</th>
         <th>frequency</th>
         <th>      </th>
         </tr>
         </thead>
         {EditObject && EditObject.map((obj,index)=>{
             return(
         <tbody>
         <tr>
         <td>{obj.reward_name}</td>
         <td> {obj.frequency}</td>
         <td>
           {/* {this.renderRedirect()} */}
         <ButtonToolbar >
        <Button onClick={(e)=>this.myEditClick(obj,index)} 
        
       
         variant="primary">Edit</Button>
        
         </ButtonToolbar>
         </td>  
         </tr>
          </tbody>)
         }
         )
        }
         </Table> 
         </div> 
 );
}
 
}
export default list;