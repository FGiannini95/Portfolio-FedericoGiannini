import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ejercicioConverter.scss";

export const EjercicioConverter = () => {
  const [value, setValue] = useState();
  const [conversion, setConversion] = useState();
  const [result, setResult] = useState();
  const [show, setShow] = useState(0);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const showConversion = (conversion) => {
    setConversion(conversion);
  };

  const transform = () => {
    const n = parseInt(value);
    if (isNaN(n)) {
      setResult("Enter a number");
    } else if (!conversion) {
      setResult("Select the conversion");
    } else {
      if (conversion === "ºC to ºF") {
        setResult(n * (9 / 5) + 32);
      } else if (conversion === "ºC to K") {
        setResult(n + 273.1);
      } else if (conversion === "ºF to ºC") {
        setResult((n - 32) * (5 / 9));
      } else if (conversion === "ºF to K") {
        setResult((n - 32) * (5 / 9) + 273.1);
      } else if (conversion === "K to ºC") {
        setResult(n - 273.1);
      } else if (conversion === "K to ºF") {
        setResult(((n - 273.1) * 9) / 5 + 32);
      } else if (conversion === "h to min") {
        setResult(n * 60);
      } else if (conversion === "h to s") {
        setResult(n * 3600);
      } else if (conversion === "min to h") {
        setResult(n / 60);
      } else if (conversion === "min to s") {
        setResult(n * 60);
      } else if (conversion === "s to h") {
        setResult(n / 3600);
      } else if (conversion === "s to min") {
        setResult(n / 60);
      }
      else if (conversion === "atm to bar"){
        setResult(n * 1.013)
      }
      else if (conversion === "atm to Pa"){
        setResult(n * 101300)
      }
      else if (conversion === "bar to atm"){
        setResult(n / 1.013)
      }
      else if (conversion === "bar to Pa"){
        setResult(n * 100000)
      }
      else if (conversion === "Pa to atm"){
        setResult(n / 101300)
      }
      else if (conversion === "Pa to bar"){
        setResult(n / 100000)
      }
      else if (conversion === "km to yd"){
        setResult(n * 1094)
      }
      else if (conversion === "km to mi"){
        setResult(n / 1.609)
      }
      else if (conversion === "yd to km"){
        setResult(n / 1094)
      }
      else if (conversion === "yd to mi"){
        setResult(n / 1760)
      }
      else if (conversion === "mi to km"){
        setResult(n * 1.609)
      }
      else if (conversion === "mi to yd"){
        setResult(n * 1760)
      }
      else if (conversion === "kg to lb"){
        setResult(n * 2.205)
      }
      else if (conversion === "kg to oz"){
        setResult(n * 35.274)
      }
      else if (conversion === "lb to kg"){
        setResult(n / 2.205)
      }
      else if (conversion === "lb to oz"){
        setResult(n * 16)
      }
      else if (conversion === "oz to kg"){
        setResult(n / 35.274)
      }
      else if (conversion === "oz to lb"){
        setResult(n / 16)
      }
    }
  };

  const clear = () => {
    setValue("");
    setConversion("");
    setResult("");
    setShow(0)
    
  };

  const showType = (type) => {
    setConversion();
    setShow(type);
  };

  return (
    <section className="sectionConverter d-flex flex-column align-items-center pb-5">
      <div className="p-3">
        <Button variant="dark" onClick={() => navigate("/project")}>
          Go back to all projects
        </Button>
      </div>
      <article className="ejConverter text-center">
        <div className="pt-3">
          <h2>The Converter</h2>
        </div>
        <div className="ejConverter__divInput">
          <h4>{conversion}</h4>
          <input type="text" value={value} onChange={handleChange} />
        </div>
        <div className="ejConverter__divTypeConvertion p-3">
          <button onClick={() => showType(1)}>Temperature</button>
          <button onClick={() => showType(2)}>Time</button>
          <button onClick={() => showType(3)}>Pressure</button>
          <button onClick={() => showType(4)}>Distance</button>
          <button onClick={() => showType(5)}>Weight</button>
        </div>
        {show === 1 && (
          <div className="ejConverter__divOptions p-3">
            <button onClick={() => showConversion("ºC to ºF")}>ºC to ºF</button>
            <button onClick={() => showConversion("ºC to K")}>ºC to K</button>
            <button onClick={() => showConversion("ºF to ºC")}>ºF to ºC</button>
            <button onClick={() => showConversion("ºF to K")}>ºF to K</button>
            <button onClick={() => showConversion("K to ºC")}>K to ºC</button>
            <button onClick={() => showConversion("K to ºF")}>K to ºF</button>
          </div>
        )}
        {show === 2 && (
          <div className="ejConverter__divOptions p-3">
            <button onClick={() => showConversion("h to min")}>h to min</button>
            <button onClick={() => showConversion("h to s")}>h to s</button>
            <button onClick={() => showConversion("min to h")}>min to h</button>
            <button onClick={() => showConversion("min to s")}>min to s</button>
            <button onClick={() => showConversion("s to h")}>s to h</button>
            <button onClick={() => showConversion("s to min")}>s to min</button>
          </div>
        )}
        {show === 3 && <div className="ejConverter__divOptions p-3">
          <button onClick={()=> showConversion("atm to bar")}>atm to bar</button>
          <button onClick={()=> showConversion("atm to Pa")}>atm to Pa</button>
          <button onClick={()=> showConversion("bar to atm")}>bar to atm</button>
          <button onClick={()=> showConversion("bar to Pa")}>bar to Pa</button>
          <button onClick={()=> showConversion("Pa to atm")}>Pa to atm</button>
          <button onClick={()=> showConversion("Pa to bar")}>Pa to bar</button>
          </div>}
        {show === 4 && <div className="ejConverter__divOptions p-3">
            <button onClick={()=> showConversion("km to yd")}>km to yd</button>
            <button onClick={()=> showConversion("km to mi")}>km to mi</button>
            <button onClick={()=> showConversion("yd to km")}>yd to km</button>
            <button onClick={()=> showConversion("yd to mi")}>km to mi</button>
            <button onClick={()=> showConversion("mi to km")}>mi to km</button>
            <button onClick={()=> showConversion("mi to yd")}>mi to yd</button>
          </div>}
        {show === 5 && <div className="ejConverter__divOptions p-3">
          <button onClick={()=> showConversion("kg to lb")}>kg to lb</button>
          <button onClick={()=> showConversion("kg to oz")}>kg to oz</button>
          <button onClick={()=> showConversion("lb to kg")}>lb to kg</button>
          <button onClick={()=> showConversion("lb to oz")}>lb to oz</button>
          <button onClick={()=> showConversion("oz to kg")}>oz to kg</button>
          <button onClick={()=> showConversion("oz to lb")}>oz to lb</button>
          </div>}
        <div className="ejConverter__divTypeConvertion p-3">
          <button onClick={transform}>Convert</button>
          <button onClick={clear}>C</button>
        </div>
        <div className="p-3">
          <h4>=</h4>
          <h3>{result}</h3>
        </div>
      </article>
    </section>
  );
};
