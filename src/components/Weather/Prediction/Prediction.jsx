import React, { useEffect } from "react";
import { useState } from "react";
import { OneCardWeather } from "../oneCardWeather/OneCardWeather";

export const Prediction = ({ datos }) => {
  const [datosFinales, setDatosFinales] = useState();
  console.log("data en galerua", datos);

  useEffect(() => {
    if (datos) {
      setDatosFinales(
        datos.list.filter((elem) => {
          return elem.dt_txt.split(" ")[1] === "12:00:00";
        })
      );
    }
  }, [datos]);

  return (
    <section>
      <div>
        <h3>📍{datos?.city.name}🌍</h3>
      </div>
      <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 py-3">
        {datosFinales?.map((e, index) => {
          return <OneCardWeather key={index} elem={e} />;
        })}
      </div>
    </section>
  );
};
