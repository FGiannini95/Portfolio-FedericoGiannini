import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { MdOndemandVideo } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export const MitadBootcamp = () => {
  const navigate = useNavigate();

  return (
    <section className="proyectoMitad d-flex flex-column align-items-center">
      <div className="p-3">
        <Button variant="dark" onClick={() => navigate("/project")}>
          Go back to all projects
        </Button>
      </div>
      <article className="ejMateriaPrima text-center">
        <div className="pt-3">
          <h2>Materia Prima</h2>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-5">
          <Nav.Link
            as={Link}
            to="https://www.youtube.com/watch?v=jEv2Jc8g-5U&t=1s&ab_channel=Socratech"
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
      </article>
    </section>
  );
};
