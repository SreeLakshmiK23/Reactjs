import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";

export default class Form extends React.Component {
  state = {
    document_name:"",
    document_nameError:"",
   document_status:"",
   document_statusError:"",
  
  };

  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      document_idError: "",
      document_statusError: "",
     
    };

    // if (this.state.username.length < 5) {
    //   isError = true;
    //   errors.usernameError = "Username needs to be atleast 5 characters long";
    // }

    // if (this.state.email.indexOf("@") === -1) {
    //   isError = true;
    //   errors.emailError = "Requires valid email";
    // }

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
        document_status: "",
        document_statusError: "",
      
      });
    }
  };
     

  render() {
    
    return (
      
      <form>
     
     { /*                  
      <table>
      <tr>
      <td> 
       <TextField
          name="document_name"
          
          floatingLabelText="Document Name"
          value={this.state.document_name}
          onChange={e => this.change(e)}
          errorText={this.state.document_nameError}
          floatingLabelFixed
        />
        </td>
       <td>
        <TextField
          name="document_status"
         
          floatingLabelText="Document Status"
          value={this.state.document_status}
          onChange={e => this.change(e)}
          errorText={this.state.document_statusError}
          floatingLabelFixed
        />
        </td>
     
         
         </tr>
       </table> */}
        <RaisedButton label="+" onClick={e => this.onSubmit(e)}  primary />
      </form>
      
    );
  }
}
