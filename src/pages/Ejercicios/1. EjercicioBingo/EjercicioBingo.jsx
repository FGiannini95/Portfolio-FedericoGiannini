import React, { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ejercicioBingo.scss";

export const EjercicioBingo = () => {
  const [number, setNumber] = useState(null);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [casualNumber, setCasualNumber] = useState();
  const [color, setColor] = useState("");
  const [disableSelection, setDisableSelection] = useState(false);
  const navigate = useNavigate();

  const sum = () => setNumber(number + 1);

  const changeColor = () => setColor("oscuro");

  const showNumber = (selectedNumber) => {
    if (selectedNumber !== null && casualNumber !== null && !disableSelection) {
      setSelectedNumber(selectedNumber);
      changeColor();
    }
  };

  const createNumber = () => {
    if (selectedNumber !== casualNumber) {
      const newNumber = parseInt(Math.random() * (99 + 1 - 0) + 0);
      setCasualNumber(newNumber);
      sum();
      setDisableSelection(true);
    }
  };

  const reset = () => {
    setSelectedNumber();
    setCasualNumber();
    setNumber(null);
    setDisableSelection(false);
  };

  return (
    <section className="sectionBingo d-flex flex-column  align-items-center">
      <div className="p-3">
        <Button variant="dark" onClick={() => navigate("/project")}>
          Go back to all projects
        </Button>
      </div>
      <Container className="ejBingo text-center">
        <Row>
          <div className="p-3">
            <h2>Bingo: test your luck!</h2>
          </div>
          <div className="ejBingo__buttonNumber">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
              <button
                className={`${selectedNumber === num ? "oscuro" : ""}`}
                key={num}
                onClick={() => showNumber(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="ejBingo__buttonNumber">
            {[10, 11, 12, 13, 14, 15, 16, 17, 18, 19].map((num) => (
              <button
                className={`${selectedNumber === num ? "oscuro" : ""}`}
                key={num}
                onClick={() => showNumber(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="ejBingo__buttonNumber">
            {[20, 21, 22, 23, 24, 25, 26, 27, 28, 29].map((num) => (
              <button
                className={`${selectedNumber === num ? "oscuro" : ""}`}
                key={num}
                onClick={() => showNumber(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="ejBingo__buttonNumber">
            {[30, 31, 32, 33, 34, 35, 36, 37, 38, 39].map((num) => (
              <button
                className={`${selectedNumber === num ? "oscuro" : ""}`}
                key={num}
                onClick={() => showNumber(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="ejBingo__buttonNumber">
            {[40, 41, 42, 43, 44, 45, 46, 47, 48, 49].map((num) => (
              <button
                className={`${selectedNumber === num ? "oscuro" : ""}`}
                key={num}
                onClick={() => showNumber(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="ejBingo__buttonNumber">
            {[50, 51, 52, 53, 54, 55, 56, 57, 58, 59].map((num) => (
              <button
                className={`${selectedNumber === num ? "oscuro" : ""}`}
                key={num}
                onClick={() => showNumber(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="ejBingo__buttonNumber">
            {[60, 61, 62, 63, 64, 65, 66, 67, 68, 69].map((num) => (
              <button
                className={`${selectedNumber === num ? "oscuro" : ""}`}
                key={num}
                onClick={() => showNumber(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="ejBingo__buttonNumber">
            {[70, 71, 72, 73, 74, 75, 76, 77, 78, 79].map((num) => (
              <button
                className={`${selectedNumber === num ? "oscuro" : ""}`}
                key={num}
                onClick={() => showNumber(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="ejBingo__buttonNumber">
            {[80, 81, 82, 83, 84, 85, 86, 87, 88, 89].map((num) => (
              <button
                className={`${selectedNumber === num ? "oscuro" : ""}`}
                key={num}
                onClick={() => showNumber(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="ejBingo__buttonNumber">
            {[90, 91, 92, 93, 94, 95, 96, 97, 98, 99].map((num) => (
              <button
                className={`${selectedNumber === num ? "oscuro" : ""}`}
                key={num}
                onClick={() => showNumber(num)}
              >
                {num}
              </button>
            ))}
          </div>
          <Col className="p-3">
            <h4>Selected number: {selectedNumber}</h4>
            <h4 className="pointNumber" onClick={createNumber}>
              Generate a new number: {casualNumber}
            </h4>
            <h4>Number of runs: {number}</h4>
          </Col>
          {casualNumber === selectedNumber && selectedNumber !== null && (
            <Col className="ejBingo__congrats p-3">
              <h4>Congratulations, you needed {number} runs!</h4>
              <p>🥳🎉🥳🎉🥳🎉</p>
              <div>
                <button onClick={reset}>Try again!</button>
              </div>
            </Col>
          )}
        </Row>
      </Container>
    </section>
  );
};
