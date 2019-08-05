import React,{Component} from 'react';
// import {Form,Navbar} from 'react-bootstrap';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
// import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';
// import { EditorState, convertToRaw } from 'draft-js';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './styleblog.css';
// import {Redirect} from 'react-router-dom';
import axios from 'axios';
// import Header from './Header';
import {nav} from 'react-bootstrap';
// import { EditorState } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import {Redirect} from 'react-router-dom';
// class Welcome extends Component{
    // class UncontrolledEditor extends Component {

class EditorConvertToHTML extends Component {
  constructor(props) {
    super(props);
    const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
    const contentBlock = htmlToDraft(html);
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
         title:'' ,
         subject:'' ,
      };
    }
  }

  
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
            return<Redirect to='/displayblog'/>
        }
    }

 
    onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };
    changeHandler= e =>{
        this.setState({[e.target.name]:e.target.value})
    }
    submitHandler= e =>
    {
        e.preventDefault()
        console.log(this.state)
        axios
        .post('http://30b929de.ngrok.io/blog/save',this.state)

        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
   
 render()
 { 
    const { editorState } = this.state;
      const{title,subject,content}=this.state
    return(
      
      <div>

                  <nav class="navbar navbar-dark bg-light">
                    {/* <a class="navbar-brand" href="#" > */}
                    <img src={require("/home/nineleaps/Desktop/project1/src/Component/pages/Blog/nine1.jpg")}
                     width="200" height="80" 
                    class="d-inline-block align-top" 
                    alt="React Bootstrap logo"/>
                    ONBOARDING
                    {/* </a> */}
                    </nav>
       {/* <div > */}
               <h1><center ><strong>Write a Blog</strong></center></h1>
            
              <div className="container-c">
                       
                  
                      <form onSubmit={this.submitHandler} >
                        

                        <p>Title</p>
                        <input type="text" name="title" value={title}  onChange={this.changeHandler} style={{width: "500px"}}/>
                       
        
                        <p>Subject</p>
                        <input  type="text" name="subject" value={subject}  onChange={this.changeHandler} style={{width: "500px"}}/>

                        <p>Content:</p>    
                  
                  <div className= "container-y">
                   <Editor 
      
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    // onEditorStateChange={this.onEditorStateChange}
                    onEditorStateChange={this.onEditorStateChange}            
                    />
                     <textarea
                      disabled
                      name="content"
                      value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                       />
                   </div>
                    <hr/>
                     <br/> 
                                  <div>
                                    { this.renderRedirect()}
                                     <div className="actualtwo">< input type="submit"   class="btn btn-primary" value="Submit" onClick={this.setRedirect} /></div><br/>
                                    <div className="h2">< input type="submit"   class="btn btn-primary" value="Next" onClick={this.setRedirect}
                                    style={{padding:" 12px 28px"} ,{lineHeight: "1rem"} ,{width: "70px"}} /></div>
                                  </div> 
                    
                  </form>
                          
              </div>
            
            
                
      </div> 
    

    );
}
}

export default EditorConvertToHTML;