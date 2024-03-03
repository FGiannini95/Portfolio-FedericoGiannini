import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { MdOndemandVideo } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import "./finalBootcamp.scss";

export const FinalBootcamp = () => {
  const navigate = useNavigate();

  return (
    <section className="sectionFinalBootcamp d-flex flex-column justify-content-center align-items-center pb-5">
      <div className="p-3">
        <Button variant="dark" onClick={() => navigate("/project")}>
          Go back to all projects
        </Button>
      </div>
      <article className="ejAscendio">
        <div className="pt-3 d-flex justify-content-center">
          <h2>Ascendio</h2>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3 pb-2">
          <Nav.Link
            as={Link}
            to="https://youtu.be/B4JPTwi-Dq4?t=1407"
            className="link"
          >
            <MdOndemandVideo />
          </Nav.Link>

          <Nav.Link
            as={Link}
            to="https://github.com/FGiannini95"
            className="link"
          >
            <FaGithub />
          </Nav.Link>
        </div>
        <div>
          <p>
            <span>Introduction:</span> Welcome to Ascendio, where the vibrant
            world of cryptocurrency education meets the cutting-edge landscape
            of technology. Ascendio is a dynamic gateway designed to immerse
            users in the intricate realm of digital cryptocurrency. Our mission
            is to empower individuals with the knowledge and tools needed to
            navigate the ever-evolving cryptocurrency landscape.
          </p>
          <h3>Full Stack Technologies:</h3>
          <ul>
            <li>
              <span>HTML and CSS3:</span> Utilized for designing and styling
              Ascendio's web pages, ensuring a visually appealing experience for
              users.
            </li>
            <li>
              <span>JavaScript:</span> Programming language used to implement
              interactive and dynamic logic on both the client and server sides.
            </li>
            <li>
              <span>React:</span> Utilized for creating dynamic and engaging
              user interfaces, as well as managing application state
              efficiently.
            </li>
            <li>
              <span>Node.js, Express:</span> Employed on the server-side to
              perform logical operations and handle requests effectively.
            </li>
            <li>
              <span>MySQL:</span> Database used to store and retrieve data
              related to users, courses, transactions, and other relevant
              information.
            </li>
          </ul>
          <h3>Highlighted Features:</h3>
          <ol>
            <li>
              <span>User Registration:</span> Dive into Ascendio by creating
              your personalized account. Your account security is our priority,
              ensured by the robust encryption of the bcrypt library.
            </li>
            <li>
              <span>Course Creation:</span> Empower users to generate and engage
              in cryptocurrency courses. Enhance courses with sections and
              chapters, offering comprehensive knowledge. Users can bookmark
              courses and rate them to evaluate their quality
            </li>
            <li>
              <span>Trade Management:</span> Enable users to conduct
              cryptocurrency predictions. Mark trades as successful or
              unsuccessful to improve learning experiences.
            </li>
            <li>
              <span>Admin Dashboard:</span> Administrators have access to a
              dashboard that allows them to manage users, courses, trades, and
              content. They can take actions such as blocking inappropriate
              content and monitoring user activities.
            </li>
          </ol>
        </div>
      </article>
    </section>
  );
};
