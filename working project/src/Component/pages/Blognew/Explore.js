import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import './stylesnew.css'
import { Button } from 'react-bootstrap'
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2
} from 'react-html-parser'
import Header from './../../Headernew'
import { FaHandPointLeft } from 'react-icons/fa'

class explore extends Component {
  constructor (props) {
    super(props)

    this.state = {
      items: [],
      abc: '',

      redirect: false
    }
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/displayblog' />
    }
  }
  render () {
    console.log(this.props.history.location.state.id)
    const { items } = this.state
    return (
      <div>
        <Header />

        <div className='background_img'>
          <center>
            <Button style={{ margin: '10px' }} onClick={this.setRedirect}>
              <FaHandPointLeft style={{ color: 'white' }} size={30} />
              &nbsp;
              <text style={{ color: 'white' }}>Go Back</text>
            </Button>
            <div
              style={{
                width: '800px',
                backgroundColor: 'white',
                padding: '24px',
                flexWrap: 'column'
              }}
            >
              <center>
                <h1>
                  <strong>{this.props.history.location.state.title}</strong>
                </h1>
              </center>
              <br />
              <center>{this.props.history.location.state.subject}</center>
              <br />
              <div style={{ overflow: 'auto' }}>
                {ReactHtmlParser(
                  this.props.history.location.state.textAreaContent
                )}
              </div>
            </div>
          </center>
        </div>
        {this.renderRedirect()}
      </div>
    )
  }
}
export default explore
