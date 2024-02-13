import React from "react";
import { Outlet } from "react-router-dom";
import { CardOneProject } from "../../components/CardOneProject/CardOneProject";

export const Project = ({ dataProyectos }) => {
  return (
    <section className="sectionPractice d-flex flex-wrap justify-content-center align-items-center gap-2 py-5 mx-auto">
      <p>
        Explore the projects where I have left my personal and professional
        mark, each of them representing a milestone in my journey and a proof to
        my dedication and skills in action.
      </p>
      {dataProyectos?.map((elem) => {
        return <CardOneProject key={elem.id} elem={elem} />;
      })}
      <Outlet />
    </section>
  );
};
