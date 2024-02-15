import React from "react";
import { CardOneExercise } from "../../components/CardOneExercise/CardOneExercise";
import { Outlet } from "react-router-dom";
import "./practice.scss";

export const Practice = ({ data }) => {
  return (
    <section className="sectionPractice d-flex flex-wrap justify-content-center align-items-center gap-2 py-5 mx-auto">
      <p className="">
        Explore the practice exercises, most of which are interactive, where I
        have refined my skills. While they may seem basic, each one has required
        lots of effort and dedication.
      </p>
      <article className="d-flex flex-wrap justify-content-center align-items-center gap-2 py-3">
      {data?.map((elem) => {
        return <CardOneExercise key={elem.id} elem={elem} />;
      })}
      <Outlet />
      </article>
    </section>
  );
};





