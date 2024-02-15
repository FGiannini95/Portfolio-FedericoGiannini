import axios from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoPeople } from "react-icons/io5";
import "./region.scss";

export const Region = () => {
  const { region } = useParams();
  const [datos, setDatos] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v3.1/region/${region}`)
      .then((res) => {
        console.log(res);
        setDatos(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <section className="sectionRegion d-flex flex-column align-items-center pb-5">
      <div className="p-3 d-flex gap-3">
        <Button variant="dark" onClick={() => navigate(-1)}>
          Go back to all continents
        </Button>
        <h2>{region}</h2>
      </div>
      <article className="ejRegion d-flex flex-wrap justify-content-center align-items-center gap-2 py-3">
      {datos !== undefined && (
        <>
          {datos.map((elem, i) => (
            <Card style={{ width: "16rem", height: "300px" }} className="cardCountry" key={i}>
              <Card.Img
                className="cardImage"
                variant="top"
                src={elem.flags.png}
              />
              <Card.Body>
                <Card.Title className="text-center">
                  <FaMapMarkerAlt /> {elem.name.common}
                </Card.Title>
                <Card.Text className="text-center">
                  <IoPeople /> {elem.population}
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </>
      )}
   </article>
    </section>
  );
};
