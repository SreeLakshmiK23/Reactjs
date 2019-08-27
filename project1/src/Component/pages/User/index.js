import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
//import './login.css';
import axios from 'axios';
import Modal from 'react-awesome-modal';
import Fetch from './fetch';
// import Popup from "reactjs-popup";
import './index.css';

class Userpage extends Component {
    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
        this.closeModal()
        window.location.reload();
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return < Redirect to='/userpage' />
        }
    }



    constructor(props) {
        super(props);
        this.state = {

            visible: false,
            name: '',
            
            phone: '',
            email: '',
            place: '',
            designation: ''


        }
    }

    changeHandler = e => {
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

    openModalnew() {
        this.setState({
            visible: true
        });
    }

    closeModalnew() {
        this.setState({
            visible: false
        });
    }


    render() {
        const { name,  phone, email, place, designation } = this.state
        return (
            <div>

                <div>

                    {/* {this.renderRedirect()}
                    <button type="submit" onClick={this.setRedirect} style={{backgroundColor:"#007bff"  }}>Add User</button> */}

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
                                    <li ><a href='/userpage' >Users</a></li>
                                    <li ><a href='./displayblog' >Blog</a></li>
                                    <li ><a href='./faqdis' >FAQ</a></li>
                                    <li ><a href='/' >Logout</a></li>
                                </ul>
                            </div>
                        </nav>
                        <section style={{
                            position: "absolute",
                            top: "18%",
                            right: "50%"
                        }}>

                            <input type="button" value="Add user"  class="btn btn-primary" onClick={() => this.openModal()} />
                            <Modal visible={this.state.visible} width="800" height="600" effect="fadeInUp" onClickAway={() => this.closeModal()}>
                                <div>
                                    {/* <h1>Title</h1>
                        <p>Some Contents</p> */}

                                    <form onSubmit={this.submitHandler}  style={{paddingTop:"10px", paddingRight:"40px",paddingLeft:"40px"}}>
                                        <br />
                                        <div class="form-group">
                                            <label for="formGroupExampleInput">Name</label>
                                            <input type="text" name="name" value={name} class="form-control" onChange={this.changeHandler} placeholder=" Name" />
                                        </div>

                                        <div class="form-group">
                                            <label for="formGroupExampleInput2">Phone</label>
                                            <input type="text" name="phone" value={phone} onChange={this.changeHandler} class="form-control" placeholder="Phone No." />
                                        </div>

                                        <div class="form-group">
                                            <label for="formGroupExampleInput2">email</label>
                                            <input type="text" name="email" value={email} onChange={this.changeHandler} class="form-control" placeholder="Email" />
                                        </div>
                                        <div class="form-group">
                                            <label for="formGroupExampleInput2">place</label>
                                            <input type="text" name="place" value={place} onChange={this.changeHandler} class="form-control" placeholder="Place" />
                                        </div>
                                        <div class="form-group">
                                            <label for="formGroupExampleInput2"> Designation</label>
                                            <input type="text" name="designation" value={designation} onChange={this.changeHandler} class="form-control" placeholder="Designation" />
                                        </div>

                                        {this.renderRedirect()}
                                        
                                        <input type="submit"  class="btn btn-primary" value="Save" onClick={this.setRedirect}  />
                
                                 
                                     
                                     
                                      {/* <button onClick={this.setRedirect}>Userpage</button> */}
                                    </form>                                
                                </div>
                            </Modal>
                        </section>
                    </header>

                    <Fetch/>


                    {/*
                     <div class="footer">
                        <p>Nineleaps</p>
                    </div> */}
                </div>
            </div>

        );
    }
}

export default Userpage;