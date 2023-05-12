import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function AnimalPost(props) {

    const [animal, setAnimal] = useState({});
    const { id } = useParams();

    useEffect(() => {
        console.log(id);
        axios.get(`/api/animals/${id}`)
            .then(res => {
                setAnimal(res.data);
            })
            .catch(err => {
                console.log(err);
            })
    }, []);


  return (
    <div>
      <h1>Animal Details</h1>
      <img src={animal.image} alt="animal" />
        <p>Name: {animal.name}</p>
        <p>Region: {animal.region}</p>
        <p>Population: {animal.population}</p>
        <p>Category: {animal.category}</p>
        <p>Details: {animal.description}</p>

    </div>
  );
}

export default AnimalPost;
