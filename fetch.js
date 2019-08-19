import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import Modal from 'react-awesome-modal';
import Drop from './Drop.js'





class Fetch extends Component {
  constructor(props){
    super(props);
  this.state={
data:[],
isLoaded: false,
phone:'',


  }

}
componentDidMount(){
  fetch('https://5ff3bdf2.ngrok.io/user/display')
  .then(res => res.json())
  .then(json => {
    this.setState({
      isLoaded:true,
      data:json,
    })
    
  });
  console.log(this.state.data)

}


    // changeHandler= e =>{
    //     this.setState({[e.target.name]:e.target.value})
    // }
    setAssign(phone)
    {
        // e.preventDefault()
        
         this.setState({
            visible: true
        });

        console.log(this.state)
        this.state.phone=phone;
        axios
        .post('https://5ff3bdf2.ngrok.io/',this.state.phone)

        .then(response => {
            console.log(response)
        })
        .catch(error => {
            console.log(error)
        })
    }
   

    closeModal() {
        this.setState({
            visible: false
        });
    }

     result(params) {
    console.log(params);
  }


  render() { 
    var { isLoaded,data}= this.state;
    


    if(!isLoaded){

      return <p>keep waiting </p>
    }
    else{
      return (  

        <div>
          <div key={data.id}>          
                 <table class="table" style={{width:" 80%",
    color: "#212529",    margin: "110px",
    border:" 2px solid black"}}>
                   <thead>
                     <tr>
                       <th>Sr No.</th>
                       <th>Firstname</th>
                       <th>Lastname</th>
                       <th>Mobile</th>
                       <th>email</th>
                       <th>Desigation</th>
                       <th>Place</th>
                       <th></th>
                     </tr>
                   </thead>
                   
            
               
               
                   {
              data.map(data=>(  
                   <tbody>
              
                     <tr>
                       <td>{data.id}</td>
                       <td>{data.firstName}</td>
                       <td>{data.lastName}</td>
                       <td>{data.mobileNo}</td>
                       <td>{data.email}</td>
                       <td>{data.place}</td>
                       <td>{data.designation}</td>
                       <Button size="sm" onClick={()=>this.setAssign(data.mobileNo)}  variant="primary">Assign</Button> &nbsp; &nbsp;
                       <Button size="sm" variant="secondary">Profile</Button>
                     </tr>
                   
                   </tbody>))
                   }
                 </table>
                 
              
          </div>  
           <Modal visible={this.state.visible} width="800" height="600" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                <div>
                                 

                                   
                                        
                    
                                    <h1>Assign Checklist</h1>
                                          <div >
                                          <Drop/>
       
      </div>
                                                                   
                                </div>
                            </Modal>





        </div>


        );

    }
    
  }
}
 
export default Fetch;