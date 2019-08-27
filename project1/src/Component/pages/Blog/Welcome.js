import React,{Component} from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import './styleblog.css';
import axios from 'axios';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import { EditorState, convertToRaw, ContentState } from 'draft-js';
import {Redirect} from 'react-router-dom';


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
         content: null,
         textAreaContent: '',
      };
    }
    window.blogPageState = this.state;
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
    changeHandler = (e, editorType = false , value = '') => {
        if (editorType) {
            this.setState({content :e , textAreaContent: value }, () => console.log('editorType',this.state)); 
        } else {
            this.setState({[e.target.name]:value ? e.target.value : e.target.value}, () => console.log('data',this.state));
        }
    }
    submitHandler= e =>
    {
        e.preventDefault()
        console.log(this.state)
        axios
        .post('http://54e275d4.ngrok.io/blog/save',this.state)

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
      const{title,subject,textAreaContent}=this.state
    return(
      
      <div>

                  <nav class="navbar navbar-dark bg-light">
                    {/* <a class="navbar-brand" href="#" > */}
                    <img src={require("/home/nineleaps/Desktop/Reactjs/project1/src/Component/pages/Blog/nine1.jpg")}
                     width="200" height="80" 
                    class="d-inline-block align-top" 
                    alt="React Bootstrap logo"/>
                   
                    {/* </a> */}
                    </nav>
       {/* <div > */}
               <h1><center ><strong>Write a Blog</strong></center></h1>
            
              <div className="container-c">
                       
                  
                      <form onSubmit={this.submitHandler} >
                        

                        <p>Title</p>
                        <input type="text"required name="title" value={title}  onChange={this.changeHandler} style={{width: "500px"}}/>
                       
        
                        <p>Subject</p>
                        <input  type="text" required name="subject" value={subject}  onChange={this.changeHandler} style={{width: "500px"}}/>

                        <p>Content:</p>    
                  
                  <div >
                   <Editor 
                    required
                    onChange={(e) => this.changeHandler(e,true,draftToHtml(convertToRaw(editorState.getCurrentContent())))}
                    editorState={editorState}
                    wrapperClassName="demo-wrapper"
                    editorClassName="demo-editor"
                    onEditorStateChange={this.onEditorStateChange}         
                    />
                     <textarea
                      disabled
                      name="textAreaContent"
                      value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
                        
                       />
                   </div>
                    <hr/>
                     <br/> 
                                  <div>
                                    { this.renderRedirect()}
                                     <div className="actualtwo">
                                     <input type="submit"   class="btn btn-primary" value="Submit"  />  &nbsp;  &nbsp; 
                                      <button onClick={this.setRedirect} class="btn btn-success" >Visit blog</button></div>
                                  </div> 
                    
                  </form>
                          
              </div>
            
            
    
                       </div>

    );
}
}

export default EditorConvertToHTML;