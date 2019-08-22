
import React , {Component} from 'react';

import './check.css';

 import Modal from 'react-awesome-modal';


import axios from 'axios';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Redirect} from 'react-router-dom';
import Popup from "reactjs-popup";
import Appone from "./Appone";
// import './check.css';
import{Card,  CardColumns,Nav} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

class main extends Component
{      
    constructor(props)
    {
        super(props)
      
        this.state=
        {
           
           checkname:'',
          //  myArray:[],
           

            // status:false,
            // redirect:false,
            //  rows: [{}]  
              items:[],
          isLoaded: false,
      
            
        }
       
    }

  // const body = {order,name,description};
  handleChange = idx => e => {
    //console.log('shravan:'+ typeof e);
  
    const { name, value } = e.target;
    // console.log("Target"+e.target)
    // console.log("Target Name"+[name])
    // console.log("Target Values"+[value])
    
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value,
      
    };
    // console.log(rows)
    this.setState({rows});
  };
  
  handleAddRow = () => {
    const item = {
        order:'',
      name: '',
      description:''
    };
    // console.log("items:",item )
    //console.log("rows:"+this.state.rows)

    this.setState({
      rows: [...this.state.rows, item]

//      rows: [...this.state.rows, item.order,item.name,item.description]
    });   
  };

// this.setState(previousState => ({
//     myArray: [...previousState.myArray, 'new value']
// }));


  handleRemoveRow = () => {
    
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows]
    rows.splice(idx, 1) //check
    // console.log("rows:"+rows)
    this.setState({ rows })
  }

openModal() {
this.setState({
visible : true
});
}

closeModal() {
this.setState({
visible : false
});
}

    changeHandler= e =>{
      

        this.setState({[e.target.name]:e.target.value})
        
    }

    
    submitHandler= e =>
    {

        // console.log('sree:'+ typeof e);
         console.log(this.state)
        e.preventDefault()

        // console.log("State Check:"+this.state.checkname)
        // console.log("State Rows:"+this.state.rows)
        // console.log("State Rows:"+this.state.rows)

        axios
        .post('http://731a4a9d.ngrok.io/user/save',this.state)

        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    //fetching from database
      componentDidMount()
  {
  
      fetch('https://jsonplaceholder.typicode.com/users')
      
  
      .then(res=>res.json())
      .then(json => { 
       this.setState({
              isLoaded:true,
              items: json,
                      })
  
                  });
              
  }  


  render() 
  {   const {checkname}=this.state
    var { isLoaded, items} = this.state;

     if(!isLoaded){
     return (<div>Me and My Server Broke Up!</div>);
 }
 
 else{

    return (
       
      <div>
        <header className="toolbar">                
          <nav className="toolbar_navigation">
    
            <div className="toolbar_logo">
              <img src={require("/home/nineleaps/Desktop/Reactjs/project1/src/Component/pages/Checklist/nine1.jpg")}
                  width="150"
                  height="70"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"/>
                </div>
                  <div className="spacer"/>
                    <div className="toolbar_navigation-items">
                      <ul >
                          <li><a href='./checkdisnew'>Checklist</a></li>
                          <li><a href='./userpage'>Users</a></li>
                          <li><a href='./displayblog'>Blog</a></li>
                          <li><a href='./faqdis'>FAQ</a></li>
                          <li><a href='/'>Logout</a></li>
                      </ul>
                    </div>
          </nav>


            <div className="actualthree">
            <input type="button" value="Create Checklist " class="btn btn-info" onClick={() => this.openModal()} />
            </div>
        </header>              
               



    <div>
      <MuiThemeProvider>
        <section>
    
          <Modal visible={this.state.visible} effect="fadeInUp" onClickAway={() => this.closeModal()}  > 
              
          <div className="overflowone">
            <Appone/>
          </div>

              
          </Modal>
        </section>
      </MuiThemeProvider>
      

      <div className="column-layout">
        

            <CardColumns className="main-column" >
            {items.map(item => (
                     
            <Card style={{ width: '18rem'  }}>

              
                        <Card.Body key={item.id}> 
                        <Card.Title> {item.name }</Card.Title>
                        <Card.Text key={item.id.address}>
                {item.email}
              </Card.Text>
              <Button size="sm" variant="primary">Edit</Button> &nbsp; &nbsp;
              <Button  size="sm" variant="primary">Delete</Button>

                        </Card.Body>
                    </Card>

                ))}
            </CardColumns>
            <div className="part1"></div>
            <div className='part2'></div>



 </div>

    </div>
   
               
</div> //main div <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
    );
 }
  }
}
export default main;

