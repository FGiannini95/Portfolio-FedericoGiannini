import React from "react";
import { MiniCard } from "../miniCard/MiniCard";
import axios from "axios";
import './gallery.scss'

export const Gallery = ({ setInfoFicha, datos, setDatos }) => {
  console.log("datos en gallery", datos);

  const cargarOtros = (url) => {
    console.log("urlllll", url);
    axios
      .get(url)
      .then((res) => {
        setDatos(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="cargarOtros">
      {datos?.info.prev && (
        <div>
          <button onClick={() => cargarOtros(datos?.info.prev)}>⟪</button>
        </div>
      )}

      <div className="d-flex flex-wrap justify-content-center align-items-center gap-2 py-3">
        {datos?.results.map((e, i) => {
          return <MiniCard elem={e} key={i} setInfoFicha={setInfoFicha}/>;
        })}
      </div>
      {datos?.info.next && (
        <div className="cargarOtros">
          <button onClick={() => cargarOtros(datos?.info.next)}>⟫</button>
        </div>
      )}
    </div>
  );
};
