import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CardMovie({movie}) {
  return (
    <div>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={movie.posterUrl} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>
            {movie.description}
          </Card.Text>
          <Card.Text>
            {movie.rate}
          </Card.Text>
          <Link to ={`/trailer/${movie.id }`}>
          <Button variant="primary">Watch trailer</Button>
          </Link>
        </Card.Body>
      </Card></div>
  )
}

export default CardMovie