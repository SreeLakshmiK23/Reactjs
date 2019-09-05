import React, { Component } from 'react'
import Modal from 'react-awesome-modal'
import { Form, Row, Alert } from 'react-bootstrap'
import axios from 'axios'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import Header from './../../Headernew'
import orderBy from 'lodash/orderBy'
import Formnew from './Form'
import Table from './Table'
import TextField from 'material-ui/TextField'
import Button from 'react-bootstrap-button-loader'
import { componentDidMount } from './Check'
import { FaWindowClose } from 'react-icons/fa'

const invertDirection = {
  asc: 'desc',
  desc: 'asc'
}

class Checklistdata extends Component {
  constructor (props) {
    super(props)

    this.state = {
      length: 0,
      checklist_name: '',
      data: [{ order: 1, document_name: '', description: '' }],

      redirect: false,
      editIdx: -1,
      columnToSort: '',
      sortDirection: 'desc',

      status: false,
      document_name: '',
      document_nameError: '',
      document_status: false,
      document_statusError: '',
      show: true,
      loading: false
    }
  }

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  validate = () => {
    let isError = false
    const errors = {
      document_idError: '',
      document_statusError: ''
    }

    this.setState({
      ...this.state,
      ...errors
    })

    return isError
  }

  onSubmit = e => {
    e.preventDefault()
    const err = this.validate()
    if (!err) {
      this.props.onSubmit(this.state)

      this.setState({
        document_name: '',
        document_nameError: '',
        document_status: false,
        document_statusError: ''
      })
    }
  }

  handleChange = idx => e => {
    const { name, value } = e.target

    const rows = [...this.state.rows]
    rows[idx] = {
      [name]: value
    }

    this.setState({ rows })
  }

  handleAddRow = () => {
    const item = {
      order: '',
      name: '',
      description: ''
    }

    this.setState({
      rows: [...this.state.rows, item]
    })
  }

  handleRemoveRow = () => {
    this.setState({
      rows: this.state.rows.slice(0, -1)
    })
  }
  handleRemoveSpecificRow = idx => () => {
    const rows = [...this.state.rows]
    rows.splice(idx, 1)

    this.setState({ rows })
  }

  openModalcheck () {
    this.setState({
      visiblecheck: true,
      checklist_name: '',
      data: [{ order: 1, document_name: '', description: '' }],
      editIdx: -1,
      columnToSort: '',
      sortDirection: 'desc',

      status: false,
      document_name: '',
      document_status: false
    })
  }

  closeModalcheck () {
    this.setState({
      visiblecheck: false
    })
    this.closeModalnew9()
  }

  openModalnew8 () {
    this.setState({
      visiblenew8: true
    })
    return false
  }
  closeModalnew8 () {
    this.setState({
      visiblenew8: false
    })
    window.location.reload()
  }

  openModalnew9 = () => {
    this.setState({
      visiblenew9: true
    })
  }
  closeModalnew9 () {
    this.setState({
      visiblenew9: false
    })
  }
  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  setRedirect = () => {
    window.location.reload()
  }

  submitHandler = e => {
    e.preventDefault()
    console.log('check this one', this.state)
    this.loading()
    axios
      .post('http://94cd9803.ngrok.io/json', this.state)

      .then(response => {
        console.log(response)
        if (response.status == '200') {
          this.closeModalcheck()
          this.openModalnew8()
        }
      })
      .catch(error => {
        console.log(error)
      })
  }

  handleRemove = i => {
    const { length } = this.state
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }))
    if (length > 0) this.setState({ length: this.state.length - 1 })
  }

  startEditing = i => {
    this.setState({ editIdx: i })
  }

  stopEditing = () => {
    this.setState({ editIdx: -1 })
  }

  handleSave = (i, x) => {
    this.setState(state => ({
      data: state.data.map((row, j) => (j === i ? x : row))
    }))
    this.stopEditing()
  }

  handleSort = columnName => {
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? invertDirection[state.sortDirection]
          : 'asc'
    }))
  }

  loading () {
    this.setState({
      loading: true
    })
  }

  render () {
    const { checklist_name } = this.state

    return (
      <div>
        <Header />

        <div style={{ marginTop: '4rem', padding: '1rem' }}>
          <center>
            <Button
              type='button'
              class='btn btn-info'
              onClick={() => this.openModalcheck()}
            >
              Create Checklist
            </Button>
          </center>
        </div>

        <div>
          <MuiThemeProvider>
            <section>
              <Modal visible={this.state.visiblecheck} effect='fadeInUp'>
                <FaWindowClose
                  size={30}
                  onClick={() => this.closeModalcheck()}
                  style={{ float: 'right' }}
                />

                <div className='overflowone'>
                  <h1>
                    <center>
                      <strong>Create Checklist</strong>
                    </center>
                  </h1>
                  <div className='App'>
                    <Form onSubmit={this.submitHandler}>
                      <TextField
                        name='checklist_name'
                        floatingLabelText='Checklist Name'
                        value={this.state.checklist_name}
                        onChange={e => this.change(e)}
                        floatingLabelFixed
                        required
                        style={{ float: 'left' }}
                      />
                      <br />
                      <br />
                      <br />
                      <br />
                      <Form.Group as={Row}>
                        <Form.Label as='legend' row sm={10}>
                          &nbsp;&nbsp; <strong>Status:</strong>
                        </Form.Label>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <Row sm={30}>
                          <Form.Check
                            type='radio'
                            label='Public'
                            name='formHorizontalRadios'
                            id='formHorizontalRadios1'
                            onChange={() => this.setState({ status: false })}
                          />{' '}
                          &nbsp;&nbsp;
                          <Form.Check
                            type='radio'
                            label='Private'
                            name='formHorizontalRadios'
                            id='formHorizontalRadios2'
                            onChange={() => this.setState({ status: true })}
                          />
                        </Row>
                      </Form.Group>
                      <div className='Appnew'>
                        <Table
                          handleSort={this.handleSort}
                          handleRemove={this.handleRemove}
                          startEditing={this.startEditing}
                          editIdx={this.state.editIdx}
                          stopEditing={this.stopEditing}
                          handleSave={this.handleSave}
                          columnToSort={this.state.columnToSort}
                          sortDirection={this.state.sortDirection}
                          data={orderBy(
                            this.state.data,
                            this.state.columnToSort,
                            this.state.sortDirection
                          )}
                          length={this.state.length}
                          header={[
                            {
                              name: 'Order',
                              prop: 'order'
                            },
                            {
                              name: 'Document Name',
                              prop: 'document_name'
                            },

                            {
                              name: 'Decsription',
                              prop: 'description'
                            }
                          ]}
                        />
                      </div>
                      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      <Formnew
                        onSubmit={submission =>
                          this.setState({
                            data: [...this.state.data, submission],
                            length: this.state.length + 1
                          })
                        }
                      />
                      <div className='actualthree'>
                        <Button loading={this.state.loading} type='submit'>
                          Save
                        </Button>
                        &nbsp; &nbsp;
                        <Button
                          onClick={() => this.openModalnew9()}
                          class='btn btn-info'
                        >
                          Cancel
                        </Button>
                        <br />
                      </div>
                    </Form>
                  </div>
                </div>
              </Modal>
            </section>
          </MuiThemeProvider>

          <Modal
            visible={this.state.visiblenew8}
            width='600'
            effect='fadeInUp'
            class='btn btn-dark'
          >
            <Alert show={this.state.show} variant='success'>
              <Alert.Heading>
                Checklist has been created successfully!
              </Alert.Heading>

              <hr />
              <div className='d-flex justify-content-end'>
                <Button
                  onClick={() => this.closeModalnew8()}
                  variant='outline-success'
                >
                  OK
                </Button>
              </div>
            </Alert>
          </Modal>

          <Modal
            visible={this.state.visiblenew9}
            width='600'
            effect='fadeInUp'
            class='btn btn-dark'
          >
            <Alert show={this.state.show} variant='danger'>
              <Alert.Heading>Are you sure you want to cancel?</Alert.Heading>

              <hr />
              <div className='d-flex justify-content-end'>
                <Button
                  onClick={() => this.closeModalcheck()}
                  variant='outline-danger'
                >
                  Yes
                </Button>{' '}
                &nbsp;
                <Button
                  onClick={() => this.closeModalnew9()}
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
export default Checklistdata
