import React from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navbarPortoflio.scss'

export const NavbarPortfolio = () => {
  return (
    <Navbar bg="body-tertiary" expand="lg" className='navvPpl d-flex flex-column'>
      <Navbar.Brand href="/">Logo</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarNav" />
      <Navbar.Collapse id="navbarNav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/" className="active">Home</Nav.Link>
          <Nav.Link as={Link} to="/project">Projects</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
