import React, { useState } from 'react'
import { Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './navbarPortoflio.scss'

export const NavbarPortfolio = () => {

  const [expanded, setExpanded] = useState(false);

  const handleSelect = () => {
    setExpanded(false);
  }

  return (
    <Navbar bg="body-tertiary" expand="sm" className='navPpl d-flex justify-content-center' expanded={expanded} >
      {/* <Navbar.Brand href="/">Home</Navbar.Brand>*/}
      <Navbar.Toggle aria-controls="navbarNav" className="mx-auto m-3" onClick={()=> setExpanded(!expanded)}/> 
      <Navbar.Collapse id="navbarNav" className="justify-content-center">
        <Nav className="mr-auto d-flex align-items-center" onSelect={handleSelect}>
          <Nav.Link as={Link} to="/" className="active" onClick={()=> setExpanded(false)}>Home</Nav.Link>
          <Nav.Link as={Link} to="/project" onClick={()=> setExpanded(false)}>Projects</Nav.Link>
          <Nav.Link as={Link} to="/practice" onClick={()=> setExpanded(false)}>Practice</Nav.Link>
          <Nav.Link as={Link} to="/about" onClick={()=> setExpanded(false)}>About</Nav.Link>
          <Nav.Link as={Link} to="/contact" onClick={()=> setExpanded(false)}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
