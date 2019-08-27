import React,{Component} from 'react';
import {Button} from 'react-bootstrap';
import axios from 'axios';
import Modal from 'react-awesome-modal';
import Drop from './Drop.js';
import { render } from "react-dom";
import Picky from "react-picky";
import "react-picky/dist/picky.css";
import { createBrowserHistory } from 'history';
import './index.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Redirect } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import Userpage from './index'
const history = createBrowserHistory();

const unlisten = history.listen((location, action) => {
  // location is an object like window.location
  console.log(action, location.pathname, location.state);
});

class Join extends Component {

  
  constructor(props){
    super(props);
  this.state={
    // visiblenew: false,
        data:[],
        isLoaded: false,
        
        i:1,

      value: null,
      arrayValue: [],
      datalist:[],
      redirect:false,
      name: '',
            phone: '',
            email: '',
            place: '',
            designation: ''
      
  };

    this.selectMultipleOption = this.selectMultipleOption.bind(this);
   
  
}


async componentDidMount(){
  var res1 = await axios.get('http://b9263691.ngrok.io/final/listuser');
  var res2= await axios.get('http://b9263691.ngrok.io/distinct');
  console.log(res1, res2);
  this.setState({
      isLoaded:true,
      data:res1.data,
      datalist:res2.data,
    })            
  console.log(this.state);
  this.userClick=this.userClick.bind(this);
}

 changetry =(event,object,id) => {
event.preventDefault();
console.log("here is the object",object)

 console.log("this.props",this.props)  
     //props is not initialized

 this.props.history.push({
    pathname: '/viewprofile/',
    state:{detail:object.id}
    // state : {id: 1}
 })
  }

    //  setRedirectnew=() =>
    // {
    //     window.location.reload();
    // }

    //     setRedirect=() =>
    // {
    //     this.setState({
    //         redirect:true
    //     })
    //     //window.location.reload();
    // }

    // renderRedirect =() =>{
    //     if(this.state.redirect)
    //     {
    //         return<Redirect to='/profile'/>
    //     }
     
    // }

   openModal=(phone) =>
    {
      this.setState({ phone: phone, visible : true });
      // const postData = { phone: this.state.phone }  onClick={ (e)=>this.changetry(e,obj,phone)} 
}  
    closeModal = ()  => {
        this.setState({
            visible: false
        });
    }
    result(params) {
    console.log(params);
  }
    submitHandler = async e =>
    {  
        e.preventDefault();
        const payload = {
          selections: this.state.arrayValue.toString(),
          phone: this.state.phone,
        }
        console.log('Payload', payload);
        try {
        await axios.post('http://b9263691.ngrok.io/final/assign',payload);
        this.closeModal()
        } catch (e) {
          console.log(e);
          alert('Error posting data!')
        }
    }
    
    userClick(item){
      console.log('=====', this.props);
      this.props.history.push({
        pathname:'/viewprofile',
        state: item
      })
    }

  selectMultipleOption(value) {
    console.count('onChange')
     console.log("Val", value);
     this.setState({ arrayValue: value }); 
  }
  openModalnew() {
        this.setState({
            visiblenew: true,
           name: '',
            phone: '',
            email: '',
            place: '',
            designation: ''
        });
    }

    closeModalnew() {
        this.setState({
            visiblenew: false
        });
    }
  changeHandlernew = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandlernew = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://b9263691.ngrok.io/final/save', this.state)
            .then(response => {

                console.log(response)

            })
            .catch(error => {

                console.log(error)

            })

    }
  

  render() { 
    var { i,isLoaded,data,arrayValue}= this.state;

    var {datalist}=this.state;
    
    {console.log(datalist)}
   const bigList=this.state.datalist;
  const { name,  phone, email, place, designation } = this.state



    if(!isLoaded){

      return <p>keep waiting </p>
    }
    else{
      return (  

        <div>
        <header className="heading">

                        <nav className="toolbar_navigation">
                         {/* style={{ background: "rgb(177, 196, 219)" }}> */}

                            <div className="toolbar_logo">

                                <img
                                    src={require("/home/nineleaps/Desktop/Reactjs/project1/src/Component/pages/User/nine1.jpg")}
                                    width="225"
                                    height="70"
                                    className="d-inline-block align-top"
                                    alt="React Bootstrap logo"
                                />
                            </div>
                            <div className="spacer" />
                            <div className="toolbar_navigation-items">
                                <ul >
                                    <li ><a href='/table' >Checklist</a></li>
                                    <li ><a href='/join' >Users</a></li>
                                    <li ><a href='./displayblog' >Blog</a></li>
                                    <li ><a href='./faqdis' >FAQ</a></li>
                                    <li ><a href='/' >Logout</a></li>
                                </ul>
                            </div>
                        </nav>
                       
                       
                          <div className="actual">
                            <input type="button" value="Add user"  class="btn btn-primary" onClick={() => this.openModalnew()} />
                            </div>
                            </header>
                             <section>
                            <Modal visible={this.state.visiblenew} width="600" effect="fadeInUp" onClickAway={() => this.closeModalnew()}>
                                <div>
                                    {/* <h1>Title</h1>
                        <p>Some Contents</p> 
                        
                         style={{
                            position: "absolute",
                            top: "18%",
                            right: "50%"
                        }}
                        width="800" height="600"
                        
                        
                        
                        */}

                                    <form onSubmit={this.submitHandlernew}  style={{paddingTop:"10px", paddingRight:"40px",paddingLeft:"40px"}}>
                                        <br />
                                        <div class="form-group">
                                            <label for="formGroupExampleInput">Name</label>
                                            <input type="text" name="name" value={name} class="form-control" onChange={this.changeHandlernew} placeholder=" Name" />
                                        </div>

                                        <div class="form-group">
                                            <label for="formGroupExampleInput2">Phone</label>
                                            <input type="text" name="phone" value={phone} onChange={this.changeHandlernew} class="form-control" placeholder="Phone No." />
                                        </div>

                                        <div class="form-group">
                                            <label for="formGroupExampleInput2">email</label>
                                            <input type="text" name="email" value={email} onChange={this.changeHandlernew} class="form-control" placeholder="Email" />
                                        </div>
                                        <div class="form-group">
                                            <label for="formGroupExampleInput2">place</label>
                                            <input type="text" name="place" value={place} onChange={this.changeHandlernew} class="form-control" placeholder="Place" />
                                        </div>
                                        <div class="form-group">
                                            <label for="formGroupExampleInput2"> Designation</label>
                                            <input type="text" name="designation" value={designation} onChange={this.changeHandlernew} class="form-control" placeholder="Designation" />
                                        </div>

                                        
                                        
                                        <input type="submit"  class="btn btn-primary" value="Save"  onClick={this.closeModalnew} />
                
                                 
                                     
                                     
                                      {/* <button onClick={this.setRedirect}>Userpage</button> */}
                                    </form>                                
                                </div>
                            </Modal>
                        </section>
                    
        
          <div key={data.id}>          
            <table class="table" style={{width:" 80%", color: "#212529",    margin: "110px",
                    border:" 2px solid black"}}>
            <thead>
              <tr>
                <th>Sr No.</th>
                <th>Name</th>
              
                <th>Mobile</th>
                <th>email</th>
                <th>Place</th>
                <th>Designation</th>
                <th></th>
              </tr>
            </thead>
            {

                   
              data.map(obj=>( 
                    
                
                   <tbody>
                     
                   
                     <tr>
                       <td>{` ${i++}`}</td>
                       <td>{obj.name}</td>
                       
                       <td>{obj.phone}</td>
                       <td>{obj.email}</td>
                       <td>{obj.place}</td>
                       <td>{obj.designation}</td>
                      
                       <Button size="sm" onClick={()=>this.openModal(obj.phone)}  variant="primary">Assign</Button> &nbsp; &nbsp;
                       <Button size="sm" variant="secondary"  onClick={()=>this.userClick(obj) } >Profile</Button>
                    
                     </tr>
                     
                      
              
                   </tbody>))
                   }
                 </table>
               
              
          </div>  
          
  <Modal visible={this.state.visible} effect="fadeInUp" onClickAway={() => this.closeModal()} >
    <form  className="spacing">
      
       
          <div>
            <h2><center><strong>Assign checklist</strong></center></h2>
                 <Picky
              value={this.state.arrayValue}
              options={bigList}
              onChange={this.selectMultipleOption}

              onChange={e => this.selectMultipleOption(e)}
              open={false}
              valueKey="id"
              labelKey="name"
              multiple={true}
              includeSelectAll={true}
              includeFilter={true}
              // dropdownHeight={600}
            />
          </div>

  

  
    <div className="place">
       <button class="btn btn-primary" onClick={this.submitHandler}>Submit</button>  &nbsp;
       <button onClick={this.closeModalnew}  class="btn btn-info">Cancel</button>
       </div>
       </form>

   
  
    </Modal>

        </div>


        );

    }
    
  }
}
 
export default withRouter(Join);