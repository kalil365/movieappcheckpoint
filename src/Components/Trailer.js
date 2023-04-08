import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { movies } from '../Data/Movies';
import { Button } from 'react-bootstrap';


function Trailer() {
    const { id } = useParams();
    const movie = movies.find((movie) => movie.id === Number(id))
    const navigate = useNavigate();
    return (
        <div><iframe width="560"
            height="315"
            src={movie.frameUrl}
            title="YouTube video player" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
            <div>
                <h1>{movie.title}</h1>
                <h3 style={{ textAlign: 'center' }}>{movie.description}</h3>
                <Button variant='info' onClick={() => navigate(-1)} >Back</Button>
            </div>
        </div>
    )
}

export default Trailer