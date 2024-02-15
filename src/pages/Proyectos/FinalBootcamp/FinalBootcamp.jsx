import React from 'react'
import { Button, Nav } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import { MdOndemandVideo } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

export const FinalBootcamp = () => {

  const navigate = useNavigate()

  return (
    <section className="proyectoFinal d-flex flex-column align-items-center">
    <div className="p-3">
      <Button variant="dark" onClick={() => navigate("/project")}>
        Go back to all projects
      </Button>
    </div>
    <article className="ejAscendio text-center">
      <div className="pt-3">
        <h2>Ascendio</h2>
      </div>
      <div className="d-flex align-items-center justify-content-center gap-5">
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
    </article>
  </section>
  )
}
