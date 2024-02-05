import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export const CardOneProject = ({elem}) => {
  const navigate = useNavigate()
  return (
    <Card style={{ width: "18rem" }} className="text-center mx-2 cardOneEx">
    <Card.Img variant="top" src={`/assets/practice/${elem.image}`} />
    <Card.Body>
      <Card.Title>{elem.name}</Card.Title>
      <Button variant="dark" onClick={() => navigate(`/oneProject/${elem.id}`)}>
        Know more
      </Button>
    </Card.Body>
  </Card>
  )
}
