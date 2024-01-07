import React from 'react'
import { Minicard } from '../MiniCard/Minicard';

export const Galery = ({datos, setDatos, setInfoFicha}) => {
  console.log("galeria", datos);
  return (
    <section className='d-flex flex-wrap justify-content-center align-items-center gap-2 py-3'>
      {
        datos?.map((e, i)=>{
          return(
            <Minicard
            elem={e}
            key={i}
            setInfoFicha={setInfoFicha}
            setDatos={setDatos} />
          )
        })
      }
    </section>
  )
}
