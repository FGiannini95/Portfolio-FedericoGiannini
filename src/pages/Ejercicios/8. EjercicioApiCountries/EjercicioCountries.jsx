import React, { useEffect, useState } from "react";
import "./ejercicioCountries.scss";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const EjercicioCountries = () => {

  const [datos, setDatos] = useState()
  const navigate = useNavigate()

  useEffect(()=>{
    axios
    .get("https://restcountries.com/v3.1/all")
    .then((res)=>{
      console.log(res);
      setDatos(res.data)
    })
    .catch((err)=>{
      console.log(err);
    })

  }, [])


  return (
    <section className="sectionCountries d-flex flex-column align-items-center">
      <div className="p-3">
        <Button variant="dark" onClick={() => navigate("/practice")}>
          Go back to all exercises
        </Button>
      </div>
      <article className="ejCalculator text-center">
        <div className="pt-3">
          <h2>Countries of the world</h2>
        </div>
        <div>
          <Button onClick={()=>navigate('/region/Africa')}>Africa</Button>
        </div>
        <div>
          <Button onClick={()=>navigate('/region/Americas')}>Americas</Button>
        </div>
        <div>
          <Button onClick={()=>navigate('/region/Asia')}>Asia</Button>
        </div>
        <div>
          <Button onClick={()=>navigate('/region/Europe')}>Europa</Button>
        </div>
        <div>
          <Button onClick={()=>navigate('/region/Oceania')}>Oceania</Button>
        </div>
        <div>
          <Button onClick={()=>navigate('/region/Antarctic')}>Antarctic</Button>
        </div>
      </article>
    </section>
  );
};
