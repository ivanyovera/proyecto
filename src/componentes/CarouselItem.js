import React, { useState, useEffect } from 'react';
import '../assets/estilos/CarouselItem.css';
import axios from '../axios';

function CarouselItem({ fetchUrl }) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {  
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.Search);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    return(
      <div>
        {movies.map(movie => (
          <div className="carousel-item">
            <img key={movie.imdbID} className="carousel-item__img" src={movie.Poster} alt={movie.Title} />
          </div>
        ))}
      </div>
    )
}

export default CarouselItem;