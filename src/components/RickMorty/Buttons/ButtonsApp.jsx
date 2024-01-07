import React from 'react'
import './buttonsApp.scss'
export const ButtonsApp = ({handleClick}) => {

  return (
    <section className='sectionButton'>
      <button onClick={()=>handleClick("character")}>Characters</button>
      <button onClick={()=>handleClick("location")}>Location</button>
      <button onClick={()=>handleClick("episode")}>Episode</button>
    </section>
  )
}
