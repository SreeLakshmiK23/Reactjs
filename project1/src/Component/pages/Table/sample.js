
import React , {Component} from 'react';

import './check.css';

 import Modal from 'react-awesome-modal';


import axios from 'axios';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Redirect} from 'react-router-dom';
import Popup from "reactjs-popup";


class list extends Component
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
             rows: [{}]      
            
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


  render() 
  {   const {checkname}=this.state
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
               



    <div  >
    <MuiThemeProvider>
    <section>
     <Modal   visible={this.state.visible} effect="fadeInUp" onClickAway={() => this.closeModal()}  > 
              
      <div >   
         
       
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">

             <form onSubmit={this.submitHandler }> 

             <div className="overflownew">
                <label>  Enter Checklist Name :</label> 
                        <input type="text" name="checkname" value={checkname} onChange={this.changeHandler}/>
                        <br/>  
              <table
                className="table table-bordered table-hover"
                id="tab_logic"
              >
                <thead>
                  <tr>
                    <th className="text-center"> Sl No. </th>
                    <th className="text-center"> Order</th>
                    <th className="text-center"> Name</th>
                    <th className="text-center"> Description</th>
                    <th />
                  </tr>
                </thead>
               
                <tbody>
                   {this.state.rows.map((item, idx) => (
                    <tr id="addr0" key={idx}>
                      <th>{idx+1}</th>
                      <td>
                        <input
                          type="text"
                          name="order"
                          // value={this.state.rows[idx].order}
                          // onChange={this.handleChange(idx)}
                          value={this.state.value}
                          onChange={e=>this.setState({order:e.target.value})}
                          className="form-control"
                        />
                      
                      </td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          // value={this.state.rows[idx].name}
                          // onChange={this.handleChange(idx)}

                           value={this.state.value}
                          onChange={e=>this.setState({name:e.target.value})}
                          className="form-control"
                        />
                      </td>
                        <td>
                        <input
                          type="text"
                          name="description"
                          // value={this.state.rows[idx].description}
                          // onChange={this.handleChange(idx)}
                           value={this.state.value}
                          onChange={e=>this.setState({description:e.target.value})}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <button
                          className="btn btn-outline-danger btn-sm"
                          onClick={this.handleRemoveSpecificRow(idx)}
                        >
                          Remove
                        </button>
                      </td>
                      
                    </tr>
                   ))}
                </tbody>

               
              </table>
              
              <button onClick={this.handleAddRow} className="btn btn-primary">
                Add Row
              </button>
              <button
                onClick={this.handleRemoveRow}
                className="btn btn-danger float-right"
              >
                Delete Last Row
              </button>
              <div className="actualthree">
               <input type="submit" class="btn btn-primary" value="Submit" />
               </div>


               </div>
              </form>
        
            </div>
            
          </div>
          
       
        </div>
         
      </div>
        
     
                <br/>

              
                </Modal>
                </section>
                </MuiThemeProvider>
                </div>
             
</div> //main div
    );
  }
}
export default list;