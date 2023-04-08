import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar';
import ListMovies from './Components/ListMovies';
import Home from './Components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Trailer from './Components/Trailer';
import { useState } from 'react';

function App() {
  /* I should've use this in the hooks checkpoint : 
  const [movies , setMovies] = useState([{
    title: "Titanic",
    description:
      "Seventeen-year-old Rose hails from an aristocratic family and is set to be married. When she boards the Titanic.",
    posterUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhYjUIu2o5v5u3rfJpCq5Cz0Q9WK--XdYxai_N2d0ImohPiIOp",
    rate: 4,
  }, ...]) ; */
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/movies' element={<ListMovies />} />
          <Route path='/trailer/:id' element={<Trailer />} />

            </Routes>
          </div>
        </BrowserRouter>
        );
}

        export default App;
