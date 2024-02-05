import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import { Project } from "../pages/Project/Project";
import { About } from "../pages/About/About";
import { Contact } from "../pages/Contact/Contact";
import { ErrorPage } from "../pages/Error/ErrorPage";
import { NavbarPortfolio } from "../components/Navbar/NavbarPorfolio";
import "./portfolio.scss";
import { dataEjercicios } from "../data/data";
import { dataProyectos } from "../data/dataProyectos";
import { OneExercise } from "../pages/OneExercise/OneExercise";
import { Practice } from "../pages/Practice/Practice";
import { CV } from "../pages/CV/CV";
import { Container } from "react-bootstrap";
import { OneProject } from "../pages/OneProject/OneProject";

export const Portfolio = () => {
  return (
    <BrowserRouter>
      <NavbarPortfolio />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/project"
          element={<Project dataProyectos={dataProyectos} />}
        />
        <Route path="/practice" element={<Practice data={dataEjercicios} />} />
        <Route path="/about" element={<About />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/oneExercise/:id"
          element={<OneExercise data={dataEjercicios} />}
        />
        <Route
          path="/oneProject/:id"
          element={<OneProject dataProyectos={dataProyectos}  />}
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
