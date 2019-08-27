import React, {Component} from 'react';
import './Toolbar1.css';
// import button from 'react-bootstrap';
import {Redirect} from 'react-router-dom';
import './stylesnew.css';
import ReactHtmlParser,{processNodes,convertNodeToElement,htmlparser2} from 'react-html-parser';

    class explore extends Component
{
     constructor(props)
    {
        super(props);

        this.state=
        {
           items:[],
           abc:'',
          
           redirect:false
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
            return<Redirect to='/writeblog'/>
        }
     
    }
    render()

    { 
        console.log(this.props.history.location.state.id);
        const{items}=this.state;
        return(
<div>   
 
<header className="toolbar">                
    <nav className="toolbar_navigation">
   
    <div className="toolbar_logo"><img
                          src={require("/home/nineleaps/Desktop/Reactjs/project1/src/Component/pages/Blognew/nine1.jpg")}
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
                    <li><a href='./userpage'>Users</a></li>
                    <li><a href='./displayblog'>Blog</a></li>
                    <li><a href='./faqdis'>FAQ</a></li>
                    <li><a href='/'>Logout</a></li>
                </ul>
            </div>
    </nav>
    
{/* <div className="actual">
<button type="button" class="btn btn-primary">CREATE  BLOG</button>
</div> // { this.setState({abc : this.props.history.location.state.textAreaContent})
//      }{     ReactHtmlParser(this.state.abc)}
*/}


</header>
<div className="container-z">

{this.props.history.location.state.title}<br/>
{this.props.history.location.state.subject}<br/>
{ReactHtmlParser(this.props.history.location.state.textAreaContent)}


</div>



</div>


);
    }
    }
export default explore;
