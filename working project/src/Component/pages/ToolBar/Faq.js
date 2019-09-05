import React, { Component } from 'react'
import axios from 'axios'
import './Toolbar.css'
import { Accordion, Card, Alert } from 'react-bootstrap'
import { FaTrash, FaWindowClose } from 'react-icons/fa'
import Modal from 'react-awesome-modal'
import { Redirect } from 'react-router-dom'
import { Form, FormGroup, Row, Col } from 'react-bootstrap'
import { Container } from '@material-ui/core'
import Header from './../../Headernew'
import Button from 'react-bootstrap-button-loader'
import './../../../App.css'

class Faqdisplay extends Component {
  constructor (props) {
    super(props)

    this.state = {
      items: [],
      isLoaded: false,
      show: true,
      visiblenew4: false,
      delete_id: '',
      question: '',
      category: '',
      answer: '',
      visible: false,
      suggest: [],
      loading: false
    }
  }

  componentDidMount () {
    fetch('http://94cd9803.ngrok.io/faq/displayall')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
      })
  }

  openModal = () => {
    this.setState({
      visible: true,
      question: '',
      category: '',
      answer: '',
      loading: false
    })
  }

  closeModal = () => {
    this.setState({
      visible: false
    })
    this.closeModalnew3()
  }

  openModalnew2 () {
    this.setState({
      visiblenew2: true
    })
  }

  closeModalnew2 () {
    this.setState({
      visiblenew2: false
    })
    // window.location.reload()
    this.componentDidMount();
  }

  openModalnew3 () {
    this.setState({
      visiblenew3: true
    })
  }
  closeModalnew3 () {
    this.setState({
      visiblenew3: false
    })
  }

  openModalnew4 (id) {
    console.log('this is id', id)
    this.setState({
      visiblenew4: true,
      delete_id: id,
      loading: false
    })
  }

  closeModalnew4 () {
    this.setState({
      visiblenew4: false
    })
  }

  deleteitems = id => {
    console.log(id)
    this.loading()
    axios
      .delete('http://94cd9803.ngrok.io/faq/delete/' + id)

      .then(response => {
        console.log(response)

        if (response.status == '200') {
          this.setState({ loading: false })
          this.closeModalnew4()
          this.componentDidMount()
        }
      })
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/faqdis' />
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  loadoption () {
    fetch('http://94cd9803.ngrok.io/faq/distinct')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          suggest: json
        })
      })
  }

  submitHandler = e => {
    console.log(this.state)
    this.loading()
    axios.post('http://94cd9803.ngrok.io/faq/save',this.state)
      .then(response => {
        console.log(response)
        if (response.status == 200) {
        this.closeModal()
          this.openModalnew2()
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  loading () {
    this.setState({
      loading: true
    })
  }

  render () {
    var { isLoaded, items, loading } = this.state
    const { question, category, answer } = this.state
    if (!isLoaded) {
      return (
        <div style={{ marginTop: '12rem' }}>
          <center>
            <img src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif' />
          </center>
        </div>
      )
    } else {
      return (
        <div>
          <Header />

          <div style={{ marginTop: '4rem', padding: '1rem' }}>
            <center>
              <Button
                type='button'
                class='btn btn-primary'
                onClick={() => this.openModal()}
              >
                ADD FAQ
              </Button>
            </center>
          </div>

          <div>
            <Modal visible={this.state.visible} effect='fadeInUp'>
              <FaWindowClose
                size={30}
                onClick={() => this.closeModal()}
                style={{ float: 'right' }}
              />

              <Container style={{ padding: '50px' }}>
                <Form onSubmit={this.submitHandler}>
                  <Form.Group as={Row} controlId='formPlaintextPassword'>
                    <Form.Label column sm='auto'>
                      Question :
                    </Form.Label>
                    <Col>
                      <Form.Control
                        value={this.state.question}
                        onChange={this.changeHandler}
                        type='text'
                        name='question'
                        placeholder='Question'
                        required
                      />
                    </Col>
                  </Form.Group>

                  <Form.Group as={Row} controlId='formPlaintextPassword'>
                    <Form.Label column sm='auto'>
                      Category :
                    </Form.Label>
                    <Col>
                      <Form.Control
                        type='text'
                        name='category'
                        value={this.state.category}
                        placeholder="Category"
                        onChange={this.changeHandler}
                        list='cars'
                        required
                      />

                      <datalist id='cars'>
                        {this.state.suggest.map(x => {
                          return <option>{x}</option>
                        })}
                      </datalist>
                    </Col>
                  </Form.Group>

                  <Form.Group controlId='exampleForm.ControlSelect2'>
                    <Form.Label>Answer :</Form.Label>
                    <Form.Control
                      value={this.state.answer}
                      onChange={this.changeHandler}
                      as='textarea'
                      name='answer'
                      rows='3'
                      placeholder="Answer"
                      required
                    />
                  </Form.Group>
                  <div>
                    <center>
                      <Button
                        loading={this.state.loading}
                        type='submit'
                        variant='primary'
                        onClick={this.submitHandler}
                      >
                        Submit
                      </Button>{' '}
                      &nbsp;
                      <Button
                        variant='primary'
                        variant='dark'
                        onClick={() => this.openModalnew3()}
                      >
                        Cancel
                      </Button>
                    </center>
                  </div>
                </Form>
              </Container>
            </Modal>
          </div>
          <div>
            <Modal
              visible={this.state.visiblenew2}
              width='600'
              effect='fadeInUp'
              class='btn btn-dark'
            >
              <Alert show={this.state.show} variant='success'>
                <Alert.Heading>
                  FAQ has been added successfully. 
                </Alert.Heading>

                <hr />
                <div className='d-flex justify-content-end'>
                  <Button
                    onClick={() => {
                      this.setState({ visiblenew2: false })
                      this.componentDidMount()
                    }}
                    variant='outline-success'
                  >
                    OK
                  </Button>
                </div>
              </Alert>
            </Modal>
          </div>
          <div>
            <Modal
              visible={this.state.visiblenew3}
              width='600'
              effect='fadeInUp'
              class='btn btn-dark'
            >
              <Alert show={this.state.show} variant='danger'>
                <Alert.Heading>Are you sure you want to cancel?</Alert.Heading>

                <hr />
                <div className='d-flex justify-content-end'>
                  <Button
                    onClick={() => this.closeModal()}
                    variant='outline-danger'
                  >
                    YES
                  </Button>{' '}
                  &nbsp;
                  <Button
                    onClick={() => this.closeModalnew3()}
                    variant='outline-danger'
                  >
                    NO
                  </Button>
                </div>
              </Alert>
            </Modal>
          </div>

          <div style={{ width: '80%', marginTop: '1rem', marginLeft: '6rem' }}>
            {items.map((item, i) => (
              <Accordion
                style={{ height: 'auto', flexFlow: 'row', marginTop: '10px' }}
                defaultActiveKey='1'
              >
                <Card>
                  <Accordion.Toggle
                    style={{ backgroundColor: '#566787' }}
                    as={Card.Header}
                    eventKey='0'
                  >
                    <div>
                      <text style={{ color: 'white' }}>
                        Q{i+1}] { item.question}
                      </text>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Button
                        variant='danger'
                        style={{ float: 'right', color: 'white', size: 'sm' }}
                        onClick={() => this.openModalnew4(item.id)}
                      >
                        <FaTrash />
                      </Button>
                    </div>
                  </Accordion.Toggle>
                  <Accordion.Collapse
                    eventKey='0'
                    style={{ backgroundColor: '#ffe499' }}
                  >
                    <Card.Body>{'A. ' + item.answer}</Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            ))}
          </div>
          <div>
            <Modal
              visible={this.state.visiblenew4}
              width='600'
              effect='fadeInUp'
              class='btn btn-dark'
            >
              <Alert show={this.state.show} variant='danger'>
                <Alert.Heading>
                  Are you sure you want to Delete this?
                </Alert.Heading>

                <hr />
                <div className='d-flex justify-content-end'>
                  <Button
                    loading={this.state.loading}
                    onClick={() => this.deleteitems(this.state.delete_id)}
                    variant='outline-danger'
                  >
                    YES
                  </Button>{' '}
                  &nbsp;
                  <Button
                    onClick={() => this.closeModalnew4()}
                    variant='outline-danger'
                  >
                    NO
                  </Button>
                </div>
              </Alert>
            </Modal>
          </div>
        </div>
      )
    }
  }
}
export default Faqdisplay
