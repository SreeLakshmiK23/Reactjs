import React from 'react';
import './Toolbar1.css';
import button from 'react-bootstrap';

const toolbar=props=> //functional component
(
    
<header className="toolbar">                
    <nav className="toolbar_navigation">
   
    <div className="toolbar_logo"><img
                          src={require("/home/nineleaps/Desktop/project1/src/Component/pages/Blognew/nine1.jpg")}
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
    
<div className="actual">
<button type="button" class="btn btn-primary">CREATE  BLOG</button>
</div>


</header>



);
export default toolbar;
