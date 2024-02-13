import React from "react";
import { Col, Container, Nav, Row } from "react-bootstrap";
import "./contact.scss";
import { Link } from "react-router-dom";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Contact = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center">
      <Row className="sectionContact pb-5">
        <Col sm={12} md={10} xxl={8} >
          <div className="sectionContact__connect pt-5">
            <h3>LET'S</h3>
            <h3>CONNECT!</h3>
          </div>
        </Col>
        <Col sm={12} md={2} xxl={4} >
          <div className="sectionContact__icons pt-5">
            <Nav.Link href="mailto:fgiannini95@gmail.com" className="link">
              <MdEmail />
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="https://www.linkedin.com/in/federico-giannini95/"
              className="link"
            >
              <FaLinkedin />
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="https://github.com/FGiannini95"
              className="link"
            >
              <FaGithub />
            </Nav.Link>
          </div>
        </Col>
      </Row>
    </Container>
  );
};
