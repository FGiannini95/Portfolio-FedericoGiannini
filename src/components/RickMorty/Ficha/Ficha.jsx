import React from 'react'
import './ficha.scss'

export const Ficha = ({infoficha, categActual}) => {
  return (
    <div className='rickyMortyFicha d-flex flex-column align-items-center'>
      {categActual === 'character' && infoficha && (
        <>
          <img src={infoficha.image} alt="Picture character" />
          <h4>{infoficha.name}</h4>
          <p>Species: {infoficha.species}</p>
        </>
      )}
      {categActual === 'location' && infoficha && (
        <>
          <h4>{infoficha.name}</h4>
          <p>Type: {infoficha.type}</p>
        </>
      )}
      {categActual === 'episode' && infoficha && (
        <>
          <h4>{infoficha.name}</h4>
          <p>Broadcasted: {infoficha.air_date}</p>
        </>
      )}
    </div>
  )
}
