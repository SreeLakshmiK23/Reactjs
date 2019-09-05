import React, { Component } from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import List from '@material-ui/core/List'
import Checkbox from '@material-ui/core/Checkbox'
import './profilecss.css'
import { Card, Image, Col, Row } from 'react-bootstrap'
import {
  FaEnvelope,
  FaPhone,
  FaAddressCard,
  FaBriefcase,
  FaHandPointRight,
  FaHandPointLeft
} from 'react-icons/fa'
import Header from './../../Headernew'
import Button from 'react-bootstrap-button-loader'

class profile extends Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: false,
      data: [],
      idata: [],
      isLoaded: true,
      redirect: false,
      loading: false
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/join' />
    }
  }

  loading () {
    this.setState({
      loading: true
    })
  }

  componentDidMount () {
    axios
      .post('http://94cd9803.ngrok.io/final/data1', {
        phone: this.props.history.location.state.phone
      })
      .then(response => {
        console.log('data aa raha hai ', response)
        this.setState({
          isLoaded: false,
          data: response.data,
          loading: false
        })
      })
  }

  sendResponse (item) {
    this.loading()
    axios
      .post('http://94cd9803.ngrok.io/final/updatecheck', item)
      .then(response => {
        const statusCode = response.status

        this.componentDidMount()
      })
  }
  render () {
    console.log(this.props.history.location.state.id)

    return (
      <div>
        <Header />

        <div className='abc'>
          <section className='aasection'>
            <div className='left-half'>
              <Card
                style={{
                  height: '550px',
                  width: 'auto',
                  margin: '10px',
                  padding: '60px',
                  marginTop: '5rem'
                }}
                class='cardView'
              >
                <Card.Header style={{ backgroundColor: '#cccaca' }}>
                  <center>
                    <Image
                      src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQbV5SgrUFQAfOK_QxSoffelnRrg1dJmIgHSbaEB2pz3t9UHRSb'
                      style={{ height: '150px', width: '150px' }}
                    />
                  </center>
                </Card.Header>
                <Card.Body>
                  <text style={{ fontSize: '25px', fontWeight: '1000' }}>
                    {this.props.history.location.state.name}
                  </text>

                  <br />

                  <FaEnvelope />
                  <text className='textStyle'>
                    {this.props.history.location.state.email}
                  </text>
                  <br />

                  <FaPhone />
                  <text className='textStyle'>
                    {this.props.history.location.state.phone}
                  </text>
                  <br />

                  <FaAddressCard />
                  <text className='textStyle'>
                    {this.props.history.location.state.place}
                  </text>

                  <br />
                  <FaBriefcase />
                  <text className='textStyle'>
                    {this.props.history.location.state.designation}
                  </text>
                  <br />
                  <br />
                  <br />
                  <center>
                    {this.renderRedirect()}
                    <Button primary onClick={this.setRedirect}>
                      {' '}
                      <FaHandPointLeft /> Go Back
                    </Button>
                  </center>
                </Card.Body>
              </Card>
            </div>
            <div className='right-half'>
              <Card>
                <Card.Header style={{ backgroundColor: '#cccaca' }}>
                  <center>
                    <h1>
                      <strong>Document Status</strong>
                    </h1>
                  </center>
                </Card.Header>
              </Card>

              <div className='right-cards'>
                {this.state.data.map(item => {
                  return (
                    <Card>
                      <Card.Header
                        style={{
                          backgroundColor: '#566787',
                          fontWeight: '1000',
                          fontSize: '50',
                          color: 'white',
                          textAlign: 'center'
                        }}
                      >
                        {item.checklist_name}
                      </Card.Header>

                      <Card.Body>
                        <List style={{ color: 'black' }}>
                          {item.data.map((doc, i) => {
                            return (
                              <Row>
                                <FaHandPointRight />
                                <Col>
                                  <text style={{ float: 'left' }}>
                                    {doc.document_name}
                                  </text>
                                </Col>
                                <Col>
                                  {' '}
                                  <Checkbox
                                    document_name
                                    style={{ float: 'right' }}
                                    edge='end'
                                    value={doc.document_status}
                                    onChange={() => {
                                      doc.document_status = !doc.document_status
                                      this.sendResponse(item)
                                    }}
                                    checked={doc.document_status}
                                    loading={this.state.loading}
                                  />
                                </Col>
                                <br />
                              </Row>
                            )
                          })}
                        </List>
                      </Card.Body>
                    </Card>
                  )
                })}
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}
export default profile
