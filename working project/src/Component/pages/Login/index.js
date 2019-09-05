import React from 'react'
import './index.css'
import { Form, Button, Card, Nav, Navbar } from 'react-bootstrap'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import Modal from 'react-awesome-modal'
import { Table, Badge, Alert } from 'react-bootstrap'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      redirect: false,
      admin_warn: false
    }
    this.adminLogin = this.adminLogin.bind(this)
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/table' />
    }
  }

  openAdmin_Warn () {
    this.setState({ admin_warn: true })
  }
  closeAdmin_Warn () {
    this.setState({ admin_warn: false })
  }

  adminLogin = e => {
    e.preventDefault()
    console.log(this.state)
    axios
      .post('http://94cd9803.ngrok.io/final/authenticate', this.state)
      .then(response => {
        console.log(response.data.token)

        if (response.status == 200) {
          this.props.history.push('/table')
          localStorage.setItem('token', response.data.token)
        }
        if (response.status != 200) {
          console.log('invalid')
          this.openAdmin_Warn()
        }
      })
  }
  myChangeHandler = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render () {
    return (
      <div>
        <Navbar bg='dark' variant='dark' fixed='top'>
          <Navbar.Brand href='#home'>
            <img
              src={require('/home/nineleaps/Desktop/project1/src/Component/Logo-10.png')}
              width='200'
              height='40'
              className='d-inline-block align-top'
              alt='React Bootstrap logo'
            />
          </Navbar.Brand>
          <Nav className='mr-auto' />
        </Navbar>
        <div className='App-header'>
          <Card
            style={{ opacity: '0.85', marginTop: '8rem', marginLeft: '45rem' }}
          >
            <Card.Header
              style={{
                Textallign: 'center',
                background: '#566787',
                textAlign: 'center'
              }}
            >
              <text
                style={{ fontWeight: '800', fontSize: '50px', color: 'white' }}
              >
                Admin Login
              </text>
            </Card.Header>
            <Card.Body>
              <Form onSubmit={this.adminLogin}>
                <Form.Group controlId='formBasicEmail'>
                  <Form.Label style={{ color: 'black' }}>Email</Form.Label>
                  <Form.Control
                    type='email'
                    name='username'
                    placeholder='Enter email'
                    onChange={this.myChangeHandler}
                    required
                  />
                  <Form.Text className='text-muted' />
                </Form.Group>

                <Form.Group controlId='formBasicPassword'>
                  <Form.Label style={{ color: 'black' }}>Password</Form.Label>
                  <Form.Control
                    type='password'
                    name='password'
                    placeholder='Password'
                    onChange={this.myChangeHandler}
                    required
                  />
                </Form.Group>
                {this.renderRedirect()}

                <Button variant='primary' type='submit'>
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
          <Modal
            visible={this.state.admin_warn}
            effect='fadeInUp'
            class='btn btn-dark'
          >
            <Alert show={this.state.show} variant='danger'>
              <Alert.Heading>Wrong Credentials !!</Alert.Heading>

              <hr />
              <div className='d-flex justify-content-end'>
                <Button
                  loading={this.state.loading}
                  onClick={() => this.closeAdmin_Warn()}
                  variant='outline-danger'
                >
                  ok
                </Button>{' '}
                &nbsp;
              </div>
            </Alert>
          </Modal>
        </div>
      </div>
    )
  }
}

export default Login
