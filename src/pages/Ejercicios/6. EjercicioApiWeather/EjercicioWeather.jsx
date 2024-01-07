import React, { useState } from "react";
import "./weather.scss";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { Prediction } from "../../../components/Weather/Prediction/Prediction";
import { Graphic } from "../../../components/Weather/Graphic/Graphic";
import { API_KEY } from "./services/Api";
import axios from "axios";

export const EjercicioWeather = () => {
  const [city, setCity] = useState("");
  const [datos, setDatos] = useState();
  const [message, setMessage] = useState()
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCity(e.target.value);
  };

  const onSubmit = () => {
    if (city != "") {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${API_KEY}`
        )
        .then((res) => {
          setDatos(res.data);
          setMessage("")
          setCity("")
        })
        .catch((err)=>{
          console.log(err);
          setMessage("The city doesn't exist")
          setCity("")
        })
       
    } else {
      setMessage("Please, insert a city")
    }
  };

  return (
    <section className="sectionWeather d-flex flex-column align-items-center pb-5">
      <div className="p-3">
        <Button variant="dark" onClick={() => navigate("/project")}>
          Go back to all projects
        </Button>
      </div>
      <article className="ejWeather text-center">
        <div className="p-3">
          <h2>Weather forecast around the World: </h2>
        </div>
        <div className="d-flex flex-column align-items-center">
          <h4>Select the city</h4>
          <input type="text" onChange={handleChange} value={city} />
          <button className="my-2 py-2" onClick={onSubmit}>Search...🔍</button>
          <h4>{message}</h4>
        </div>
        <Prediction datos={datos} />
        {datos && <Graphic datos={datos} /> }
      </article>
    </section>
  );
};
