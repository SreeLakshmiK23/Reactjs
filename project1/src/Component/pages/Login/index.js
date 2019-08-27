import React from 'react';
import './index.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';



class Login extends React.Component {
 
  constructor(props) {
  
    
    super(props)
    const token =localStorage.getItem("jwt")
        let loggedIn=true
        if(token==null){
            loggedIn= false
        }
    this.state = {
     
      fields: {},
      errors: {},
      
      loggedIn : false
    }

    this.handleChange = this.handleChange.bind(this);
    this.submituserRegistrationForm = this.submituserRegistrationForm.bind(this);

  };

  handleChange(e) {
    let fields = this.state.fields;
    fields[e.target.name] = e.target.value;
    this.setState({
      fields
    });
   console.log(this.state.fields)
  }

  submituserRegistrationForm(e) {
    e.preventDefault();
    

    axios.post('https://72d00706.ngrok.io/authenticate',this.state.fields)
      
    .then(response=>{
      if(response.status==200)
      {
      console.log(this.state.fields)
      console.log(response.data.token);
      localStorage.setItem("jwt",response.data.token);
      this.props.history.push('/userpage');
    }
    });



    if (this.validateForm()) {
      let fields = {};

      fields["username"] = "";

      fields["password"] = "";
      this.setState({ fields: fields });
        
    }

  }

  validateForm() {

    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;



    if (!fields["emailid"]) {
      formIsValid = false;
      errors["emailid"] = "*Please enter your email-ID.";
    }

    if (typeof fields["emailid"] !== "undefined") {

      var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
      if (!pattern.test(fields["emailid"])) {
        formIsValid = false;
        errors["emailid"] = "*Please enter valid email-ID.";
      }
    }



    if (!fields["password"]) {
      formIsValid = false;
      errors["password"] = "*Please enter your password.";
    }

    if (typeof fields["password"] !== "undefined") {
      if (!fields["password"].match(/^.*(?=.{8,})(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%&]).*$/)) {
        formIsValid = false;
        errors["password"] = "*Password must conatain caps small numeric and symbol";
      }
    }



    this.setState({
      errors: errors
    });
    return formIsValid;


  }



  render() {

    const { emailid, password } = this.state
    if(this.state.loggedIn){
    console.log(this.state.loggedIn)
     return <Redirect to ="/userpage" />
    }
    return (
      <div className="page">
        <header className="heading" >

          <nav className="toolbar_navigation" style={{ backgroundColor: "#ffff" }}>

            <div className="toolbar_logo">

              <img
                src={require("/home/nineleaps/Desktop/Reactjs/project1/src/Component/pages/Login/nine1.jpg")}
                width="150"
                height="70"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </div>
            <div className="spacer" />
            <div className="toolbar_navigation-items" >
              <ul >
                <li><a href='/'>Login</a></li>
                <li><a href='/'>Register</a></li>
              </ul>
            </div>
          </nav>
        </header>

        <div id="main-registration-container">

          <div id="register">
            <h1>Welcome Admin </h1>
            <form method="post" name="userRegistrationForm" onSubmit={this.submituserRegistrationForm} >

              <label>Email ID:</label>
              <TextField type="text" name="username" value={this.state.fields.emailid} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.emailid}</div>

              <label>Password</label>
              <TextField type="password" name="password" value={this.state.fields.password} onChange={this.handleChange} />
              <div className="errorMsg">{this.state.errors.password}</div>


              
            <input type="submit"  className="button" value="Login" />
            </form>
          </div>

          <div className="footer">
            <p style={{ marginLeft: "550px" }}>Nineleaps</p>
          </div>


        </div>
      </div>
    );
  }


}


export default Login;

