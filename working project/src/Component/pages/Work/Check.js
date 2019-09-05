import React from 'react'
import { Table, Badge, Alert } from 'react-bootstrap'
import { Form } from 'react-bootstrap'
import './check.css'
import Checklistdata from './Checklist.js'
import axios from 'axios'
import Picky from 'react-picky'
import 'react-picky/dist/picky.css'
import Modal from 'react-awesome-modal'
import Button from 'react-bootstrap-button-loader'
import { FaWindowClose } from 'react-icons/fa'

export default class Checkdisplay extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: [],
      isLoaded: false,
      abc: [],
      datalist: [],
      arrayValue: [],
      arrayValuenew: [],
      value: '',
      visibleabc: false,
      latestStatus: false,
      show: true,
      visiblenew2: false,
      visiblenew3: false,
      del: '',
      loading: false
    }
    this.openModalabc = this.openModalabc.bind(this)
    this.selectMultipleOption = this.selectMultipleOption.bind(this)
  }

  async componentDidMount () {
    var res1 = await axios.get('http://94cd9803.ngrok.io/list')
    var res2 = await axios.get('http://94cd9803.ngrok.io/final/nameandphone')
    console.log('###', res1)
    this.setState({
      isLoaded: true,
      items: res1.data,
      datalist: res2.data,
      loading: false
    })
    console.log(this.state)
    console.log('received', this.state.items)
  }

  openModal = name => {
    this.setState({
      name: name,
      visible: true,
      arrayValue: [],
      arrayValuenew: [],
      loading: false
    })
    console.log('name', name)
  }

  openModalmm = name => {
    this.setState({
      name: name,
      visible: true,
      visibleabc: false,
      arrayValue: [],
      loading: false
    })
    console.log('name', name)
  }

  loading () {
    this.setState({
      loading: true
    })
  }

  openModalabc = name => {
    this.setState({ visibleabc: true, arrayValue: [], loading: false })
    this.setState({ abc: name.data })
    console.log('name', name.checklist_name)
    console.log('abc', this.state.abc)
  }

  closeModalabc = () => {
    this.setState({
      visibleabc: false
    })
  }

  deleteitems = namea => {
    this.setState({ name: namea })
    console.log(namea)
    this.loading()

    axios.delete('http://94cd9803.ngrok.io/delete/' + namea).then(response => {
      if (response.status == '200') {
        this.setState({ loading: false })
        this.closeModalnew4()
        this.componentDidMount()
      }
    })
  }

  selectMultipleOption (value) {
    console.count('onChange')

    console.log('Vals', value)

    this.setState({ arrayValue: value })
    console.log('out ', this.state.arrayValue)
  }
  submitHandler = async e => {
    e.preventDefault()
    this.loading()
    this.state.arrayValue.map((i, j) =>
      this.state.arrayValuenew.push(
        i
          .split(',')[0]
          .split(' ')
          .slice(-1)[0]
      )
    )

    const payload = {
      selections: this.state.arrayValuenew.toString(),
      name: this.state.name
    }

    console.log('Payload', payload)
    try {
      await axios.post('http://94cd9803.ngrok.io/final/assignnew', payload)

      console.log('i am here')

      // this.closeModal()

      this.openModalnew2()
    } catch (e) {
      console.log(e)
      alert('Error posting data!')
    }
    this.closeModalabc()
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

  openModalnew4 (del) {
    this.setState({
      visiblenew4: true,
      del: del,
      loading: false
    })
  }
  closeModalnew4 () {
    this.setState({
      visiblenew4: false
    })
  }
  closeModalrefresh () {
    window.location.reload()
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
    this.closeModal()
  }

  closeModal () {
    this.setState({
      visible: false
    })
    this.closeModalnew3()
  }

  badgePrint (status) {
    console.log(status)
    if (status == 'false') {
      return (
        <Badge style={{ width: '100px' }} pill variant='success'>
          <text>Public</text>
        </Badge>
      )
    } else {
      return (
        <Badge
          style={{ width: '100px', height: '30px' }}
          pill
          variant='warning'
        >
          <text>Private</text>
        </Badge>
      )
    }
  }
  statusPrint (status) {
    console.log(status)
    if (status == 'false') {
      return <text fontWeight='700'>Public</text>
    } else {
      return <text fontWeight='700'>Private</text>
    }
  }

  render () {
    var { isLoaded, items, arrayValue, datalist, name } = this.state

    var bigList = this.state.datalist.map(dat => dat.name + ' ' + dat.phone)

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
          <Checklistdata />

          <center>
            <Table striped bordered hover style={{ width: '80%' }}>
              <thead>
                <td
                  colSpan={5}
                  style={{ backgroundColor: '#566787', color: 'white' }}
                >
                  <h1>Manage Checklist</h1>
                </td>
                <tr style={{ color: '#566787', fontWeight: '700' }}>
                  <th>#</th>
                  <th>Checklist Name</th>
                  <th>Created On</th>
                  <th>Status</th>
                  <th>
                    <center>Actions</center>
                  </th>
                </tr>
              </thead>
              <tbody style={{ overflowY: 'auto' }}>
                {this.state.items.map((item, i) => (
                  <tr>
                    <td>{i + 1}</td>
                    <td>{item.checklist_name}</td>
                    <td>{item.date}</td>
                    <td style={{ align: 'center' }}>
                      {this.statusPrint(item.status)}
                    </td>
                    <td>
                      <center>
                        <Button
                          style={{ width: '60px', backgroundColor: '#37bc9b' }}
                          size='sm'
                          onClick={() => this.openModal(item.checklist_name)}
                        >
                          Assign
                        </Button>{' '}
                        &nbsp; &nbsp;
                        <Button
                          style={{ width: '60px' }}
                          size='sm'
                          variant='danger'
                          onClick={() =>
                            this.openModalnew4(item.checklist_name)
                          }
                        >
                          Delete
                        </Button>
                        &nbsp; &nbsp;
                        <Button
                          style={{ width: '60px' }}
                          size='sm'
                          variant='primary'
                          onClick={() => {
                            this.openModalabc(items[i])
                            this.setState({ latestStatus: item.status })
                          }}
                        >
                          {' '}
                          View{' '}
                        </Button>{' '}
                        &nbsp; &nbsp;
                      </center>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </center>

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
                  onChange={value => this.selectMultipleOption(value)}
                  open={false}
                  valueKey='id'
                  labelKey='name'
                  multiple
                  includeSelectAll
                  includeFilter
                  dropdownHeight={130}
                  required
                />
                {console.log('array value : ', this.state.arrayValue)}
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
            visible={this.state.visibleabc}
            abc={this.state.abc}
            effect='fadeInUp'
          >
            <FaWindowClose
              size={30}
              onClick={() => this.closeModalabc()}
              style={{ float: 'right' }}
            />

            <h2 style={{ padding: '5px' }}>
              <center>
                <strong>View checklist </strong>
                {this.badgePrint(this.state.latestStatus)}
              </center>
            </h2>

            <form className='pad'>
              <div>
                <Table striped bordered hover style={{ margin: '4rem' }}>
                  <thead>
                    <tr>
                      <th>Sl NO.</th>
                      <th>Document Name</th>
                      <th>Document Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.abc.map((aa, i) => (
                      <tr>
                        {console.log('aa', aa)}
                        <td>{i + 1}</td>
                        <td>{aa.document_name}</td>

                        <td>{aa.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </Table>

                <Button
                  size='sm'
                  onClick={() =>
                    this.openModalmm(this.state.abc.checklist_name)
                  }
                >
                  Assign
                </Button>
              </div>
            </form>
          </Modal>

          <Modal
            visible={this.state.visiblenew2}
            width='600'
            effect='fadeInUp'
            class='btn btn-dark'
          >
            <Alert show={this.state.show} variant='success'>
              <Alert.Heading>
                Checklist has been assigned successfully
              </Alert.Heading>

              <hr />
              <div className='d-flex justify-content-end'>
                <Button
                  onClick={() => this.closeModalnew2()}
                  variant='outline-success'
                >
                  Close
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
                  onClick={() => this.closeModal()}
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

          <Modal
            visible={this.state.visiblenew4}
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
                  onClick={() => this.deleteitems(this.state.del)}
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
      )
    }
  }
}
