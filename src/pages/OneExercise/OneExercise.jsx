import React from 'react'
import { useParams } from 'react-router-dom'
import { EjercicioBingo } from '../Ejercicios/1. EjercicioBingo/EjercicioBingo'
import { EjercicioCalculator } from '../Ejercicios/2. EjercicioCalculator/EjercicioCalculator'
import { EjercicioConverter } from '../Ejercicios/3.Converter/EjercicioConverter'
import { EjercicioFarmahouse } from '../Ejercicios/4. EjercicioFarmhouse/EjercicioFarmahouse'
import { EjercicioWeather } from '../Ejercicios/6. EjercicioApiWeather/EjercicioWeather'
import { EjercicioRickMorty } from '../Ejercicios/7. EjercicioApyRick&Mortin/EjercicioRickMorty'
import { EjercicioMarvel } from '../Ejercicios/5. EjercicioApiMarvel/EjercicioMarvel'
import { EjercicioCountries } from '../Ejercicios/8. EjercicioApiCountries/EjercicioCountries'

export const OneExercise = ({data}) => {
  const {id} = useParams()
  const oneExercise = data?.find ((elem)=>elem.id === Number(id))
 
  return (
    <div>
    {id === "1" && <EjercicioBingo/>}
    {id === "2" && <EjercicioCalculator/>}
    {id === "3" && <EjercicioConverter/>}
    {id === "4" && <EjercicioFarmahouse/>}
    {/* {id === "5" && <EjercicioMarvel/>} */}
    {id === "6" && <EjercicioWeather/>}
    {id === "7" && <EjercicioRickMorty/>}
    {id === "8" && <EjercicioCountries/>}
    </div>
  )
}
