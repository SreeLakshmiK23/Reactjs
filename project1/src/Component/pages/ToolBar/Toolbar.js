import React , {Component} from 'react';
// import {button} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Toolbar.css';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

import Modal from 'react-awesome-modal';


class Toolbar extends Component
{
      constructor(props)
    {
        super(props)

        this.state=
        {
            question:'' ,
            category:'' ,
            answer:'' ,
            redirect:false
            //  items: []
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
            return<Redirect to='/faqdis'/>
        }
     
    }
         openModal=() =>
    {
      this.setState({ 
          visible : true,
        
            });
    }

     
  

    closeModal = ()  => {
        this.setState({
            visible: false
        });
    }

       changeHandler= e =>{
        this.setState({[e.target.name]:e.target.value})
    }
        submitHandler= e =>
    {
        e.preventDefault()
        console.log(this.state)
        axios
        .post('http://b9263691.ngrok.io/faq/save',this.state)

        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
        //  window.location.reload(e);
    }
      notify = () => toast("Wow so easy !");
      
   render()
   {
        const{question,category,answer}=this.state
       return(
           <div>
<header className="toolbar">                
    <nav className="toolbar_navigation">
    {/* <div className="button_space"><input type="submit" value="ADD FAQ" /></div> */}
    {/* <div className="toolbar_logo"><a href="/">LoGo</a></div> */}
    <div className="toolbar_logo"><img
                          src={require("/home/nineleaps/Desktop/Reactjs/project1/src/Component/pages/ToolBar/nine1.jpg")}
                          width="150"
                          height="70"
                          className="d-inline-block align-top"
                          alt="React Bootstrap logo"
                          />
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
    {/* <div className="button_space"><input type="submit" value="ADD FAQ" /></div> */}
    {/* <div className="button_space"><button type="button" class="btn btn-primary">ADD FAQ</button></div> */}
{/* <div className="actual"><button type="button" class="btn btn-primary">ADD FAQ</button></div> style={{fontSize: "40px"}}*/}

 <div>
 { this.renderRedirect()}
 <div className="actualone">
<input type="button" value="Add Faq " class="btn btn-info" onClick={() => this.openModal()} />
</div>
 
 </div> 





{/* <div className="container-b"></div> 
                         <button onClick={this.notify}>Notify !</button>
          <ToastContainer />

*/}


</header>



<Modal visible={this.state.visible}  effect="fadeInUp" onClickAway={() => this.closeModal()} data-dismiss="modal" aria-label="Close">

                            <div className="padnew" >
                              
                                    
                                    <form onSubmit={this.submitHandler }>
                                   
                                     <p >Question:</p>
                                   
                                      <input type="text" required name="question" value={this.state.question} onChange={this.changeHandler} style={{width: "500px"}}/>
                                    <p>Category:</p> 
                                      <input type="text" required name="category" value={this.state.category} onChange={this.changeHandler} style={{width: "300px"}}/> 
                                  
                                            
    

                                    <p>Answer:</p>
                                      <textarea required name="answer" value={this.state.answer} onChange={this.changeHandler} style={{width: "500px"}}/>
                                    
                                    {/* <textarea cols={50} rows={5} style= {{width:"398.017px"}}/> */}
                                    <br/> 



                                    <p>Click here to submit</p>
                                    
                                   
                                    { this.renderRedirect()}
                                    <div className="actualone"> 
                       
                                             
                  <input type="submit" class="btn btn-primary" onClick={this.setRedirect}  value="Submit"/>&nbsp;  &nbsp; 
                                    <button class="btn btn-success" onClick={this.closeModal}>Close</button>
                 
                                    </div>
                                    
                                </form>
                                </div>
                               
                                </Modal>
  </div>
       );
   }
}

export default Toolbar;
