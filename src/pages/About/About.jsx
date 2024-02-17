import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./about.scss";

export const About = () => {

  const handleDownload = () => {
    window.open("/public/assets/About/CV.FG.pdf"); // Abre una nueva ventana con el archivo PDF
  };

  return (
    <section className="sectionAbout pb-5">
      <div className="d-flex justify-content-center align-items-center">
        <div className="description pt-5">
          <h5>About me</h5>
          <p>
            After a robust experience in the social sphere, focused on
            integration programs and humanitarian assistance, I have opted for a
            career shift. I decided to explore a sector that has always piqued
            my interest. In detail, I completed a training program as a Full
            Stack Web Developer.
          </p>
          <p>
            This change signifies my desire to merge technical skills with a
            passion for making a positive impact in the digital realm. My
            competencies span both frontend and backend development, database
            management, and agile methodologies.
          </p>
          <p>
            I am thrilled to embark on this new professional chapter, where I
            aim to apply my knowledge and expertise in web development to craft
            innovative and meaningful solutions My goal is to contribute to the
            growth and success of technological projects that benefit society
            positively.
          </p>

          <h5>My interests</h5>
          <p>
            When I am away from the computer, I immerse myself in Brazilian
            Jiu-jitsu and padel. Occasionally, I enjoy pushing my boundaries by
            preparing for long-distance races. I am passionate about history,
            traveling and discovering new cultures.
          </p>
          <div className="text-center">
            <Button variant="dark" className="m-3" onClick={handleDownload}>
                Open resume
              </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
