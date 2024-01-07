import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from '../pages/Home/Home'
import { Project } from '../pages/Project/Project'
import { About } from '../pages/About/About'
import { Contact } from '../pages/Contact/Contact'
import { ErrorPage } from '../pages/Error/ErrorPage'
import { NavbarPortfolio } from '../components/Navbar/NavbarPorfolio'
import './portfolio.scss'
import { dataEjercicios } from '../data/data'
import { OneExercise } from '../pages/OneExercise/OneExercise'

export const Portfolio = () => {

  return (
      <BrowserRouter>
      <NavbarPortfolio/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/project' element={<Project data={dataEjercicios}/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/oneExercise/:id' element={<OneExercise data={dataEjercicios}/>} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
      </BrowserRouter>

  )
}
