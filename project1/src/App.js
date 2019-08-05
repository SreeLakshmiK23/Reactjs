import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Faq from './Component/pages/Faq/Faq';
import Footer from './Component/pages/Faq/Footer';
// import ToolBar from './Component/pages/ToolBar/Toolbar';
import EditorConvertToHTML from './Component/pages/Blog/Welcome';
import PostList from './Component/pages/ToolBar/PostList';
import Abc from './Component/pages/Blognew/Abc';
// import PostListnew from './Component/pages/ToolBar/PostList1';

function App() {

  return (
    <div >
     {/* <PostList/>  */}
  {/* <PostListnew/> */}
     {/* <EditorConvertToHTML/>  */}
      {/* <Faq/>  */}
      {/* <Abc/> */}
       <Router>
          <div>
                  <Route path = "/" exact component={Faq}/>     
                {/* <Route path = "/tool" exact component={ToolBar}/> */}
                 <Route path = "/faqdis" exact component={PostList}/>  
                  <Route path ="/writeblog" exact component={EditorConvertToHTML}/> 
                <Route path ="/displayblog" exact component={Abc}/>   
         </div>
        </Router>   
        <Footer/>
    </div>
  );
}


export default App;
