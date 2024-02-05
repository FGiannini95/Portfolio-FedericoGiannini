import React from 'react'
import { useParams } from 'react-router-dom'
import { FinalBootcamp } from '../Proyectos/FinalBootcamp/FinalBootcamp'
import { MitadBootcamp } from '../Proyectos/MitadBootcamp/MitadBootcamp'

export const OneProject = ({dataProyectos}) => {
  const {id} = useParams()
  const oneProject = dataProyectos?.find((elem)=>elem.id === Number(id)) 
  return (
    <div>
      {id === "1" && <MitadBootcamp/>}
      {id === "2" && <FinalBootcamp/>}
    </div>
  )
}
