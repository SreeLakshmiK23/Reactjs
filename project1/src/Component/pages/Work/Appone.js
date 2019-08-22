import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import injectTapEventPlugin from "react-tap-event-plugin";
import orderBy from "lodash/orderBy";

// import logo from "./logo.svg";
// import "./App.css";
import Form from "./Form";
import Table from "./Table";
// import Popup from "reactjs-popup";
import axios from 'axios';
import TextField from "material-ui/TextField";
// import Popup from "reactjs-popup";
import {Redirect} from 'react-router-dom';
import './check.css';
import Switch from "react-switch";
// injectTapEventPlugin();


const invertDirection = {
  asc: "desc",
  desc: "asc"
};

class Appone extends Component {
  constructor(props)
  { super(props)
  this.state = {
    
    checklist_name:'',
    data: [],
      // {
      //   firstName: "Tann",
      //   lastName: "Gounin",
      //   username: "tgounin0",
      //   email: "tgounin0@wordpress.com",
      //   passsword: "yJG2MuL5piY"
      // },
      
      redirect:false,
    editIdx: -1,
    columnToSort: "",
    sortDirection: "desc",
    checked:false
  };
   this.handleChange = this.handleChange.bind(this);
    
    }

      handleChange(checked) {
    this.setState({ checked });
  }

     setRedirect=() =>
    {
        window.location.reload();
    }


  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  // changeHandler= e =>{
  //       this.setState({[e.target.name]:e.target.value})
  //   }
      submitHandler= e =>
    {
        e.preventDefault()
        console.log(this.state)
        axios
        .post('http://7575cb65.ngrok.io/json',this.state)

        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }

    
  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleSave = (i, x) => {
    this.setState(state => ({
      data: state.data.map((row, j) => (j === i ? x : row))
    }));
    this.stopEditing();
  };

  handleSort = columnName => {
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? invertDirection[state.sortDirection]
          : "asc"
    }));
  };

  render() {
    const{checklist_name}=this.state
    return (
      <div>
      <MuiThemeProvider>
       
        <div className="App">
          <form  onSubmit={this.submitHandler }>
          <h1><center><strong>Create Checklist</strong></center></h1>

        <div className="Appa">
        <TextField
          name="checklist_name"
         
          floatingLabelText="Checklist Name"
          value={this.state.checklist_name}
          onChange={e => this.change(e)}
         
          floatingLabelFixed
        />
        </div>
       
     

          <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })
            }
          />
          <Table
            handleSort={this.handleSort}
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleSave={this.handleSave}
            columnToSort={this.state.columnToSort}
            sortDirection={this.state.sortDirection}
            data={orderBy(
              this.state.data,
              this.state.columnToSort,
              this.state.sortDirection
            )}
            header={[
                {
                name: "Order",
                prop: "order"
              },
              {
                name: "Document Name",
                prop: "document_name"
              },
              {
                name: "Document Status",
                prop: "document_status"
              },
             
              {
                name: "Decsription",
                prop: "description"
              }
            ]}
          />
            <label>Public/Private:</label>
          <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          id="normal-switch"
        />
          <div className="actualthree">
          <input type="submit" class="btn btn-primary" value="Save"/>{' '}
          
              
          <button onClick={this.setRedirect}  class="btn btn-info">Cancel</button> 
            <br/>   
            </div>
          
          </form>
        </div>
      </MuiThemeProvider>
      </div>
    );
  }
}

export default Appone;
