import React,{Component} from 'react';
// import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Faq from './Component/pages/Faq/Faq';
import ValidationForm from './Component/pages/Faq/Validform';
// import Footer from './Component/pages/Faq/Footer';
// import ToolBar from './Component/pages/ToolBar/Toolbar';
import EditorConvertToHTML from './Component/pages/Blog/Welcome';
import PostList from './Component/pages/ToolBar/PostList';
import Abc from './Component/pages/Blognew/Abc';
import Checklist from './Component/pages/Checklist/check';
// import PostListnew from './Component/pages/ToolBar/PostList1';
import material from './Component/pages/Checklist/materialcheck';
import Login from './Component/pages/Login/index';
import Userpage from './Component/pages/User/index';
import list from './Component/pages/Checklist/newcheck';
// import listnew from './Component/pages/Checklist/check2';
//  import Form from './Component/Form/Form.js';
// import Table from './Component/Table/Table.js';
import Abcdef from './Component/pages/Checklist/check2';
import Table7 from './Component/pages/Table/Table';
// import Appone from './Component/pages/Work/Appone';
import Display from './Component/pages/Work/Display';
import main from './Component/pages/Work/main';
import Merge from './Component/pages/Work/Merge';
// import EditorConvertToHTML from './Component/pages/Blog/Welcome';
import Drop from './Component/pages/User/Drop';
import Fetch from './Component/pages/User/Join';
import profile from './Component/pages/User/Profile';

function App() {
  

  return (
    <div >
     

       <Router>
          <div>
                   <Route path = "/writefaq" exact component={Faq}/>      
              <Route path = "/writefaqvalid" exact component={ValidationForm}/>      
                  <Route path = "/faqdis" exact component={PostList}/>  
                 <Route path ="/writeblog" exact component={EditorConvertToHTML}/> 
                <Route path ="/displayblog" exact component={Abc}/> 
                <Route path="/checkdis"  exact component={Checklist}/>
                {/* <Route path="/writecheck"  exact component={Checknew}/> */}
                <Route path="/"  exact component={Login}/>
                <Route path="/userpage"  exact component={Userpage}/>
               <Route path="/checkdisnew"  exact component={list}/>
              
                {/* <Route path="/checkdis2"  exact component={listnew}/> 
                 <Route path="/checkdisnewstate"  exact component={material}/>
                <Route path="/table"  exact component={Appone}/>
              */}
                <Route path="/discheck"  exact component={Abcdef}/>
                  <Route path="/distable"  exact component={Table7}/>
                  
                   <Route path="/tableone"  exact component={main}/>
                     <Route path="/table"  exact component={Display}/>
                    <Route path="/merged"  exact component={Merge}/>
                   <Route path="/drop"  exact component={Drop}/>
                    <Route path="/join"  exact component={Fetch}/>
                      <Route path="/viewprofile"  exact component={profile}/>
                  
         </div>
        </Router>    
         {/* <Footer/>  */}
    </div>
  );
}


export default App;
