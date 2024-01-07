import React, { useState } from "react";
import "./ejercicioFarmhouse.scss";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

export const EjercicioFarmahouse = () => {
  const navigate = useNavigate();
  const [isDay, setIsDay] = useState(true);
  const [house, setHouse] = useState()
  const [tree, setTree] = useState()
  const [boy, setBoy] = useState()
  const [girl, setGirl] = useState()
  const [dog, setDog] = useState()
  const [bird, setBird] = useState()

  const changeDayToNight = () => {setIsDay(!isDay)};
  const changeHouse = () =>{setHouse(!house)}
  const changeTree = () => {setTree(!tree)}
  const changeBoy = () =>  {setBoy(!boy)}
  const changeGirl = () => {setGirl(!girl)}
  const changeDog = () => {setDog(!dog)}
  const changeBird = () => {setBird(!bird)}

  return (
    <section className="sectionFarmhouse d-flex flex-column align-items-center pb-5">
      <div className="p-3">
        <Button variant="dark" onClick={() => navigate("/project")}>
          Go back to all projects
        </Button>
      </div>
      <article className={`ejFarmhouse text-center ${isDay ? "noche" : "dia"}`}>
        <div className="p-3">
          <h2>Farmhouse</h2>
        </div>
        <div onClick={changeDayToNight}>
          <img
            className={`sunImg ${isDay ? "noche" : "dia"}`}
            src={isDay ? "/assets/projects/farmhouse/sol.png" : "/assets/projects/farmhouse/luna.png"} 
            alt={isDay ? "sun" : "moon"}
          />
        </div>
        <div onClick={changeHouse}>
          <img
          className="house"
            src={house ? "/assets/projects/farmhouse/casa2.png" : "/assets/projects/farmhouse/casa1.png"} alt={house ? "Brick house" : "Wood house"} />
        </div>
        <div onClick={changeTree}>
          <img 
            className="tree"
            src={tree ? "/assets/projects/farmhouse/arbol1.png" : "/assets/projects/farmhouse/arbol3.png"} alt="Tree" />
        </div>
        <div onClick={changeBoy}>
          <img
            className="boy"
            src={boy ? "/assets/projects/farmhouse/chico4.png" : "/assets/projects/farmhouse/chico.png"} alt="Boy" />
        </div>
        <div onClick={changeGirl}>
          <img
            className="girl"
            src={girl ? "/assets/projects/farmhouse/chica3.png" : "/assets/projects/farmhouse/chica.png"} alt="Girl" />
        </div>
        <div onClick={changeDog}>
          <img
            className="perro"
            src={dog ? "/assets/projects/farmhouse/perro.png" : "/assets/projects/farmhouse/perro3.png"} alt="Girl" />
        </div>
        <div onClick={changeBird}>
          <img
            className="bird"
            src={bird ?"/assets/projects/farmhouse/pajaro4.png" : "/assets/projects/farmhouse/pajaro.png"} alt="Black Birds" />
        </div>
        <div>
          <img
            className="cloud1"
            src="/assets/projects/farmhouse/nube1.png" alt="Cloud" />
        </div>
        <div>
          <img
            className="cloud2"
            src= "/assets/projects/farmhouse/nube2.png"alt="Cloud" />
        </div>
        <div className="">
          <img
            className="prato"
            src="/assets/projects/farmhouse/suelo.png"
            alt="Field"
          />
        </div>
      </article>
    </section>
  );
};

/*
  const toggleState = (stateSetter) => {
    stateSetter((prev) => !prev);
  };
   <div onClick={() => toggleState(setHouse)}>
   */
