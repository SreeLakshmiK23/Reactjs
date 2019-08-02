import React,{Component} from 'react';
import axios from 'axios';
import './Toolbar.css';
import Toolbar from './Toolbar.js';


class PostList extends Component


{   constructor(props)
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
export default PostList;
// export default Toolbar;