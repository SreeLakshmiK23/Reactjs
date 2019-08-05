import React,{Component} from 'react';
import axios from 'axios';
import './Toolbar.css';
import Toolbar from './Toolbar.js';


class PostList extends Component


// {   constructor(props)
//     {
//         super(props)

//         this.state=
//         {
//            display:[],
//            error:''
//         }
//     }
//     componentDidMount()
//     {
//         axios.get('http://234849dc.ngrok.io/faq/display')
        
//         .then(response => {
//             console.log(response)
//             this.setState({display:response.data})
//         })
//         .catch(error => {
//             console.log(error)
//             this.setState({errorMsg:'Error while retreiving'})
//         })
//     }


//     render()
//     { const {display,errorMsg}=this.state
//         return(
//            <div>
//            <Toolbar/>
//             <div className="container-b">
               
//                 {/* <p>list of display</p> */}
//                 {
//                    display.length?
//                     display.map(post => <div key={post.id}><p> Id:{post.id} </p> <p>Question:{post.question}</p> <p>Category:{post.category}</p> <p>Answer:{post.answer}</p><hr/> </div>):               
                    
                    
//                     null
//                 }
//                 { errorMsg ? <div>{errorMsg}</div> : null }
//             </div>
//             </div>
//         )
//     }

// }

{ constructor(props)
    {
        super(props);

        this.state=
        {
           items:[],
           isolated:false,
        }
    }
    componentDidMount()
         {
      fetch('http://bb1ee001.ngrok.io/faq/display')
       .then(res => res.json())
         .then(json => 
         {
           this.setState({
             isLoaded:true,
             items:json,
           })
         }) ;
         }
        

render()
 {
   var  {isLoaded,items}=this.state;

   if(!isLoaded)
   {
     return <div>Loading....</div>
   }
   else
   { return(
     <div >

       <Toolbar/>
          <div> 
             {items.map(item =>(
  
                <div key={item.id} className="container-b">
                          <p>Question: {item.question}</p>
                          <p>Category:{item.category}</p>
                          <p>Answer:{item.answer}</p>
                                             
                </div>
           
      ))}
          </div>
     </div>
   );
   }
 }
}
export default PostList;
