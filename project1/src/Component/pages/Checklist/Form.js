import React from "react";
import TextField from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
//  import Table from "./Table";
import Switch from "react-switch";

export default class Form extends React.Component {
  constructor(props)
    {
        super(props)

        this.state=
        {
  //  checkid:'' ,
  //           checkname:'',
            // checklist: [],
            checkname:'',
            order:'',
            documentid:'',
           documentname:'',
           status:false,
          
           
            
    
    checked: false ,

  }
   this.handleChange = this.handleChange.bind(this);
    }

      handleChange(checked) {
    this.setState({ checked });
  }


  change = e => {
    // this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  validate = () => {
    let isError = false;
    const errors = {
      checkidError: "",
      checknameError: "",
      orderError: "",
      documentidError: "",
     documentnameError: "",
     statuserror:""
    };

  //   if (this.state.username.length < 5) {
  //     isError = true;
  //     errors.usernameError = "Username needs to be atleast 5 characters long";
  //   }

  //   if (this.state.email.indexOf("@") === -1) {
  //     isError = true;
  //     errors.emailError = "Requires valid email";
  //   }

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
      // clear form
      this.setState({
            // checkid:'' ,
           checkname:'',
            order:'',
            documentid:'',
            documentname:'',
            
      });
    }
  };
  
  render() {
    return (
    <div>
      <form>
        <TextField
          name="order"
          hintText="Order"
          floatingLabelText="Order"
          value={this.state.order}
          onChange={e => this.change(e)}
          errorText={this.state.orderError}
          floatingLabelFixed
        />
        <br />
         <TextField
          name="documentid"
          hintText="Documentid"
          floatingLabelText="Documentid"
          value={this.state.documentid}
          onChange={e => this.change(e)}
          errorText={this.state.nameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="documentname"
          hintText="Documentname"
          floatingLabelText="documentname"
          value={this.state.documentname}
          onChange={e => this.change(e)}
          errorText={this.state.descriptionError}
          floatingLabelFixed
        />
        <br />
          <TextField
          name="status"
          hintText="Status"
          floatingLabelText="status"
          value={this.state.status}
          onChange={e => this.change(e)}
          errorText={this.state.descriptionError}
          floatingLabelFixed
        />
        <br/> 
        <label>Public/Private:</label>
          <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          id="normal-switch"
        />
        <br/>
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
        <br/>
      </form>
      


    </div>
    );
  }
}