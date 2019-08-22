import React from 'react';
import{Card,  CardColumns,Nav} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
//import { Card} from 'semantic-ui-react'
// import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import './fetch.css';




export default class profile extends React.Component
{
  constructor(props)
  {
      super(props);
      this.state={
          checked:false,
          data:[],
       
          isLoaded: true
  
      }
  }

    componentDidMount(){
      return fetch('http://293edcd9.ngrok.io/list')
        .then(res=>res.json())
        // .then(res=>console.log(res));
        .then(json => {
            this.setState({
                isLoaded:false,
                data: json,
              })
        });
    }

    sendResponse(item){
      fetch('http://293edcd9.ngrok.io/json',{
        method:'POST',
          headers:{
            Accept:'application/json',
            'content-Type':'application/json'
            },
            body:JSON.stringify(item),
      }
    ).then(response=>{
      const statusCode= response.status;
      this.componentDidMount()
    })
    }

  render(){
//   var { isLoaded, items} = this.state;
// if(!isLoaded){
// return (<div>Server not responding!</div>);
// }
// else{
    return (
      <div>
        
             
              <div className="column-layout">
                <CardColumns  >
                  {
                    this.state.data.map((item,i)=>
                    <Card style={{ width: '20rem'  }}>
                      <div>
                        <Card.Body>
                        <Card.Title>{item.checklist_name}</Card.Title>
                              {
                                (typeof(item.data)=='object')?
                                <div>
                               <List>
    {item.data.map((doc,i)=>{
        // const labelId = `checkbox-list-secondary-label-${value}`;
        return (
          <ListItem >
            <ListItemText  primary={doc.document_name} />
            <ListItemSecondaryAction>
              <Checkbox document_name
                edge="end" 
                value={doc.document_status}
                onChange={()=>{doc.document_status=!doc.document_status;this.sendResponse(item)}}
                // checked={checkedh.indexOf(value) !== -1}
                // inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
        })
      }
    </List>
                                    
                                </div>
                                :null
                              }
 
              </Card.Body>
             </div>
             
            
              </Card>
              )}
              </CardColumns>
              </div>
         
         

  

          </div>
          
          )
        }
      }