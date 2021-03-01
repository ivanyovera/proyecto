import React from 'react';
import '../assets/estilos/App.css';
import Header from '../componentes/Header.js';
import Search from '../componentes/Search.js';
import Categories from '../componentes/Categories.js'
import Carousel from '../componentes/Carousel';
import CarouselItem from '../componentes/CarouselItem';
import requests from '../requests'

const Principal = () => (
  <div className="App">
    <Header />
      <Search />
      <Categories title="Peliculas Recomendadas">
        <Carousel>
          {<CarouselItem fetchUrl={requests.fetchMovie} />}
        </Carousel>
      </Categories>
  </div>
);

export default Principal;