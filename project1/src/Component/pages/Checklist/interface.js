
import React , {Component} from 'react';

import './check.css';

 import Modal from 'react-awesome-modal';


import axios from 'axios';

// import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
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

            // status:false,
            // redirect:false,
             rows: [{}]      
            
        }
       
    }

  handleChange = idx => e => {
    const { name, value } = e.target;
    const rows = [...this.state.rows];
    rows[idx] = {
      [name]: value
    };
    this.setState({
      rows
    });
  };
  handleAddRow = () => {
    const item = {
        order:"",
      name: "",
      description:""
    };
    this.setState({
      rows: [...this.state.item, item]
    });
  };
  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    });
  };
  handleRemoveSpecificRow = (idx) => () => {
    const rows = [...this.state.rows]
    rows.splice(idx, 1)
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
        e.preventDefault()
        console.log(this.state)
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
                          <li><a href='./checkdis'>Checklist</a></li>
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
               



    <div >
     <Modal height="90%"  visible={this.state.visible} effect="fadeInUp" onClickAway={() => this.closeModal()}  > 
              
      <div className="ModelTry">   
      
       
        <div className="container">
          <div className="row clearfix">
            <div className="col-md-12 column">

              <form onSubmit={this.submitHandler }> 
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
                {this.state.rows.map((item, idx) => (
                <tbody>
                  
                    <tr id="addr0" key={idx}>
                      <th>{idx}</th>
                      <td>
                        <input
                          type="text"
                          name="order"
                          value={this.state.rows[idx].order}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                      <td>
                        <input
                          type="text"
                          name="name"
                          value={this.state.rows[idx].name}
                          onChange={this.handleChange(idx)}
                          className="form-control"
                        />
                      </td>
                        <td>
                        <input
                          type="text"
                          name="description"
                          value={this.state.rows[idx].description}
                          onChange={this.handleChange(idx)}
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
                 
                </tbody>

                 ))}
              </table>
              <input type="submit" class="btn btn-primary" value="Submit" />
              </form>
              <button onClick={this.handleAddRow} className="btn btn-primary">
                Add Row
              </button>
              <button
                onClick={this.handleRemoveRow}
                className="btn btn-danger float-right"
              >
                Delete Last Row
              </button>
              
            </div>
            
          </div>
          
       
        </div>
        
        {/* </form> */}
      </div>
        
     
                <br/>

                
                </Modal>
                </div>
             
</div> //main div
    );
  }
}
export default list;