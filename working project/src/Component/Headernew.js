import React, { Component } from 'react'
import { Navbar, Nav } from 'react-bootstrap'

class Header extends Component {
  checkLink = link => {
    return window.location.href.includes(link)
  }
  render () {
    console.log()
    return (
      <Navbar style={{ backgroundColor: '#1d1c1c' }} variant='dark' fixed='top'>
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

        <Nav>
          <Nav.Link
            href='./table'
            className={this.checkLink('table') ? 'active' : 'inactive'}
          >
            Checklist
          </Nav.Link>
          <Nav.Link
            eventKey={2}
            href='./faqdis'
            className={this.checkLink('faqdis') ? 'active' : 'inactive'}
          >
            FAQ
          </Nav.Link>
          <Nav.Link
            eventKey={2}
            href='./displayblog'
            className={this.checkLink('displayblog') ? 'active' : 'inactive'}
          >
            Blog
          </Nav.Link>
          <Nav.Link
            eventKey={2}
            href='./join'
            className={this.checkLink('join') ? 'active' : 'inactive'}
          >
            User
          </Nav.Link>
          <Nav.Link eventKey={2} href='./'>
            Logout
          </Nav.Link>
        </Nav>
      </Navbar>
    )
  }
}
export default Header
