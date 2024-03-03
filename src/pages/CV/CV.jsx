import React from "react";
import { Col, Row } from "react-bootstrap";
import './cv.scss'

export const CV = () => {
  return (
    <Row className="viewCv">
    <Col
      xs={12}
      className="justify-content-center text-center align-items-center pb-5 viewCv__structure"
    >
      <iframe className="viewCv__pdf" src="/assets/About/FedericoGiannini.CV.pdf" frameBorder="0"></iframe>
    </Col>
    </Row>
  );
};
