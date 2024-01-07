import React from 'react'
import { CardOneExercise} from '../../components/CardOneExercise/CardOneExercise'
import { Outlet } from 'react-router-dom'

export const Project = ({data}) => {


  return (
      <section className='sectionProjects d-flex flex-wrap justify-content-center align-items-center gap-2 py-5'>
        
      {
        data?.map((elem)=>{
          return(
            <CardOneExercise
               key={elem.id}
               elem={elem}/>
          )
        })
      }
      <Outlet/>
      </section>
  )
}

