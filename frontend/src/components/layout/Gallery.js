import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import axios from 'axios';

function Gallery() {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    // Fetch animal data from the backend API 
    axios.get('/api/animals/list')
    .then(response => {
        setAnimals(response.data);
    })
    .catch(error => {
        console.error(error);
    });
  }, []);


  return (
    <Carousel>
      {animals.map((animal) => (
    <Carousel.Item key={animal._id}>
      <img
        className="d-block w-100"
        src={animal.image ? animal.image : "holder.js/800x400?text=First slide&bg=373940"}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>{animal.name}</h3>
        <p>{animal.description}</p>
      </Carousel.Caption>
    </Carousel.Item>

      ))}

  </Carousel>
  );
}

export default Gallery;


