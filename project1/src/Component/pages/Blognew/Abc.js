import React, {Component} from "react";
import ContactCard from "./ContactCard";
// import axios from 'axios';
// import Card, {
//   CardPrimaryContent,
//   CardMedia,
//   CardActions,
//   CardActionButtons,
//   CardActionIcons
// } from "@material/react-card";

// function Abc() {
//     return (
  
class Abc extends Component 
{ 
  
    //  constructor(props)
    // {
    //     super(props)

    //     this.state=
    //     {
    //        display:[],
    //        error:''
    //     }
    // }
//     componentDidMount()
//     {
//         axios.get('http://bb1ee001.ngrok.io/blog/display')
        
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
//           <div>

//             <ContactCard/> 
                          
//             <div className="container-z">
               
//               {   
//                    display.length?
                  
//                     display.map(post => <div key={post.id}>
//                      <p>Title:{post.title}</p> 
//                      <p>Subject:{post.subject}</p> 
//                      <p>Content:{post.content}</p> 
//                     <img src={post.url } 
//                     width="600"
//                     height="400"
//                      alt="React Bootstrap logo"
//                     />
//                     <hr/> </div>):               
                    
                    
//                     null
                    
//                 }
//                 { errorMsg ? <div>{errorMsg}</div> : null }

                
                 
//             </div>
          
//           </div>
// );
// }
// }

     constructor(props)
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
      fetch('http://bb1ee001.ngrok.io/blog/display')
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

       <ContactCard/>
          <div> 
             {items.map(item =>(
      //   <li key={item.id}>
      //  Title: {item.title}| Subject:{item.subject}
      // </li>
                <div key={item.id} className="container-z">
                          <p>title : {item.title}</p>
                          <p>Subject:{item.subject}</p>
                          <p>Content:{item.content}</p>
                          <img src={item.url } 
                                  width="600"
                                    height="400"
                                    alt="React Bootstrap logo"/>
                    
                </div>
           
      ))}
          </div>
     </div>
   );
   }
 }
}
export default Abc;























