import React from 'react';
import './App.css';
import {BrowserRouter , Route,Switch} from "react-router-dom";
import EditorConvertToHTML from './Component/pages/Blog/Writeblog';
import Faqdisplay from './Component/pages/ToolBar/Faq';
import Blogdisplay from './Component/pages/Blognew/Blog';
// import Header from './Component/Headernew';
import explore from './Component/pages/Blognew/Explore';
import Login from './Component/pages/Login/index';
import Checkdisplay from './Component/pages/Work/Check';
import Checklistdata from './Component/pages/Work/Checklist';
import Userdisplay from './Component/pages/User/Userpage';
import profile from './Component/pages/User/Profile';


function App() {
  

  return (
    <div >
   
        <BrowserRouter>
          <Switch>
                   
                  
                  <Route path = "/faqdis" exact component={Faqdisplay}/>  
                 <Route path ="/writeblog" exact component={EditorConvertToHTML}/> 
                <Route path ="/displayblog" exact component={Blogdisplay}/> 
              
               
                <Route path="/"  exact component={Login}/> 
                
            
         
              
                     <Route path="/table"  exact component={Checkdisplay}/>
                    <Route path="/merged"  exact component={Checklistdata}/>
                  
                    <Route path="/join"  exact component={Userdisplay}/>
                      <Route path="/exploreblog"  exact component={explore}/>
                       
                     <Route path="/viewprofile"  exact component={profile}/>
                     
                       
                          
         </Switch>
        </BrowserRouter>     
         {/* <Footer/>  */}
    </div>
  );
}


export default App;
