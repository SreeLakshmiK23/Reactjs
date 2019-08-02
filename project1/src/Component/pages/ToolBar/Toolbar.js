import React from 'react';
import {button} from 'react-bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Toolbar.css';
// import {Redirect} from 'react-router-dom';


// class toolbar extends Component
// {
// state=
//     {
//         redirect:false

//     }

//     setRedirect=() =>
//     {
//         this.setState({
//             redirect:true
//         })
//     }

//     renderRedirect =() =>{
//         if(this.state.redirect)
//         {
//             return<Redirect to='/'/>
//         }
     
//     }

const toolbar=props=> //functional component
(    
    
<header className="toolbar">                
    <nav className="toolbar_navigation">
    {/* <div className="button_space"><input type="submit" value="ADD FAQ" /></div> */}
    {/* <div className="toolbar_logo"><a href="/">LoGo</a></div> */}
    <div className="toolbar_logo"><img
                          src={require("/home/nineleaps/Desktop/project1/src/Component/pages/ToolBar/nine1.jpg")}
                          width="150"
                          height="70"
                          className="d-inline-block align-top"
                          alt="React Bootstrap logo"
                          />
    </div>
            <div className="spacer"/>
            <div className="toolbar_navigation-items">
                <ul >
                    <li><a href='/'>Checklist</a></li>
                    <li><a href='/'>Users</a></li>
                    <li><a href='/'>Blog</a></li>
                    <li><a href='/'>FAQ</a></li>
                    <li><a href='/'>Logout</a></li>
                </ul>
            </div>
    </nav>
    {/* <div className="button_space"><input type="submit" value="ADD FAQ" /></div> */}
    {/* <div className="button_space"><button type="button" class="btn btn-primary">ADD FAQ</button></div> */}
<div className="actual"><button type="button" class="btn btn-primary">ADD FAQ</button></div>

{/* <div>
 { this.renderRedirect()}
 <div className="actualone">< input type="submit" value="Submit" onClick={this.setRedirect} /></div>
 </div> */}





{/* <div className="container-b"></div> */}


</header>



);

export default toolbar;
