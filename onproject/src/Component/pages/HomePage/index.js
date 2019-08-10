import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import Modal from 'react-awesome-modal';
//import './login.css';
import axios from 'axios';
import Popup from "reactjs-popup";
import modal from 'react-modal';
import './index.css';



// export default () => (
 
//    <Popup trigger={<button> Trigger</button>} position="right center">
//       <div>Popup content here !!</div>
//     </Popup>
//   );




class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible : false
        }
    }
    openModal() {
        this.setState({
            visible : true
        });
    }

    closeModal() {
        this.setState({
            visible : false
        });
    }
    // state = {
    //     redirect: false
    // } 
    // setRedirect = () =>{
    //     this.setState({
    //         redirect:true
    //     })
    // }
    // renderRedirect = ()=> {
    //     if(this.state.redirect){
    //         return <Redirect to='/checklist'/>
    //     }
    // }

    render() { 
        return ( 
            <div>

        



              <header className="heading">
     
              <nav className="toolbar_navigation">
 
 <div className="toolbar_logo">
     
               <img
                       src={require("/home/nineleaps/Desktop/onproject/onproject/src/Component/pages/user/nine1.jpg")}
                       width="150"
                       height="70"
                       className="d-inline-block align-top"
                       alt="React Bootstrap logo"
                       />
 </div>
         <div className="spacer"/>
         <div className="toolbar_navigation-items">
             <ul >
                 <li><a href='/Homepage'>Checklist</a></li>
                 <li><a href='/Userpage'>Users</a></li>
                 <li><a href='./writeblog'>Blog</a></li>
                 <li><a href='./faqdis'>FAQ</a></li>
                 <li><a href='/'>Logout</a></li>
             </ul>
         </div>
 </nav>
</header>
<section>
            {/* <h1>React-Modal Examples</h1> */}
            <input type="button" value="Create checklist" onClick={() => this.openModal()} />
            <Modal visible={this.state.visible}  effect="fadeInUp" onClickAway={() => this.closeModal()}>
                
                
                <div>
                          
                            
                            
                            
                <form>
                
                <div class="form-group">
                    <label for="exampleInputEmail1">Enter name of Checklist</label>
                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter checklist"/>
                  </div>  

                  <div>
                  <table class="table">
                            <thead>
                                <tr>
                                <th scope="col">Sr. no</th>
                                <th scope="col">Order</th>
                                <th scope="col">Name</th>
                                <th scope="col">Discription</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td><input></input></td>
                                <td><input></input></td>
                                <td><input></input></td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td><input></input></td>
                                <td><input></input></td>
                                <td><input></input></td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td><input></input></td>
                                <td><input></input></td>
                                <td><input></input></td>
                                </tr>
                            </tbody>
            </table>
                  </div>
    
             
                </form>
                               {/* <h1>Title</h1>
                               <p>Some Contents</p> */}
                               <a href="javascript:void(0);" onClick={() => this.closeModal()}>Close</a>
                               <br/>
                               <a href="javascript:void(0);" onClick={() => this.closeModal()}>save</a>
                </div>
            </Modal>
        </section>           











<div>
            <div class="container">
                <div class="card-deck">
                    <div class="card bg-primary">
                    <div class="card-body text-center">
                    <p class="card-text">Some text inside the first card</p>
                    <p class="card-text">Some more text to increase the height</p>
                    <p class="card-text">Some more text to increase the height</p>
                    <p class="card-text">Some more text to increase the height</p>
                </div>
                </div>
                <div class="card bg-warning">
                <div class="card-body text-center">
                    <p class="card-text">Some text inside the second card</p>
                </div>
                </div>
                    
            </div>
            </div>

                                    <div class="footer">
                                        <p>Nineleaps</p>
                                    </div>

                    </div>
                </div>    
         );
    }
}

 
export default HomePage;