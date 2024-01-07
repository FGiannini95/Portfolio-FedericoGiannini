import React, { useState } from "react";
import { Button, Card } from "react-bootstrap";
import "./about.scss";

export const About = () => {
  const [showCV, setShowCV] = useState(false);
  const openCV = () => {
    setShowCV(!showCV);
  };

  return (
    <section className="sectionAbout pb-5">
      <div className="d-flex justify-content-center align-items-center">
        <div className="description pt-5">
          <p>
          Interested in the tech world and eager to contribute and enrich me in this sector. Great ability to adapt to any situation and to create reliable working environments that stimulate teamwork. I stand out for a hight organizational capacity and a strong commitment in anything I do. 
          </p>
          <div className="text-center">
            <Button variant="dark" onClick={openCV} className="m-3">
              {showCV ? "Close resume" : "Open resume"}{" "}
            </Button>
          </div>
        </div>
      </div>
      {showCV === true ? (
        <div className="d-flex justify-content-center align-items-center text-center">
          <Card style={{ width: "60vw" }} className="cv">
            <Card.Body>
              <Card.Title className="py-3">EDUCACION</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Full-Stack Web Developer
              </Card.Subtitle>
              <Card.Text>
                SocraTech - Escuela de Nuevas Tecnologías 09/2023 - 02/2024
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Master’s degree: Directive Management of Non-Profit Organisation
              </Card.Subtitle>
              <Card.Text>U.N.E.D 03/2021 - 07/2022</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Master’s degree: International Solidarity Action and Social
                Inclusion
              </Card.Subtitle>
              <Card.Text>
                Universidad Carlos III de Madrid 09/2018 - 06/2019
              </Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                Bachelor’s degree: Internacional and Diplomatic Science
              </Card.Subtitle>
              <Card.Text>
                Alma Mater Studiorum - Universitá di Bologna 09/2014 - 07/2017
              </Card.Text>
              <Card.Title className="py-3">WORK EXPERIENCE</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Spanish Comission for Refugees 09/2019 - 10/2023
              </Card.Subtitle>
              <Card.Text>
                Social Integration Worker and Technician responsible for
                Volunteering and Social Participation
              </Card.Text>
              <Card.Title className="py-3">LANGUAGES</Card.Title>
              <Card.Text>Italian: native</Card.Text>
              <Card.Text>Spanish: full Professional Proficiency</Card.Text>
              <Card.Text>English: professional Working Proficiency</Card.Text>
              <Card.Text>French: limited Working Proficiency</Card.Text>
            </Card.Body>
          </Card>
        </div>
      ) : null}
    </section>
  );
};
