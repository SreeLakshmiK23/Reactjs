
import React , {Component} from 'react';

import './check.css';

 import Modal from 'react-awesome-modal';


import axios from 'axios';

import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Redirect} from 'react-router-dom';
import Popup from "reactjs-popup";
import Appone from "./Appone";

import RaisedButton from "material-ui/RaisedButton";

import orderBy from "lodash/orderBy";

// import logo from "./logo.svg";
// import "./App.css";
import Form from "./Form";
import Table from "./Table";

import TextField from "material-ui/TextField";

import './check.css';
import Switch from "react-switch";



const invertDirection = {
  asc: "desc",
  desc: "asc"
};

class Merge extends Component
{      
    constructor(props)
    {
        super(props)
      
        this.state={         
         
          checklist_name:'',
    data: [],
           
      redirect:false,
    editIdx: -1,
    columnToSort: "",
    sortDirection: "desc",
    Private:false,

        document_name:"",
    document_nameError:"",
   document_status:false,
   document_statusError:"",
  selectedOption:'',
  	isChecked: null

    //  document_name:"",
    //   document_status:""
  };
   this.handleChangenew = this.handleChangenew.bind(this);
    //  this.radioChange = this.radioChange.bind(this); 
    }

change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

	componentWillMount () {
		this.setState( { isChecked: this.props.isChecked } );
	}


      _handleChange () {
		this.setState( { isChecked: !this.state.isChecked } );
    }



  //  radioChange(e) {
  //    console.log("e ",e)
  //   this.setState({
  //     selectedOption: e.currentTarget.value
  //   });
  //   console.log("status:",this.state.selectedOption)
  // }

  validate = () => {
    let isError = false;
    const errors = {
      document_idError: "",
      document_statusError: "",
     
    };

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
      this.props.onSubmit(this.state);
      //  this.props.handleSave(this.props.i, this.state.values);
      // clear form
      this.setState({
        document_name: "",
        document_nameError: "",
        document_status: false,
        document_statusError: "",
      
      });
    }
  };

      handleChangenew(Private) {
    this.setState({ Private });
    console.log(this.state.Private)
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
  }

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

    
    // submitHandler= e =>
    // {

    //     // console.log('sree:'+ typeof e);
    //      console.log(this.state)
    //     e.preventDefault()

    //     // console.log("State Check:"+this.state.checkname)
    //     // console.log("State Rows:"+this.state.rows)
    //     // console.log("State Rows:"+this.state.rows)

    //     axios
    //     .post('http://731a4a9d.ngrok.io/user/save',this.state)

    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(error => {
    //         console.log(error)
    //     })
    // }

 
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
        .post('http://b9263691.ngrok.io/json',this.state)

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
 
     


  render() 
  {   
  const{checklist_name}=this.state

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
                          <li><a href='./table'>Checklist</a></li>
                          <li><a href='./join'>Users</a></li>
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
               


{/*popup model*/}
    <div>
      <MuiThemeProvider>
        <section>
          <Modal visible={this.state.visible} effect="fadeInUp"  onClickAway={() => this.closeModal()}>   
          <div className="overflowone">
   
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
        <br/>

        <label>
                 
                </label>
         <label>Public/Private </label> 
           <Switch
          onChange={this.handleChangenew}
          checked={this.state.Private}
          id="normal-switch"
        />
        {/* <div>
        
        <input defaultChecked
              type="radio"
               value="Private"
               checked={this.state.selectedOption === "Private"}
               onChange={this.radioChange} />Public

        <input type="radio"
               value="Public"
               checked={this.state.selectedOption === "Public"}
               onChange={this.radioChange}/>Private
        
         
      </div>  */}
        </div>
       
     


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
                name: "Decsription",
                prop: "description"
              }
              
            ]}
            
          />
            <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })
            }
          />
          {/* <form>
            <RaisedButton label="+" onClick={e => this.onSubmit(e)}  primary />
          </form> */}
          <div className="actualthree">
          <input type="submit" class="btn btn-primary" value="Save"/> &nbsp;  &nbsp; 
          
              
          <button onClick={this.setRedirect}  class="btn btn-info">Cancel</button> 
            <br/>   
            </div>
          
          </form>
        </div>





          </div>             
          </Modal>
        </section>
      </MuiThemeProvider>
      
    </div>     
</div> 
    );
 
  }
}
export default Merge;

