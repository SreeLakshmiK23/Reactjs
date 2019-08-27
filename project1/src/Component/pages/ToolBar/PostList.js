import React,{Component} from 'react';
 import axios from 'axios';
import './Toolbar.css';
import Toolbar from './Toolbar.js';
import {Button} from 'react-bootstrap';

class PostList extends Component




{ constructor(props)
    {
        super(props);

        this.state=
        {
           items:[],
           isLoaded:false,
        }
    }
    componentDidMount()
         {
      fetch('http://b9263691.ngrok.io/faq/displayall')
       .then(res => res.json())
         .then(json => 
         {
           this.setState({
             isLoaded:true,
             items:json,
           })
         }) ;
         }

         openModal=() =>
    {
      this.setState({ 
        visible : true 
         });
    }

     
  

    closeModal = ()  => {
        this.setState({
            visible: false
        });
    }
    
    deleteitems=(id)=>
{   
  // this.setState({ id: id})
  console.log(id)

      axios.delete('http://b9263691.ngrok.io/faq/delete/'+`${id}`);
    // { data: { id:id } }
      
window.location.reload();
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
                           
        <Button  size="sm" variant="danger" onClick={()=>this.deleteitems(item.id)}>Delete</Button>
                                             
                </div>
           
      ))}
          </div>
     </div>
   );
   }
 }
}
export default PostList;
