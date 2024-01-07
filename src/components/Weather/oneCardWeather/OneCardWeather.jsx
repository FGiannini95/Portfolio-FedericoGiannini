import React from 'react'
import { Card } from 'react-bootstrap';
import './onecardweather.scss'

export const OneCardWeather = ({elem}) => {

  console.log("Elem en la card", elem);
  return (
    <Card style={{ width: '18rem' }} className='onecardweather text-center mx-2'>
    <Card.Body>
      <Card.Title> </Card.Title>
      <Card.Text>
      Day: {elem.dt_txt.split(" ")[0]}
      </Card.Text>
      <Card.Text>
      Temp: {elem.main.temp} ºC
      </Card.Text>
      <Card.Text>
      Humidity: {elem.main.humidity} %
      </Card.Text>
      <img src={`https://openweathermap.org/img/wn/${elem.weather[0].icon}.png`} alt="" />
    </Card.Body>
  </Card>
  )
}
