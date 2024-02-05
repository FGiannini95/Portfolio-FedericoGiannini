import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navbarPortoflio.scss'

export const NavbarPortfolio = () => {
  return (
    <Navbar bg="body-tertiary" expand="lg" className='navvPpl d-flex flex-column justify-content-center text-center align-items-center text-center mx-auto' >
      <Navbar.Brand href="/">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          {/* <Nav.Link as={Link} to="/" className="active">Home</Nav.Link> */}
          <Nav.Link as={Link} to="/project">Projects</Nav.Link>
          <Nav.Link as={Link} to="/practice">Practice</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
