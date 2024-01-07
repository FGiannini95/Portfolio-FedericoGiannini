import React from "react";
import { Card } from "react-bootstrap";

export const Minicard = ({ elem, setInfoFicha, setDatos }) => {
  return (
    <div>
      <Card style={{ width: "12vw", height: "20vw" }}
      onClick={()=>setDatos(elem)}>
        <Card.Img variant="top" src={`${elem.thumbnail.path}.${elem.thumbnail.extension}`} />
        <Card.Body>
          <Card.Text>{elem.name} </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
