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
//   constructor(props) {
//     super(props);
//     this.state = {
//       editorState: EditorState.createEmpty(),
//       title:'' ,
//     subject:'' ,
//     };
//   }

  

    // state=
    // {
    //     redirect:false

    // }

    // setRedirect=() =>
    // {
    //     this.setState({
    //         redirect:true
    //     })
    // }

    // renderRedirect =() =>{
    //     if(this.state.redirect)
    //     {
    //         return<Redirect to='/displayblog'/>
    //     }
    // }

    //  constructor(props)
    // {
    //     super(props)

    //     this.state=
    //     {
    //         title:'' ,
    //         subject:'' ,
    //         content:''
    //         //onEditorStateChange:''
            
    //     }
    // }

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
   
 render(){ 
    const { editorState } = this.state;
      const{title,subject,content}=this.state
    return(
      
      <div >

                  <nav class="navbar navbar-dark bg-light">
                    {/* <a class="navbar-brand" href="#" > */}
                    <img src={require("/home/nineleaps/Desktop/project1/src/Component/pages/Blog/nine1.jpg")}
                     width="200" height="80" 
                    class="d-inline-block align-top" 
                    alt="React Bootstrap logo"/>
                    ONBOARDING
                    {/* </a> */}
                    </nav>
               <h1><center >Write a Blog</center></h1>
          {/* <div className="image"> */}
              {/* <h1><center style={{color:"white"}}>Write a Blog</center></h1> */}
              <div className="container-c">
                {/* <div className="actual"> 
                style={{color:"brown"}}*/}
                    
                  
                      <form onSubmit={this.submitHandler} >
                        

                        <p>Title</p>
                        <input type="text" name="title" value={title}  onChange={this.changeHandler} style={{width: "500px"}}/>
                       
        
                        <p>Subject</p>
                        <input  type="text" name="subject" value={subject}  onChange={this.changeHandler} style={{width: "500px"}}/>

                        <p>Content:</p>    
                  
             
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
                
                    <hr/>
                       <center>
                       {/* <Button variant="primary" type="submit">Submit</Button> */}
                 <button type="submit"  >Submit</button>
                    </center>
                  
                  </form> 
                  {/* <br/>
                  <hr/>   */}
                  
                  {/* <div> */}
                    {/* <center> <button type="button" class="btn btn-primary">SAVE</button>
                    <button type="button" class="btn btn-primary">NEXT</button></center> */}
                {/* </div> */}
                   {/* <div>

                     <center>
                 <button type="submit" >Submit</button>
                    </center> */}
                    
             {/* { this.renderRedirect()}
        
         <center><input type="submit" value="SAVE" onClick={this.setRedirect} />
       <button type="button" class="btn btn-primary">NEXT</button></center> style={{width: "500px"}} */}
        {/* </div>
         */}
        {/* </div>   */}
        

              </div>
            
          </div>   
                
    // </div>
    

    );
}
}

export default EditorConvertToHTML;