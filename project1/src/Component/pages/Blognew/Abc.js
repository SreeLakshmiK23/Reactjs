import React, {Component} from "react";
import ContactCard from "./ContactCard";
import ReactHtmlParser,{processNodes,convertNodeToElement,htmlparser2} from 'react-html-parser';

import {Redirect} from 'react-router-dom';
  import{Card,  CardColumns,Nav} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
class Abc extends Component 
{ 

     constructor(props)
    {
        super(props);

        this.state=
        {
           items:[],
           isolated:false,
          //  redirect:false
        }
    }

    exploreClick(item){
      this.props.history.push({
        pathname:'/exploreblog',
        state: item
      })
    }
    componentDidMount()
         {
      fetch('https://54e275d4.ngrok.io/blog/display')
      // fetch('https://raw.githubusercontent.com/Asmitha-Asmi/Data_Json/master/blog.json')
       .then(res => res.json())
         .then(json => 
         {
           this.setState({
             isLoaded:true,
             items:json,
           })
           console.log('props are',this.props);
         }) ;
         }
        

render()
 {
   var  {isLoaded,items}=this.state;
//  const html={} <p>Content:{ReactHtmlParser(item.textAreaContent)}</p> onClick={this.setRedirect()}
   if(!isLoaded)
   {
     return <div>Loading....</div>
   }
   else
   { return(
     <div >

       <ContactCard/>
                     



<div> 
<CardColumns className="column-layout" >
<div>
{items.map(item=>(
<Card style={{ width: '20rem' ,height:'15rem' }}>
<div>
<Card.Body>
<Card.Title>{'Title:'+item.title}</Card.Title>

<p>Subject:{item.subject}</p>



<Card.Footer >

<Button size="sm" variant="primary" onClick={()=>this.exploreClick(item)} >Explore</Button> 

</Card.Footer>
</Card.Body>
</div>
</Card>
))}
</div>
</CardColumns>
</div>
 

     </div>
   );
   }
 }
}
export default Abc;























