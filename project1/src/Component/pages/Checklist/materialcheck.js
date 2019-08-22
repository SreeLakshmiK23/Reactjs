import React from 'react';
import{Card,  CardColumns,Nav} from 'react-bootstrap';
import {Button} from 'react-bootstrap';

export default class Display extends React.Component{
  constructor(props)
  {
      super(props);
      this.state={
          items:[],
          isLoaded: false,
  
      }
  }

  componentDidMount()
  {
  
      fetch('https://jsonplaceholder.typicode.com/users')
      
  
      .then(res=>res.json())
      .then(json => { 
       this.setState({
              isLoaded:true,
              items: json,
                      })
  
                  });
              
  }  




render(){

var { isLoaded, items} = this.state;
 if(!isLoaded){
     return (<div>Me and My Server Broke Up!</div>);
 }
 
 else{
return(
    <div className="column-layout">

<CardColumns className="main-column" >
{items.map(item => (
 
  
 
<Card style={{ width: '18rem'  }}>

   
            <Card.Body key={item.id}> 
            <Card.Title> {item.name }</Card.Title>
            <Card.Text key={item.id.address}>
    {item.email}
  </Card.Text>
  <Button size="sm" variant="primary">Edit</Button> &nbsp; &nbsp;
  <Button  size="sm" variant="primary">Delete</Button>

             </Card.Body>
        </Card>

     ))}
</CardColumns>
<div className="part1"></div>
<div className='part2'></div>



 </div>



);

 }


}








}