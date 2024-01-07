import React from 'react'
import {Card } from 'react-bootstrap'

export const MiniCard = ({elem, setInfoFicha}) => {
  return (
    <Card style={{ width: '8rem', height: '12rem' }}
    onClick={()=>setInfoFicha(elem)}>
    <Card.Img variant="top" src={elem?.image} />
    <Card.Body>
      <Card.Text>{elem.name} </Card.Text>
    </Card.Body>
  </Card>
  )
}
