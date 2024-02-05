import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import './ejercicioCalculator.scss'

export const EjercicioCalculator = () => {

  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState()
  const [operator, setOperator] = useState()
  const [result, setResult] = useState()
  const navigate = useNavigate()

  const handleChange1 = (e) => {
    setNum1(e.target.value)
  }

  const handleChange2 = (e) => {
    setNum2(e.target.value)
  }

  const clear = () =>{
    setNum1("")
    setNum2("")
    setOperator("")
    setResult("")
  }

  const calculate = () => {
    const number1 = parseInt(num1)
    const number2 = parseInt(num2)

      if ((isNaN(number1)) || (isNaN(number2))){
        setResult("Select two numbers")
      }
      else if (!operator){
        setResult("Select the operator")
      }
      else{
        if (operator === "+"){
          setResult(number1 + number2)
        }
        else if (operator === "-"){
          setResult(number1 - number2)
        }
        else if (operator === "/"){
          setResult(number1 / number2)
        }
        else if (operator === "*"){
          setResult(number1 * number2)
        }
      }
  }

  return (
    <section className='sectionCalculator d-flex flex-column align-items-center pb-5'>
      <div className='p-3'>
        <Button  variant="dark" onClick={()=>navigate('/practice')}>Go back to all exercises</Button>
      </div>
      <article className='ejCalculator text-center'>
      <div className='pt-3'>
        <h2>The Calculator</h2>
      </div>
      <div className='d-flex justify-content-center p-3 ejCalculator__divInput'>
        <input
          type="text"
          value={num1}
          onChange={handleChange1}
          autoFocus
        />
        <h4>{operator}</h4>
        <input 
          type="text"
          value={num2}
          onChange={handleChange2}
        />
      </div>
      <div className='p-3 ejCalculator__divOperator'>
        <button onClick={()=>setOperator("+")}>+</button>
        <button onClick={()=>setOperator("-")}>-</button>
        <button onClick={()=>setOperator("/")}>/</button>
        <button onClick={()=>setOperator("*")}>*</button>
      </div>
      <div className='p-3 ejCalculator__divOperator'>
        <button onClick={calculate}>Calculate</button>
        <button onClick={clear}>C</button>
      </div>
      <div className='p-3'>
        <h4>=</h4>
        <h3>{result} </h3>
      </div>
      </article>
  </section>
  )
}
