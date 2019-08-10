import React,{Component} from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from './Component/pages/Login/index';
import HomePage from './Component/pages/HomePage/index';
import CheckList from './Component/pages/CheckList/index';
import Userpage from './Component/pages/user/index';
import Popup from './Component/pages/popup';

class  App extends Component {
  state = {  }
  render() { 
    return (
<div>
      <Router>
           <div>

              <Route path="/" exact component={Login}/>
              <Route path="/homepage" exact component={HomePage}/>
              <Route path="/checklist" exact component={CheckList}/>
              <Route path="/userpage" exact component={Userpage}/>
              <Route path="/popup" exact component={Popup}/>
             
              
           </div>
         </Router>


</div>


      );
  }
}
 
export default App;