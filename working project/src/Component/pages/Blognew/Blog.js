import React, { Component } from 'react'
import { Card, CardColumns, Button } from 'react-bootstrap'
import './stylesnew.css'
import './Toolbar1.css'
import { Redirect } from 'react-router-dom'
import Header from './../../Headernew'
import './../../../App.css'

class Blogdisplay extends Component {
  constructor (props) {
    super(props)

    this.state = {
      items: [],
      isolated: false,
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
      return <Redirect to='/writeblog' />
    }
  }
  exploreClick (item) {
    this.props.history.push({
      pathname: '/exploreblog',
      state: item
    })
  }
  componentDidMount () {
    fetch('http://94cd9803.ngrok.io/blog/display')
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        })
        console.log('props are', this.props)
      })
  }

  render () {
    var { isLoaded, items } = this.state

    if (!isLoaded) {
      return (
        <div style={{ marginTop: '12rem' }}>
          <center>
            <img
              src='https://upload.wikimedia.org/wikipedia/commons/b/b1/Loading_icon.gif'
              alt='logo'
            />
          </center>
        </div>
      )
    } else {
      return (
        <div>
          <Header />
          {this.renderRedirect()}
          <div style={{ marginTop: '4rem', padding: '1rem' }}>
            <center>
              <input
                type='submit'
                class='btn btn-primary'
                value='CREATE BLOG'
                onClick={this.setRedirect}
              />
            </center>
          </div>
          <div className='cardstyle'>
            <CardColumns>
              <div>
                {items.map(item => (
                  <Card className='stamps'>
                    <div>
                      <Card.Body>
                        <center>
                          <Card.Title>
                            <strong>{item.title}</strong>
                          </Card.Title>

                          <p>{item.subject}</p>
                        </center>

                        <img
                          src={item.url}
                          width='100%'
                          height='200'
                          alt='logo'
                        />

                        <Card.Footer>
                          <Button
                            size='sm'
                            variant='primary'
                            onClick={() => this.exploreClick(item)}
                          >
                            Explore
                          </Button>
                        </Card.Footer>
                      </Card.Body>
                    </div>
                  </Card>
                ))}
              </div>
            </CardColumns>
          </div>
        </div>
      )
    }
  }
}
export default Blogdisplay
