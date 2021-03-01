import React from 'react';
import '../assets/estilos/Carousel.css';

const Carousel = ({ children }) => (
  <section className="carousel">
    <div className="carousel__container">
      {children}
    </div>
  </section>
);

export default Carousel;