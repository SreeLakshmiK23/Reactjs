import React,{Component} from 'react';
import axios from 'axios';
import './Toolbar.css';
import Toolbar from './Toolbar.js';
//import React from 'react';
// import './Toolbar.css';
//import button from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

// const toolbar=props=> (
//     <div>
//         <header className="toolbar"> 
//         <nav className="toolbar_navigation">

//         <div className="toolbar_logo">
//             <img
//             src={require("/home/nineleaps/Desktop/faq/src/Component/nine1.jpg")}
//             width="150"
//             height="70"
//             className="d-inline-block align-top"
//             alt="React Bootstrap logo"
//             />
//         </div>
//             <div className="spacer"/>
//             <div className="toolbar_navigation-items">
//                 <ul >
//                     <li><a href='/'>Checklist</a></li>
//                     <li><a href='/'>Users</a></li>
//                     <li><a href='/'>Blog</a></li>
//                     <li><a href='/'>FAQ</a></li>
//                     <li><a href='/'>Layout</a></li>
//                 </ul>
//             </div>
//         </nav>
//         {/* <div className="button_space"><input type="submit" value="ADD FAQ" /></div> */}
//         {/* <div className="button_space"><button type="button" class="btn btn-primary">ADD FAQ</button></div> */}
//          <div className="actual"><button type="button" class="btn btn-primary">ADD FAQ</button></div>

//         <div>
//         { this.renderRedirect()}
//         <div className="actualone">< input type="submit" value="Submit" onClick={this.setRedirect} /></div>
//         </div>

//         <div className="container"></div>

//         </header>


// );  

class PostListnew extends Component{


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
            return<Redirect to='/faq'/>
        }
     
    }

 constructor(props)
    {
        super(props)

        this.state=
        {
           display:[],
           error:''
        }
    }
    componentDidMount()
    {
        axios.get('http://e3ee136b.ngrok.io/faq/display')
        
        .then(response => {
            console.log(response)
            this.setState({display:response.data})
        })
        .catch(error => {
            console.log(error)
            this.setState({errorMsg:'Error while retreiving'})
        })
    }





    render()
    { const {display,errorMsg}=this.state
        return(
           <div>
           <Toolbar/>
           
            <div className="container-b">
               
                {/* <p>list of display</p> */}
                {
                   display.length?
                    display.map(post => <div key={post.id}><p> Id:{post.id} </p> <p>Question:{post.question}</p> <p>Category:{post.category}</p> <p>Answer:{post.answer}</p><hr/> </div>):               
                    
                    
                    null
                }
                { errorMsg ? <div>{errorMsg}</div> : null }
            </div>
            </div>
        )
    }

}

export default PostListnew;
//export default toolbar;
// export default Toolbar;