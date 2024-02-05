import React, { useEffect, useState } from "react";
import "./rickmorty.scss";
import { Button } from "react-bootstrap";
import './rickmorty.scss'
import { useNavigate } from "react-router-dom";
import { Ficha } from "../../../components/RickMorty/Ficha/Ficha";
import { ButtonsApp } from "../../../components/RickMorty/Buttons/ButtonsApp";
import { Gallery } from "../../../components/RickMorty/Gallery/Gallery";
import axios from "axios";

export const EjercicioRickMorty = () => {

  const [datos, setDatos] = useState()
  const [infoficha, setInfoFicha] = useState()
  const [categActual, setCategActual] = useState("character")
  const navigate = useNavigate()

  useEffect(()=>{
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((res)=>{
        console.log(res.data);
        setDatos(res.data)
        setInfoFicha(res.data.results[0])
      })
      .catch((err)=>{
        console.log(err);
      })
  }, [])

  const handleClick = (categ) => {
    axios
      .get(`https://rickandmortyapi.com/api/${categ}`)
      .then((res)=>{
        console.log(res.data);
        setDatos(res.data)
        setInfoFicha(res.data.results[0])
        setCategActual(categ)
      })
      .catch((err)=>{
        console.log(err);
      })
  }

  return (
    <section className="sectionRickMorty d-flex flex-column align-items-center pb-5">
      <div className="p-3">
        <Button variant="dark" onClick={() => navigate("/practice")}>
          Go back to all exercises
        </Button>
      </div>
      <article className="ejRickMorty d-flex flex-column align-items-center text-center py-3">
        <h2>The authentic Rick & Morty</h2>
        <Ficha
          infoficha={infoficha}
          categActual={categActual}
          />
        <ButtonsApp
          handleClick={handleClick} />
        <Gallery
          setInfoFicha={setInfoFicha}
          datos={datos}
          setDatos={setDatos}
          />
      </article>
    </section>
  );
};
