import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
//import './login.css';
import axios from 'axios';
import './index.css';



class Login extends Component {


    state = {
        redirect: false
    }
    setRedirect = () => {
        this.setState({
            redirect: true
        })
    }
    renderRedirect = () => {
        if (this.state.redirect) {
            return <Redirect to='/homepage' />
        }
    }

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: ''

        }

    }
    changeHandler = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state)
        axios
            .post('http://34a04434.ngrok.io/authenticate', this.state)
            .then(response => {

                console.log(response)

            })
            .catch(error => {

                console.log(error)

            })

    }






    render() {
        const { username, password } = this.state
        return (
            <div className="container">
                <nav className="contain">
                    <img src={require("/home/nineleaps/Desktop/onproject/onproject/src/Component/pages/Login/logo.png")} />
                    <ul>
                        <li>onboarding</li>
                        
                    </ul>
                </nav>

                <div className="content-body">
                    <form onSubmit={this.submitHandler} >
                        <div className="inputfield">
                            <p>Email :</p>
                            <input type="text" name="username" value={username} onChange={this.changeHandler} placeholder="Email address" style={{ width: "360px" }} />
                        </div>

                        <div className="inputfield">
                            <p>Password :</p>
                            <input type="password" name="password" value={password} onChange={this.changeHandler} placeholder="Password" style={{ width: "360px" }} />
                        </div>

                        <div className="button" >
                            {this.renderRedirect()}
                            <input type="submit" value="Login" style={{ backgroundColor: "#007bff" }} />
                            <button onClick={this.setRedirect}>Homepage</button>
                        </div>

                    </form>

                    {/* <div className="footer">
                        <p>Nineleaps</p>
                    </div> */}
                </div>

            </div>


        );

    }
}

export default Login;