import React from "react";
import "./home.scss";
import { Card } from "react-bootstrap";

export const Home = () => {
  return (
    <section className="section1">
      <div className="d-flex justify-content-center align-items-center text-center p-5">
        <Card style={{ width: "60vw" }} className="cardHome">
          <Card.Body>
            <Card.Title className="cardHome__title">
              Hi, I am Federico
            </Card.Title>
            <Card.Text className="cardHome__sub">
              I am a Full Stack Web developer!
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </section>
  );
};
