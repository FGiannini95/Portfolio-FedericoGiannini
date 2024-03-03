import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navbarPortoflio.scss'

export const NavbarPortfolio = () => {
  return (
    <Navbar bg="body-tertiary" expand="sm" className='navPpl d-flex justify-content-center' >
      {/* <Navbar.Brand href="/">Home</Navbar.Brand>*/}
      <Navbar.Toggle aria-controls="navbarNav" className="mx-auto"/> 
      <Navbar.Collapse id="navbarNav" className="justify-content-center">
        <Nav className="mr-auto d-flex align-items-center">
          <Nav.Link as={Link} to="/" className="active">Home</Nav.Link>
          <Nav.Link as={Link} to="/project">Projects</Nav.Link>
          <Nav.Link as={Link} to="/practice">Practice</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
