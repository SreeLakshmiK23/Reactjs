import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import Modal from 'react-awesome-modal';
import Drop from './Drop.js';
import { render } from "react-dom";
import Picky from "react-picky";
import "react-picky/dist/picky.css";
import { createBrowserHistory } from 'history';

import {Redirect} from 'react-router-dom';

class Fetch extends Component {
  constructor(props){
    super(props);
  this.state={
        data:[],
        isLoaded: false,
        
        i:1,

      value: null,
      arrayValue: [],
      datalist:[],
      
redirect:false


  };
    this.selectMultipleOption = this.selectMultipleOption.bind(this);
    const user='';
}


async componentDidMount(){
  var res1 = await axios.get('http://293edcd9.ngrok.io/final/listuser');
  var res2= await axios.get('http://293edcd9.ngrok.io/distinct');
  console.log(res1, res2);
  this.setState({
      isLoaded:true,
      data:res1.data,
      datalist:res2.data,
    })            
  console.log(this.state);
}

     setRedirectnew=() =>
    {
        window.location.reload();
    }

        setRedirect=() =>
    {
        this.setState({
            redirect:true
        })
        //window.location.reload();
    }

    renderRedirect =() =>{
        if(this.state.redirect)
        {
            return<Redirect to='/viewprofile'/>
        }
     
    }

   openModal=(phone) =>
    {
      this.setState({ phone: phone, visible : true });
      // const postData = { phone: this.state.phone } 
}  
    closeModal = ()  => {
        this.setState({
            visible: false
        });
    }
    result(params) {
    console.log(params);
  }
    submitHandler = async e =>
    {  
        e.preventDefault();
        const payload = {
          selections: this.state.arrayValue.toString(),
          phone: this.state.phone,
        }
        console.log('Payload', payload);
        try {
            await axios.post('http://293edcd9.ngrok.io/final/assign',payload);
        this.closeModal()
        } catch (e) {
          console.log(e);
          alert('Error posting data!')
        }
    }
    
 
  selectMultipleOption(value) {
    console.count('onChange')
     console.log("Val", value);
     this.setState({ arrayValue: value });
     
  
        // axios
        // .post('http://fe7ca1b8.ngrok.io/assign',[this.state.arrayValue,this.state.phone])

        // .then(response => {
        //     console.log(response)
        // })
        // .catch(error => {
        //     console.log(error)
        // })
    
  }

  pushtry =(event,object) => {
event.preventDefault();
axios.post("https://emailtest.free.beeceptor.com",object) ;

 this.props.history.push({
    pathname: '/editreward' 
  })
  }
  

  render() { 
    var { i,isLoaded,data,arrayValue,phone}= this.state;

    var {datalist}=this.state;
   const bigList=this.state.datalist;




    if(!isLoaded){

      return <p>keep waiting </p>
    }
    else{
      return (  

        <div>
          <div key={data.id}>          
                 <table class="table" style={{width:" 80%",
                    color: "#212529",    margin: "110px",
                    border:" 2px solid black"}}>
                   <thead>
                     <tr>
                       <th>Sr No.</th>
                       <th>Name</th>
                      
                       <th>Mobile</th>
                       <th>email</th>
                       <th>Place</th>
                       <th>Designation</th>
                       <th></th>
                     </tr>
                   </thead>
                   {
              data.map(obj=>( 
                    
                  
                   <tbody>
                   { this.renderRedirect()}
                     <tr>
                       <td>{` ${i++}`}</td>
                       <td>{obj.name}</td>
                       
                       <td>{obj.phone}</td>
                       <td>{obj.email}</td>
                       <td>{obj.place}</td>
                       <td>{obj.designation}</td>
                      
                       <Button size="sm" onClick={()=>this.openModal(obj.phone)}  variant="primary">Assign</Button> &nbsp; &nbsp;
                       <Button size="sm" variant="secondary" onClick={ (e)=>this.pushtry(e,obj)}>Profile</Button>
                     </tr>
                     
                      
              
                   </tbody>))
                   }
                 </table>
               
              
          </div>  
          
  <Modal visible={this.state.visible} width="800" height="600" effect="fadeInUp" onClickAway={() => this.closeModal()}>
    <form>
      <div className="container">
       
          <div className="col">
            <h3>Multi select</h3>
                 <Picky
              value={this.state.arrayValue}
              options={bigList}
              onChange={this.selectMultipleOption}

              onChange={e => this.selectMultipleOption(e)}
              open={false}
              valueKey="id"
              labelKey="name"
              multiple={true}
              includeSelectAll={true}
              // includeFilter={true}
              dropdownHeight={600}
            />
          </div>

  

    </div>
    <div className="actual">
       <button class="btn btn-primary" onClick={this.submitHandler}>Submit</button>  &nbsp;
       <button onClick={this.setRedirectnew}  class="btn btn-info">Cancel</button>
       </div>
       </form>

   
  
    </Modal>

        </div>


        );

    }
    
  }
}
 
export default Fetch;