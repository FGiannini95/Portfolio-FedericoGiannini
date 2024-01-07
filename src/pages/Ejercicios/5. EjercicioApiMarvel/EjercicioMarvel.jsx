import React, { useEffect, useState } from "react";
import "./marvel.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { Ficha } from "../../../components/Marvel/Ficha/Ficha";
import { ButtonsApp } from "../../../components/Marvel/Buttons/ButtonsApp";
import { Galery } from "../../../components/Marvel/Galery/Galery";



export const EjercicioMarvel = () => {
  const navigate = useNavigate();
  const [datos, setDatos] = useState()
  const [infoFicha, setInfoFicha] = useState()

  console.log(datos);

  useEffect(()=>{
    axios
      .get("https://gateway.marvel.com:443/v1/public/characters?apikey=ad1ece0e1133141ddcd9b538c6945e53&hash=6e7c7e3125ac46a996f096cc6926e785e611f4fa")
      .then((res)=>{
        setDatos(res.data.data.results)
        console.log(res.data);
      })
      .catch((err)=>{console.log(err)})
  }, [])

  return (
    <section className="sectionMarvel d-flex flex-column align-items-center pb-5">
      <div className="p-3">
        <Button variant="dark" onClick={() => navigate("/project")}>
          Go back to all projects
        </Button>
      </div>
      <article className="ejMarvel text-center">
        <div className="p-3">
          <h2>Marveeeeel</h2>
        </div>
        <Ficha
          datos={datos}
           />
        <ButtonsApp/>
        <Galery
          datos={datos}
          setDatos={setDatos}
          setInfoFicha={setInfoFicha}
          />
      </article>
    </section>
  );
};
