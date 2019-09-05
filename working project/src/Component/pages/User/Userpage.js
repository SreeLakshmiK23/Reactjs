import React, { Component } from 'react'
import { Table, Form, Col, InputGroup, Alert } from 'react-bootstrap'
import axios from 'axios'
import Modal from 'react-awesome-modal'

import Picky from 'react-picky'
import 'react-picky/dist/picky.css'

import './index.css'

import { withRouter } from 'react-router-dom'

import Header from './../../Headernew'
import Button from 'react-bootstrap-button-loader'
import './../../../App.css'
import { FaWindowClose } from 'react-icons/fa'

class Userdisplay extends Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      isLoaded: false,
      show: true,

      i: 1,

      arrayValue: [],
      datalist: [],
      redirect: false,
      name: '',
      phone: '',
      email: '',
      place: '',
      designation: '',
      values: '',
      loading: false
    }

    this.selectMultipleOption = this.selectMultipleOption.bind(this)
  }

  async componentDidMount () {
    var res1 = await axios.get('http://94cd9803.ngrok.io/final/listuser')
    var res2 = await axios.get('http://94cd9803.ngrok.io/distinct')
    console.log(res1, res2)
    this.setState({
      isLoaded: true,
      data: res1.data,
      datalist: res2.data
    })
    console.log(this.state)
    this.userClick = this.userClick.bind(this)
  }

  changetry = (event, object, id) => {
    event.preventDefault()
    console.log('here is the object', object)

    console.log('this.props', this.props)
    // props is not initialized

    this.props.history.push({
      pathname: '/viewprofile/',
      state: { detail: object.id }
      // state : {id: 1}
    })
  }

  openModal = phone => {
    this.setState({
      phone: phone,
      visible: true,
      loading: false,
      arrayValue: []
    })
  }

  closeModal = () => {
    this.setState({
      visible: false
    })
    this.closeModalnew3()
  }

  submitHandler = async e => {
    e.preventDefault()
    this.loading()
    const payload = {
      selections: this.state.arrayValue.toString(),
      phone: this.state.phone
    }
    console.log('Payload', payload)
    try {
      await axios.post('http://94cd9803.ngrok.io/final/assign', payload)
      this.closeModal()
      this.openModalnew4()
    } catch (e) {
      console.log(e)
      alert('Error posting data!')
    }
  }

  userClick (item) {
    console.log('=====', this.props)
    this.props.history.push({
      pathname: '/viewprofile',
      state: item
    })
  }

  selectMultipleOption (value) {
    console.count('onChange')
    console.log('Val', value)
    this.setState({ arrayValue: value })
  }

  openModalnew () {
    this.setState({
      visiblenew: true,
      name: '',
      phone: '',
      email: '',
      place: '',
      designation: '',
      values: '',
      loading: false
    })
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
    this.componentDidMount()
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

    openModalnew4 () {
    this.setState({
      visiblenew4: true
    })
  }
  closeModalnew4 () {
    this.setState({
      visiblenew4: false
    })
  }
  closeModalnew () {
    this.setState({
      visiblenew: false
    })
    this.closeModalnew3()
  }

  changeHandlernew = e => {
    if (e.target.name == 'phone') {
      this.setState({ [e.target.name]: '+91' + e.target.value })
    } else {
      this.setState({ [e.target.name]: e.target.value })
    }
  }

  submitHandlernew = e => {
    e.preventDefault()
    console.log(this.state)
    this.loading()
    axios
      .post('http://94cd9803.ngrok.io/final/save', this.state)
      .then(response => {
        this.setState({
          values: {
            name: '',
            phone: '',
            email: '',
            place: '',
            designation: '',
            values: '',
            loading: false
          }
        })
        console.log(response)

        if (response.status == '200') {
          this.closeModalnew()
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
    var { i, isLoaded, data, arrayValue } = this.state

    var { datalist } = this.state

    {
      console.log(datalist)
    }
    const bigList = this.state.datalist

    if (!isLoaded) {
      return (
        <div style={{ marginTop: '12rem' }}>
          <center>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'
              alt='image'
            />
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
                onClick={() => this.openModalnew()}
              >
                Add user{' '}
              </Button>
            </center>
          </div>
          <div>
            <Modal
              visible={this.state.visiblenew}
              effect='fadeInUp'
              class='btn btn-dark'
            >
              <FaWindowClose
                size={30}
                onClick={() => this.closeModalnew()}
                style={{ float: 'right' }}
              />

              <div>
                <Form
                  onSubmit={this.submitHandlernew}
                  style={{ padding: '2rem' }}
                >
                  <Form.Group controlId='formGridAddress1'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type='text'
                      name='name'
                      value={this.state.values.name}
                      onChange={this.changeHandlernew}
                      placeholder='Name'
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId='formGridAddress1'>
                    <Form.Label>Phone</Form.Label>
                    <InputGroup>
                      <InputGroup.Prepend>
                        <InputGroup.Text id='inputGroupPrepend'>
                          +91
                        </InputGroup.Text>

                        <Form.Control
                          name='phone'
                          value={this.state.values.phone}
                          onChange={this.changeHandlernew}
                          placeholder='Phone'
                          maxLength='10'
                          required
                        />
                      </InputGroup.Prepend>
                    </InputGroup>
                  </Form.Group>
                  <Form.Group controlId='formGridAddress1'>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type='email'
                      name='email'
                      value={this.state.values.email}
                      onChange={this.changeHandlernew}
                      placeholder='Email'
                      required
                    />
                  </Form.Group>
                  <Form.Group controlId='formGridAddress2'>
                    <Form.Label>Place</Form.Label>
                    <Form.Control
                      type='text'
                      name='place'
                      value={this.state.values.place}
                      onChange={this.changeHandlernew}
                      placeholder='Place'
                      required
                    />
                  </Form.Group>
                  <Form.Row>
                    <Form.Group as={Col} controlId='formGridCity'>
                      <Form.Label>Designation</Form.Label>
                      <Form.Control
                        type='text'
                        name='designation'
                        value={this.state.values.designation}
                        onChange={this.changeHandlernew}
                        placeholder='Designation'
                        required
                      />
                    </Form.Group>
                  </Form.Row>
                  <Button
                    loading={this.state.loading}
                    variant='primary'
                    type='submit'
                  >
                    Submit
                  </Button>{' '}
                  &nbsp; &nbsp;
                  <Button
                    variant='primary'
                    onClick={() => this.openModalnew3()}
                  >
                    Cancel
                  </Button>
                </Form>
              </div>
            </Modal>
          </div>
          <div key={data.id}>
            <Table
              striped
              bordered
              hover
              style={{
                width: '80%',
                marginLeft: '8rem',
                overflowY: 'auto',
                textAlign: 'center'
              }}
            >
              <thead>
                <tr>
                  <th>Sr No.</th>
                  <th>Name</th>

                  <th>Mobile</th>
                  <th>Email</th>
                  <th>Place</th>
                  <th>Designation</th>
                  <th />
                </tr>
              </thead>

              {data.map(obj => (
                <tbody>
                  <tr>
                    <td>{` ${i++}`}</td>
                    <td>{obj.name}</td>

                    <td>{obj.phone}</td>
                    <td>{obj.email}</td>
                    <td>{obj.place}</td>
                    <td>{obj.designation}</td>
                    <div className='actualone'>
                      <Button
                        size='sm'
                        onClick={() => this.openModal(obj.phone)}
                        variant='primary'
                      >
                        Assign
                      </Button>{' '}
                      &nbsp; &nbsp;
                      <Button
                        size='sm'
                        variant='secondary'
                        onClick={() => this.userClick(obj)}
                      >
                        Profile
                      </Button>
                    </div>
                  </tr>
                </tbody>
              ))}
            </Table>
          </div>

          <Modal visible={this.state.visible} effect='fadeInUp'>
            <FaWindowClose
              size={30}
              onClick={() => this.closeModal()}
              style={{ float: 'right' }}
            />

            <h2>
              <center>
                <strong>Assign checklist</strong>
              </center>
            </h2>
            <Form className='spacing'>
              <div>
                <Picky
                  value={this.state.arrayValue}
                  options={bigList}
                  onChange={this.selectMultipleOption}
                  onChange={e => this.selectMultipleOption(e)}
                  open={false}
                  valueKey='id'
                  labelKey='name'
                  multiple
                  includeSelectAll
                  includeFilter
                  dropdownHeight={130}
                />
              </div>

              <div className='place'>
                <Button
                  loading={this.state.loading}
                  class='btn btn-primary'
                  type='submit'
                  onClick={this.submitHandler}
                >
                  Assign
                </Button>{' '}
                &nbsp;
                <Button
                  onClick={() => this.openModalnew3()}
                  class='btn btn-info'
                >
                  Cancel
                </Button>
              </div>
            </Form>
          </Modal>

          <Modal
            visible={this.state.visiblenew2}
            width='600'
            effect='fadeInUp'
            class='btn btn-dark'
          >
            <Alert show={this.state.show} variant='success'>
              <Alert.Heading>Successfully Added a user</Alert.Heading>

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

                    <Modal
            visible={this.state.visiblenew4}
            width='600'
            effect='fadeInUp'
            class='btn btn-dark'
          >
            <Alert show={this.state.show} variant='success'>
              <Alert.Heading>Successfully assigned to a user</Alert.Heading>

              <hr />
              <div className='d-flex justify-content-end'>
                <Button
                  onClick={() => {
                    this.setState({ visiblenew4: false })
                    // this.componentDidMount()
                  }}
                  variant='outline-success'
                >
                  OK
                </Button>
              </div>
            </Alert>
          </Modal>

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
                  onClick={() => {
                    this.closeModal()
                    this.closeModalnew()
                  }}
                  variant='outline-danger'
                >
                  Yes
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
      )
    }
  }
}

export default withRouter(Userdisplay)
