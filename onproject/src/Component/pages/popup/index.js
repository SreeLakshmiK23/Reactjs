import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
//import './login.css';
import axios from 'axios';
class Popup extends Component {
    state = {
        redirect: false
    } 
    setRedirect = () =>{
        this.setState({
            redirect:true
        })
    }
    renderRedirect = ()=> {
        if(this.state.redirect){
            return <Redirect to='/homepage'/>
        }
    }
    render() { 
        return ( 

                <div>
                    <form>
                <div class="form-group">
                    <label for="formGroupExampleInput">First Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input"/>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput2">Last Name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                 </div>
                 <div class="form-group">
                    <label for="formGroupExampleInput2">Place</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                 </div>
                
                 <div class="form-group">
                    <label for="formGroupExampleInput2">Designation</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                 </div>
                 <div class="form-group">
                    <label for="formGroupExampleInput2">Mobile</label>
                    <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input"/>
                 </div>
                 
{/* 
                 {this.renderRedirect()}
                    <button type="submit" onClick={this.setRedirect} style={{backgroundColor:"#007bff"  }}>Save</button> */}
</form>

                
                </div>






         );
    }
}
 
export default Popup;