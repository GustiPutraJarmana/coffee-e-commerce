import React from 'react'
import {Navbar, Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'

const NavbarComponent = () => {
  return (
    <div>
        <Navbar style={{height : '40px', width : '100%'}} bg="dark" variant="dark">
          <div className="container" style={{marginLeft : '8em'}}>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Link className="nav-link" to="/contact">Contact</Link>
            <Link className="nav-link" to="/about">About</Link>
            <Link className="nav-link" to="/support">Support</Link>
          </Nav>
          <div className="container" style={{marginLeft : '30em'}}>
          <Nav>
            <Link className="nav-link" to="/login">Sign In</Link>
            <Link className="nav-link" to="/register">Register</Link>
          </Nav>
          </div>
        </Navbar.Collapse>
          </div>
      </Navbar>
        <div style={{border : 'solid 2px'}} className="container" bg="dark" variant="dark">
          DARK
        </div>
  </div>
  )

}

export default NavbarComponent