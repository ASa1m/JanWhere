import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Card from "../components/layout/DiscoverCard";
import FilterBar from "../components/layout/FilterBar";
import axios from 'axios';

function Discover() {

    const [animals, setAnimals] = useState([]);
    const [animalsToShow, setAnimalsToShow] = useState([]);
    const [name] = useState(useParams().name);

    const filterAnimals = (filterType, eventKey) => {
        if (eventKey === 'all') {
            setAnimalsToShow(animals);
        }
        else {
            if (isNaN(eventKey)) {
                setAnimalsToShow(animals.filter(animal => animal[filterType].toLowerCase().includes(eventKey.toLowerCase())));
            }
            else {
                setAnimalsToShow(animals.filter(animal => animal[filterType] === eventKey));
            }
        }
    };


    useEffect(() => {
        axios.get('/api/animals/list')
            .then(response => {
                setAnimals(response.data);
                if (name === undefined) {
                    setAnimalsToShow(response.data);
                }
                else {
                    setAnimalsToShow(response.data.filter(animal => animal.name.toLowerCase().includes(name.toLowerCase())));
                }
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const fetchData = () => {
        if (animalsToShow.length === 0) {
            return <div className="center text-white">No animals found</div>;
        }
        return animalsToShow.map((animal, index) => {
            return <Card obj={animal} key={index} />;
        });
    };

    return (
        <div className="content" style={{ fontFamily: "monospace" }}>
            <h3 className="center text-white">Discover the world of animals</h3>
            <div className="center text-white">
                <FilterBar obj={animals} filterAnimals={filterAnimals} />
            </div>
            <div className="d-flex flex-wrap justify-content-center">
                {fetchData()}
            </div>
        </div>);
}

export default Discover;
