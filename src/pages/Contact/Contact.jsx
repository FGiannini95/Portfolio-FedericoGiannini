import React from "react";
import { Card, Col, Container, Nav, Row } from "react-bootstrap";
import "./contact.scss";
import { Link } from "react-router-dom";

export const Contact = () => {
  return (
    <section className="sectionContact pb-5">
      <div className="d-flex justify-content-center align-items-center text-center pt-5">
        <Card style={{ width: "60vw" }} className="d-flex justify-content-center align-items-center text-center">
        <Card.Img className="FG p-1 mt-2" variant="top" src="/assets/projects/FedericoGiannini.jpeg" />
          <Card.Body>
            <Card.Title className="">
            Get in touch with me by email:
            </Card.Title>
            <Card.Text className="">
            fgiannini95@gmail.com
            </Card.Text>
            <Card.Title className="">
            Or follow me from the distance:
            </Card.Title>
            <Card.Text className="link">
            <Nav.Link as={Link} to="https://www.linkedin.com/in/federico-giannini95/" >      LinkedIn</Nav.Link>
            </Card.Text>
            <Card.Text className="link">
            <Nav.Link as={Link} to="https://github.com/FGiannini95" >GitHub</Nav.Link>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};
