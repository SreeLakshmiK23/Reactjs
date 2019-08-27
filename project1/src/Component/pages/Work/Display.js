import React from 'react';
import{Card,  CardColumns,Nav} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import  './check.css';
import Merge from './Merge.js';

import axios from 'axios';

import Picky from "react-picky";
import "react-picky/dist/picky.css";
import Modal from 'react-awesome-modal';
export default class Display extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state={
          items:[],
          isLoaded: false,
         abc:[],
         datalist:[],
         arrayValue:[],
         arrayValuenew:[],
         value:'',
          visibleabc: false,
        //  name:''

  
      }
      this.openModalabc = this.openModalabc.bind(this);
      this.selectMultipleOption = this.selectMultipleOption.bind(this);
  }

//   componentDidMount()
//   {
  
//       fetch('http://bb1341ea.ngrok.io/list')     
//         .then(res=>res.json())
//           .then(json => { 
//        this.setState({
//               isLoaded:true,
//               items: json,
//                       })
  
//                   });
              
//   }  

async componentDidMount(){
  var res1 = await axios.get('http://b9263691.ngrok.io/list');
  var res2= await axios.get('http://b9263691.ngrok.io/final/nameandphone');
  console.log("###", res1);
  this.setState({
      isLoaded:true,
      items:res1.data,
      datalist:res2.data,
      // name:
    //   datalist_phone:res2.data.phone,
    })            
  console.log(this.state);
  console.log("received",this.state.datalist)
}


     openModal=(name) =>
    {
      this.setState({ name: name, visible : true  });
      console.log("name",name)
    }

     
  

    closeModal = ()  => {
        this.setState({
            visible: false
        });
    }


         openModalabc=(name) =>
    {
      this.setState({  visibleabc:true  });
      this.setState({  abc:name.data });
      console.log("name",name.checklist_name)
      console.log("abc",this.state.abc)
    }

     
  

    closeModalabc = ()  => {
        this.setState({
            visibleabc: false
        });
    }

deleteitems=(namea)=>
{   
  this.setState({ name: namea})
  console.log(namea)
    //  axios.delete('http://b9263691.ngrok.io/delete',{checklist_name:name})
    // axios.delete(
    //     'http://b9263691.ngrok.io/delete',
        
    //     data:{
    //     checklist_name:this.state.name
    //     }
    //   );
      axios.delete('http://b9263691.ngrok.io/delete', { data: { checklist_name:namea } });
    //  console.log("name",name)
     window.location.reload();
      

}

// onDelete(name)
// {
//     this.setState({  name:name.data});
//   //  console.log("name",name.checklist_name)
//       console.log("abcdelete",this.state.name)
// axios.delete('https://54e275d4.ngrok.io/deletecheck'+name)
//  console.log("name",name)
// .then(response=>
// {
//   var items=this.state.items;
//   for(var i=0;i<items.length;i++)
//   {
//     if(items[i].checklist_name==name)
//     {
//       items.splice(i,1);
//       this.setState({items:items});
//     }
//   }
// }
// )}
  selectMultipleOption(value) {
    console.count('onChange')
    
      console.log("Vals", value);
      // value.map((i,j)=>
    
      //   this.state.arrayValue.push(value.toString().split(",")[j].split(" ")[1])
      
      // console.log("to string",i ,value.toString().split(",")[j].split(" ")[1])

       
      // )
      
      this.setState({arrayValue:value})
      console.log("out ", this.state.arrayValue)
    
     
     
       
  }
      submitHandler = async e =>
    {  
        e.preventDefault();
          this.state.arrayValue.map((i,j)=>
    
        // this.state.arrayValuenew.push(this.state.arrayValue.toString().split(",")[j].split(" ")[1])
        this.state.arrayValuenew.push(i.split(",")[0].split(" ")[1])
        
          )
      // console.log("to string",i ,value.toString().split(",")[j].split(" ")[1])

       
      
        const payload = {
          // selections: this.state.arrayValue.toString(),
          selections: this.state.arrayValuenew.toString(),
          name: this.state.name,
         
        }
        
        console.log('Payload', payload);
        try {
        await axios.post('http://b9263691.ngrok.io/final/assignnew',payload);
          
        } catch (e) {
          console.log(e);
          alert('Error posting data!')
        }
      this.closeModalabc()
    }







render(){

var { isLoaded, items,arrayValue,datalist,name} = this.state;
    //`${dat.name},`
    
   var bigList=this.state.datalist.map(dat=>dat.name+" "+dat.phone);




 if(!isLoaded){
     return (<div>Server not responding!</div>);
 }
 
 else{
return(
<div>
    <Merge/>

 

     <div>

 
 
     <CardColumns className="column-layout" >
     {this.state.items.map((item,i)=>
     
     <Card style={{ width: '20rem' ,height:'15rem' }}>
     <div>
     <Card.Body>
     <Card.Title>{'Check List:'+item.checklist_name}</Card.Title>

        <Card.Footer className="fixstyle">
       <Button size="sm" variant="primary" onClick={()=>this.openModal(item.checklist_name)}>Assign</Button> &nbsp; &nbsp;
        <Button  size="sm" variant="danger" onClick={()=>this.deleteitems(item.checklist_name)} >Delete</Button>&nbsp; &nbsp;
         
          <Button size="sm" variant="primary" onClick={()=>this.openModalabc(items[i])}>View</Button> &nbsp; &nbsp;
</Card.Footer>
     </Card.Body>
    </div>
   
     </Card>
     )}
     </CardColumns>
     </div>

 {/* onClickAway={() => this.closeModal()}*/}
<Modal visible={this.state.visible}  effect="fadeInUp" >
    <form className="pad">
      
       <div className="spacing">
          <div className="col">
          
            <h2><center><strong>Assign checklist</strong></center></h2>
           
                 <Picky
              value={this.state.arrayValue}
            
              options={bigList}
              onChange={value => this.selectMultipleOption(value)}
              open={false}
              valueKey="id"
              labelKey="name"
              multiple={true}
              includeSelectAll={true}
              includeFilter={true}
              dropdownHeight={600}
            />
             {console.log("array value : ",this.state.arrayValue )}
          </div>

  
</div>
  
    <div className="place">
       <button class="btn btn-primary" onClick={this.submitHandler}>Assign</button>  &nbsp;
       <button onClick={this.setRedirectnew}  class="btn btn-info">Cancel</button>
       </div>
       </form>

   
  
    </Modal>

      <Modal visible={this.state.visibleabc} abc={this.state.abc} effect="fadeInUp" onClickAway={() => this.closeModalabc()} >
    <form className="pad">
      
      
          <div >
         
           <h2><center><strong>Assign checklist</strong></center></h2>
       
          {this.state.abc.map(aa=>
          <div>
            <text>{"Document Name:"+aa.document_name}</text><br/>
            <text>{"Order:"+aa.order}</text><br/>
              <text>{"Description:"+aa.description}</text>
              <hr/>
</div>
          )
          }
           
      
          </div>

  
   
  
   
       </form>

   
  
    </Modal>


 </div> //main div



);

 }

}
}











//     <ul>
   
// {items.map(item => (
 
  
   
//              <li key={item.id}> 
//          Name:{item.checklist_name }</li>
// ))}
// </ul>
// <ul>

// {items.map(item => 
// (
//    <li key={item.id}>
//    name:{item.data.name} </li>
// ))}

//   </ul> 
