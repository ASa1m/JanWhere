import { GoogleMap, Marker, useLoadScript, InfoBox, MarkerClusterer } from "@react-google-maps/api";
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Icon from "../../src/map-marker.png";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);
  const navigate = useNavigate();

  const handleMarkerClick = (marker) => {
    setActiveAnimal(marker);
    navigate(`/post/${marker._id}`);
  };

  const handleMarkerMouseOver = (marker) => {
    setActiveAnimal(marker);
  };

  const handleMarkerMouseOut = () => {
    setActiveAnimal(null);
  };
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
        <h1 className="center text-white">Welcome to JanWhere</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={15}
          options={{ mapId: process.env.REACT_APP_GOOGLE_MAP_ID , disableDefaultUI: true, zoomControl: true, styles: [{ "featureType": "poi", "stylers": [{ "visibility": "off" }] }] }}
        >
              {animals.map(animal => (
                <Marker key={animal._id} position={{ lat: animal.location.latitude, lng: animal.location.longitude }} icon={{ "url": Icon, "scaledSize": new window.google.maps.Size(50, 50) }} onClick={() => handleMarkerClick(animal)} onMouseOver={() => handleMarkerMouseOver(animal)} onMouseOut={handleMarkerMouseOut}>
                  {activeAnimal === animal && (
                    <InfoBox position={{ lat: animal.location.latitude, lng: animal.location.longitude }} options={{ pixelOffset: new window.google.maps.Size(-80, 0), closeBoxURL: '', enableEventPropagation: true, boxStyle: { width: "160px", height: "100px", overflow: "visible" } }}>
                      <div class="card">
                        <img src={animal.image} alt="Avatar" style={{ width: "100%" }} />
                        <div class="container p-3">
                          <h6><b>{animal.name}</b></h6>
                          <p className="truncate">{animal.description}</p>
                        </div>
                      </div>
                    </InfoBox>
                  )}
                </Marker>
              ))
            }
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;