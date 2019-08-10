import React,{Component} from 'react';


class Fetch extends Component {
  constructor(props){
    super(props);
  this.state={
data:[],
isLoaded: false,

  }

}
componentDidMount(){
  fetch('http://0a462979.ngrok.io/user/display')
  .then(res => res.json())
  .then(json => {
    this.setState({
      isLoaded:true,
      data:json,
    })
    
  });
  console.log(this.state.data)

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
                     </tr>
                   
                   </tbody>))
                   }
                 </table>
                 
              
          </div>
        </div>


        );

    }
    
  }
}
 
export default Fetch;
