import React from "react";
import { CardOneExercise } from "../../components/CardOneExercise/CardOneExercise";
import { Outlet } from "react-router-dom";
import "./practice.scss";

export const Practice = ({ data }) => {
  return (
    <section className="sectionPractice d-flex flex-wrap justify-content-center align-items-center gap-2 py-5 mx-auto">
      {/* <section className="sectionPractice d-flex flex-wrap justify-content-center align-items-center gap-2 py-5 mx-auto"> */}
      {data?.map((elem) => {
        return <CardOneExercise key={elem.id} elem={elem} />;
      })}
      <Outlet />
    </section>
  );
};
