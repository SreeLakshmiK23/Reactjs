import React,{Component} from 'react';
// import ReactDOM from 'react-dom';
import axios from 'axios';
import {nav,Button} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css';
// import { Editor } from 'react-draft-wysiwyg';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import {Button,Form} from 'react-bootstrap/Button';

import {Redirect} from 'react-router-dom';



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
        .post('http://1c13ffa5.ngrok.io/faq/save',this.state)

        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
    render()
    {
        const{question,category,answer}=this.state
        return(
            <div>
                
                <div>
                   <nav className="navbar navbar-dark bg-light">
                    {/* <a class="navbar-brand" href="#" > */}
                    <img src={require("/home/nineleaps/Desktop/project1/src/Component/pages/Faq/nine1.jpg")}
                     width="200" height="80" 
                    class="d-inline-block align-top" 
                    alt="React Bootstrap logo"/>
                    ONBOARDING
                    {/* </a> */}
                    </nav>
   
           
            <div >
                <h1 style={{color: "Black"}}><center>Hello Admin!</center></h1>
                
                <h3 style={{fontSize: "30px", color:"Black"}}><center>Welcome to FAQ page</center></h3>
                
                      
                            <div className="overflowTest">
                                {/* <form className="container-a"> */}
                                    <div className="actualone">
                                    <form onSubmit={this.submitHandler }>
                                   
                                     <p >Question:</p>
                                    {/* <textarea cols={50} rows={2} style= {{width:"398.017px"}}/>  */}
                                      <input type="text" name="question" value={question} onChange={this.changeHandler} style={{width: "500px"}}/>
                                    <p>Category:</p> 
                                    <input type="text" name="category" value={category} onChange={this.changeHandler} style={{width: "500px"}}/>
                                    <p>Answer:</p>
                                      <input type="text" name="answer" value={answer} onChange={this.changeHandler} style={{width: "500px"}}/>
                                    
                                    {/* <textarea cols={50} rows={5} style= {{width:"398.017px"}}/> */}

                                    <p>Click here to submit</p>
                                    <div>
                                    { this.renderRedirect()}
                                    <div className="actualone">< input type="submit" value="Submit" onClick={this.setRedirect} /></div>
                                    </div>
                                    <div>
                                    <center>
                                    <Button variant="primary" type="submit">Submit</Button>
                                    {/* <button type="submit">Submit</button> */}
                                    </center>
                                    </div>
                                
                                </form>
                                </div>
                            </div>
             </div>     
             </div>
             </div>
      
 );
}
}

export default Faq;
