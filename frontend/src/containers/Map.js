import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";

const Map = () => {

  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    axios.get('/api/animals/list')
      .then(response => {
        setAnimals(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY
  });
  
  const center = useMemo(() => ({ lat: 33.64491333779565, lng: 72.99209107579742 }), []);

  return (
    <div className="map-main">
      {!isLoaded ? (
        <h1 className="center">Welcome to JanWhere</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={15}
          options={{mapId: process.env.REACT_APP_GOOGLE_MAP_ID}}
        >
         {animals.map(animal => (
        <Marker key={animal._id} position={{ lat: animal.location.latitude, lng: animal.location.longitude }} />
      ))}
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;