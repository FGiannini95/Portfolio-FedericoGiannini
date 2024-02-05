import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./about.scss";

export const About = () => {

  const [showCV, setShowCV] = useState(false);

  return (
    <section className="sectionAbout pb-5">
      <div className="d-flex justify-content-center align-items-center">
        <div className="description pt-5">
          <h5>About me</h5>
          <p>
            Interested in the tech world and eager to contribute and enrich me
            in this sector. Great ability to adapt to any situation and to
            create reliable working environments that stimulate teamwork. I
            stand out for a hight organizational capacity and a strong
            commitment in anything I do.
          </p>
          <h5>My interests</h5>
          <p>
            I regulary practice brazilian Jiu-jitsu and padel. From time to
            time, I like to challenge my limits and prepare long-distance races.
            I am passionate about history, traveling and discovering new
            cultures.
          </p>
          <div className="text-center">
          <Link to="/cv">
            <Button variant="dark" className="m-3">Open resume</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
