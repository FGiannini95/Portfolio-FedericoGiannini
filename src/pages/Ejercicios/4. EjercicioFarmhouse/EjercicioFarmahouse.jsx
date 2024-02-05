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
        <Button variant="dark" onClick={() => navigate("/practice")}>
          Go back to all exercises
        </Button>
      </div>
      <article className={`ejFarmhouse text-center ${isDay ? "noche" : "dia"}`}>
        <div className="p-3">
          <h2>Farmhouse</h2>
        </div>
        <div onClick={changeDayToNight}>
          <img
            className={`sunImg ${isDay ? "noche" : "dia"}`}
            src={isDay ? "/assets/practice/farmhouse/sol.png" : "/assets/practice/farmhouse/luna.png"} 
            alt={isDay ? "sun" : "moon"}
          />
        </div>
        <div onClick={changeHouse}>
          <img
          className="house"
            src={house ? "/assets/practice/farmhouse/casa2.png" : "/assets/practice/farmhouse/casa1.png"} alt={house ? "Brick house" : "Wood house"} />
        </div>
        <div onClick={changeTree}>
          <img 
            className="tree"
            src={tree ? "/assets/practice/farmhouse/arbol1.png" : "/assets/practice/farmhouse/arbol3.png"} alt="Tree" />
        </div>
        <div onClick={changeBoy}>
          <img
            className="boy"
            src={boy ? "/assets/practice/farmhouse/chico4.png" : "/assets/practice/farmhouse/chico.png"} alt="Boy" />
        </div>
        <div onClick={changeGirl}>
          <img
            className="girl"
            src={girl ? "/assets/practice/farmhouse/chica3.png" : "/assets/practice/farmhouse/chica.png"} alt="Girl" />
        </div>
        <div onClick={changeDog}>
          <img
            className="perro"
            src={dog ? "/assets/practice/farmhouse/perro.png" : "/assets/practice/farmhouse/perro3.png"} alt="Girl" />
        </div>
        <div onClick={changeBird}>
          <img
            className="bird"
            src={bird ?"/assets/practice/farmhouse/pajaro4.png" : "/assets/practice/farmhouse/pajaro.png"} alt="Black Birds" />
        </div>
        <div>
          <img
            className="cloud1"
            src="/assets/practice/farmhouse/nube1.png" alt="Cloud" />
        </div>
        <div>
          <img
            className="cloud2"
            src= "/assets/practice/farmhouse/nube2.png"alt="Cloud" />
        </div>
        <div className="">
          <img
            className="prato"
            src="/assets/practice/farmhouse/suelo.png"
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
