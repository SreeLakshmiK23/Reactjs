import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import {nav,button} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import {Button,Form} from 'react-bootstrap/Button';

import {Redirect} from 'react-router-dom';
 import Popup from "reactjs-popup";


class Faq extends Component{

    state=
    {
        redirect:false

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
            return<Redirect to='/faqdis'/>
        }
     
    }

    constructor(props)
    {
        super(props)

        this.state=
        {
            question:'' ,
            category:'' ,
            answer:'' 
            //  items: []
        }
    }

    add() {
    
      this.state.items.concat([this.state.value])
   }
    // setRefresh() {
        
    //    window.location.reload();
    // }
    changeHandler= e =>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler= e =>
    {
        e.preventDefault()
        console.log(this.state)
        axios
        .post('http://b726b643.ngrok.io/faq/save',this.state)

        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render()
    {  
        //  var divItems = this.items.map( ( item, index ) => {
        // return <div key={index}>{item.value}</div>
        // });

        const{question,category,answer}=this.state
        
        return(
            
                
        <div >
                   <nav className="navbar navbar-dark bg-light">
                    
                    <img src={require("/home/nineleaps/Desktop/Reactjs/project1/src/Component/pages/Faq/nine1.jpg")}
                     width="200" height="80" 
                    class="d-inline-block align-top" 
                    alt="React Bootstrap logo"/>
                    ONBOARDING
                   
                    </nav>
   
         
            <div >
                <p style={{fontSize: "30px",color: "Black"}}><center><strong>Hello Admin!</strong></center></p>
                
                <p style={{fontSize: "30px", color:"Black"}}><center><strong>Welcome to FAQ page</strong></center></p>
                        
                      
                            <div className="overflowTest"  >
                                {/* <form className="container-a"> */}
                                    <div className="actualone">
                                    <form onSubmit={this.submitHandler }>
                                   
                                     <p >Question:</p>
                                    {/* <textarea cols={50} rows={2} style= {{width:"398.017px"}}/>  */}
                                      <input type="text" name="question" value={this.state.question} onChange={this.changeHandler} style={{width: "500px"}}/>
                                    <p>Category:</p> 
                                      <input type="text" name="category" value={this.state.category} onChange={this.changeHandler} style={{width: "300px"}}/> 
                                        {/* <div>
                                            <select defaultValue={this.state.selectValue} name="category" value={category}
                                            onChange={this.changeHandler} >
                                                <option value="">Option</option>
                                                <option value="Accomodation">Accomodation</option>
                                                <option value="Finance">Finance</option>
                                                <option value="Benefits">Benefits</option>
                                                <option value="Opportunities">Opportunities</option>
                                                <option value="Major Clients">Major Clients</option>
                                                <option value="Technologies used">Technologies used</option>
                                            

                                            </select> */}
                                            
                                        {/* </div>
                                         <input 
                                            type="submit" 
                                            className="btn btn-primary addButton" 
                                            value="Add" />


    <div>
         {divItems}
         <button onClick={this.add}> Add </button>
       </div>  */}

                                    <p>Answer:</p>
                                      <input type="text" name="answer" value={this.state.answer} onChange={this.changeHandler} style={{width: "500px"}}/>
                                    
                                    {/* <textarea cols={50} rows={5} style= {{width:"398.017px"}}/> */}
                                    <br/> 



                                    <p>Click here to submit</p>
                                    
                                   
                                    { this.renderRedirect()}
                                    <div className="actualone"> 
                                    <Popup trigger={
                                    <input type="submit" class="btn btn-primary"  value="Submit"/>
                                    }>
                                      <div>Data has been successfully submitted !!</div>
                                     </Popup>  &nbsp;  &nbsp; 
                  
                                    <button onClick={this.setRedirect} class="btn btn-success" >Visit FAQ</button>
                                    </div>
                                    
                                </form>
                                </div>
                                </div>
                                </div>
                            </div>
                                    
          
            
      
 );
}
}

export default Faq;
