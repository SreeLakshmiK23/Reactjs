import React from "react";


export default class Formnew extends React.Component {
  state = {
    document_name:"",
    document_nameError:"",
   document_status:"",
   document_statusError:"",
  };

  change = e => {
   
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
        
      
        <a href=" " onClick={e => this.onSubmit(e)} style={{marginLeft:"22rem"}} >+ Add Row </a>
      </form>
      
    );
  }
}
