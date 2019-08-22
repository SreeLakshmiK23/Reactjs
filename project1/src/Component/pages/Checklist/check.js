import React , {Component} from 'react';
// import {button} from 'react-bootstrap';
import './check.css';

 import Modal from 'react-awesome-modal';
import './check.css';

import axios from 'axios';
// import Popup from "reactjs-popup";
import Table from './Table';
import Form from './Form';
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import {Redirect} from 'react-router-dom';
import Popup from "reactjs-popup";

class Checklist extends Component
{      
    constructor(props)
    {
        super(props)

        this.state=
        {
            checkid:'' ,
           checkname:'',
          //  checklist1:''
            // order:'',
            // documentid:'',
            // documentname:'',
             checklist:[],
            status:false,
            redirect:false
      
            
        }
       
    }
 

      setRedirect=() =>
    {
        this.setState({
            redirect:true
        })
    }

    renderRedirect =() =>{
        if(this.state.redirect)
        {
            return<Redirect to='/writecheck'/>
        }
     
    }


    changeHandler= e =>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler= e =>
    {
        e.preventDefault()
        console.log(this.state)
        axios
        .post('http://085afdfb.ngrok.io/json',this.state)

        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    
   

          operation()
    {
      this.setState({
            showMe:!this.state.showMe
           
        })
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

    
render()
  { 
    const{checkid,checkname}=this.state
    return(
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
        </header> 
   
    
                <div className="overflow" > 
                  <form onSubmit={this.submitHandler }>
                    <div>
                      <label>  Enter Checklist Id  No. :</label> 
                        <input type="text" name="checkid" value={checkid} onChange={this.changeHandler}/>
                        <br/>
                        <label>  Enter Checklist Name :</label> 
                        <input type="text" name="checkname" value={checkname} onChange={this.changeHandler}/>
                        <br/>
                        
                       
                    
        <MuiThemeProvider>
          <div className="App">

        {/* { 
                        this.state.showMe? */}
            <input type="button" value="Add Checklist Item" class="btn btn-info" onClick={() => this.openModal()} />{' '}
            {/* <button  class="btn btn-danger" >Delete</button> */}
              
              <section>
                <Modal visible={this.state.visible} effect="fadeInUp" onClickAway={() => this.closeModal()}>
                <div className="overflowone" > 
                <form onSubmit={this.submitHandler }>
                  <Form
                    onSubmit={submission =>
                      this.setState({
                      checklist: [...this.state.checklist, submission]
                      })}
                  />       

                  {/* :null
                    }  */}

                  {/* <br/>
                  <button  class="btn btn-danger" >Delete</button> */}
                </form>
                <br/>

                <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                <br/>  
                </div>
                </Modal>
              </section>

          <Table
            checklist={this.state.checklist}
            header={[
              {
                name: "Order",
                prop: "order"
              },
               {
                name: "Documentid",
                prop: "documentid"
              },
              {
                name: "Documentname",
                prop: "documentname"
              },
               {
                name: "Status",
                prop: "status"
              }
            ]}
          />
        </div>
      </MuiThemeProvider>
        <div className="actualthree">
        <Popup trigger={
                                    <input type="submit" class="btn btn-primary" value="Submit"/>}>
                                      <div>Data has been successfully submitted !!</div>
                                     </Popup>
        
            
              { this.renderRedirect()}
                {/* <div className="actualthree">  */}
                  <div>
                  <button onClick={this.setRedirect} class="btn btn-success" >Available Checklist</button></div>
                
            </div>
         </div> 
      </form>
            
    </div>
    

</div>

       );
   }
}

export default Checklist;
