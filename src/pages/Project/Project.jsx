import React from 'react'
import { CardOneExercise} from '../../components/CardOneExercise/CardOneExercise'
import { Outlet } from 'react-router-dom'
import { CardOneProject } from '../../components/CardOneProject/CardOneProject';

export const Project = ({dataProyectos}) => {

  return (
    <section className="sectionPractice d-flex flex-wrap justify-content-center align-items-center gap-2 py-5 mx-auto">
      {/* <section className="sectionPractice d-flex flex-wrap justify-content-center align-items-center gap-2 py-5 mx-auto"> */}
      {dataProyectos?.map((elem) => {
        return <CardOneProject key={elem.id} elem={elem} />;
      })}
      <Outlet />
    </section>
  );
}

