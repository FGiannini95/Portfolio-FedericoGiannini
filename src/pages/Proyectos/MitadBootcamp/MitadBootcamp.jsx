import React from "react";
import { Button, Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { MdOndemandVideo } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import "./mitadBootcamp.scss"

export const MitadBootcamp = () => {
  const navigate = useNavigate();

  return (
    <section className="sectionMitadBootcamp d-flex flex-column justify-content-center align-items-center pb-5">
      <div className="p-3">
        <Button variant="dark" onClick={() => navigate("/project")}>
          Go back to all projects
        </Button>
      </div>
      <article className="ejMateriaPrima ">
        <div className="pt-3 d-flex justify-content-center">
          <h2>Materia Prima - Restaurants Collection Manager</h2>
        </div>
        <div className="d-flex align-items-center justify-content-center gap-3 pb-2">
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
        <div>
          <p>
            <span>Introduction:</span> Welcome to Materia Prima, where passion
            for food meets cutting-edge technology. Materia Prima is more than
            just a platform; you're invited to explore the world of restaurant
            management in a personalized and user-friendly environment.
          </p>
          <h3>Full Stack Technologies:</h3>
          <ul>
            <li>
              <span>HTML, CSS3, JavaScript:</span> Crafting engaging user interfaces and
              enabling seamless interaction.
            </li>
            <li>
              <span>Node.js, Express:</span> Powering the backend for robust server-side
              operations and request handling.
            </li>
            <li>
              <span>MySQL:</span> Efficiently managing data storage and retrieval with a
              secure database system.
            </li>
          </ul>
          <h3>Highlighted Features:</h3>
          <ol>
            <li>
              <span>User Registration:</span> Dive into Materia Prima by creating your
              personalized account. Your account security is our priority,
              ensured by the robust encryption of the bcrypt library.
            </li>
            <li>
              <span>Restaurant Management:</span> Keep your favorite dining spots organized.
              Materia Prima empowers you to add, modify, and remove restaurants
              from your collection with ease. Enrich each entry with captivating
              images and detailed descriptions, turning your collection into a
              visual feast.
            </li>
            <li>
              <span>Dishes Management:</span> Add, edit, or delete dishes from your
              collection, ensuring a personalized gastronomic adventure. Enhance
              each entry with captivating images and comprehensive descriptions,
              transforming your collection into a culinary masterpiece
            </li>
          </ol>
        </div>
      </article>
    </section>
  );
};
