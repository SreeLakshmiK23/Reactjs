import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
//import './login.css';
import axios from 'axios';

class CheckList extends Component {
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
                <label for="exampleInputEmail1">Enter name of Checklist</label>
                <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter checklist"/>
              </div>  

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

            
            {/* {this.renderRedirect()}
            <button type="submit" class="btn btn-primary">Add Item</button>
            <a type="submit"  class="btn btn-info" onClick={this.setRedirect}>Save</a>

            
            <button type="submit" class="btn btn-primary">delete</button> */}
            </form>
            </div>


        );
    }
}
 
export default CheckList;