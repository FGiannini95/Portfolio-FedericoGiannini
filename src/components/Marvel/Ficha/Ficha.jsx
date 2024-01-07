import React from "react";
import { Button, Card } from "react-bootstrap";

export const Ficha = ({ datos }) => {

  return (
    <section>
      {datos && (
        <section className="d-flex justify-content-center">
          <Card style={{ width: "25vw" }}>
            <Card.Img
              variant="top"
              src={`${datos[0]?.thumbnail.path}.${datos[0].thumbnail.extension}`}
            />
            <Card.Body>
              <Card.Title>{datos[0].name}</Card.Title>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </section>
      )}
    </section>
  );
};
