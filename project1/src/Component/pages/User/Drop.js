import React, { Component } from 'react';
import { render } from "react-dom";
import Picky from "react-picky";
import "react-picky/dist/picky.css";
import axios from "axios";
//  const bigList = [];
// //  var data=[];
// // const datalength=data.length;
// // console.log("datalength"+datalength);
// for (var i = 1; i <= 10; i++) {
//    //bigList.push({ id: i, name: `Item ${data[i]}` });
//   bigList.push({ id: i, name: `Item ${i}` });

// }

class Drop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
      arrayValue: [],
      data:[],
      phone:''
      
    };
   
    // this.selectOption = this.selectOption.bind(this);
    this.selectMultipleOption = this.selectMultipleOption.bind(this);
  }
  
 componentDidMount(){
  fetch('http://fe7ca1b8.ngrok.io/distinct')
  .then(res => res.json())
  .then(json => {
    this.setState({
      isLoaded:true,
      data:json,
     
    })
    //  console.log("data"+data);
  });
 }
      setRedirect=() =>
    {
        window.location.reload();
    }
 
  selectMultipleOption(value) {
    console.count('onChange')
    // console.log("Val", value);
     this.setState({ arrayValue: value });
     } //  console.log(this.state)
  //       axios
  //       .post('http://fe7ca1b8.ngrok.io/assign',this.state)

  //       .then(response => {
  //           console.log(response)
  //       })
  //       .catch(error => {
  //           console.log(error)
  //       })
    
  //   // this.setState({ data: value });
  // }
    submitHandler= e =>
    {
        e.preventDefault()
        console.log(this.state)
        axios
        .post('http://fe7ca1b8.ngrok.io/assign',this.state)

        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
  render() {
    var {isLoaded}=this.state;
   const bigList=this.state.data;
  const {arrayValue}=this.state;
     if(!isLoaded){

      return <p>keep waiting </p>
    }
    else{
    return (

  
        <form onSubmit={this.submitHandler }>
  
      <div className="container">
       
          <div className="col">
            <h3>Multi select</h3>
                 <Picky
              value={this.state.arrayValue}
              options={bigList}
              onChange={this.selectMultipleOption}
              open={true}
              valueKey="id"
              labelKey="name"
              multiple={true}
              includeSelectAll={true}
              // includeFilter={true}
              dropdownHeight={600}
            />
          </div>

  

    </div>
       <input type="submit" class="btn btn-primary"  value="Submit"/>
       </form>
    );
    }
  }
}


export default Drop;
