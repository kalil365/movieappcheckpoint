import React from 'react'
import { movies } from '../Data/Movies'
import CardMovie from './CardMovie'
import '../App.css';


function ListMovies() {
  return (
    <div className='listmovies'>
      {
        movies.map((movie) =>
          (<CardMovie movie={movie} key={movie.id} />))
      }

    </div>
  )
}

export default ListMovies