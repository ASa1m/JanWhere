import { GoogleMap, Marker, useLoadScript, InfoBox, MarkerClusterer } from "@react-google-maps/api";
import React, { useEffect, useMemo, useState } from "react";
import axios from "axios";
import Icon from "../../src/map-marker.png";
import { useNavigate } from "react-router-dom";
import MapCard from "../components/layout/MapCard.js";

const Map = () => {
  const [activeAnimal, setActiveAnimal] = useState(null);
  const [animalsToShow, setAnimalsToShow] = useState([]);
  const [inputValue, setInputValue] = useState("");

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

  const handleSearch = (event) => {
    setInputValue(event.target.value);
    if (event.target.value === "") {
      setAnimalsToShow(animals);
      return;
    }
    setAnimalsToShow(animals.filter(animal => animal.name.toLowerCase().includes(event.target.value.toLowerCase())));
  };

  const handleClose = () => {
    setInputValue("");
    setAnimalsToShow(animals);
  };


  const [animals, setAnimals] = useState([]);
  const [posts, setPosts] = useState([]);
  const [postsToShow, setPostsToShow] = useState(posts);
  const [filterEnabled, setFilterEnabled] = useState(false);

  const handleFilterClick = (animalName) => {
    if (filterEnabled) {
      // If filter is already enabled, show all posts
      setPostsToShow(posts);
    } else {
      // If filter is not enabled, filter posts based on animal name
      const filtered = posts.filter(post => { return post.animal_name === animalName });
      setPostsToShow(filtered);
    }

    // Toggle the filter
    setFilterEnabled(!filterEnabled);
  };

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/api/animals/list`)
      .then(response => {
        setAnimals(response.data);
        setAnimalsToShow(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });

    axios.get(`${process.env.REACT_APP_API_URL}/api/posts/`)
      .then(response => {
        setPosts(response.data);
        setPostsToShow(response.data);
        console.log(response.data);
      }
      )
      .catch(error => {
        console.error(error);
      }
      );

  }, []);


  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY

  });

  const center = useMemo(() => ({ lat: 33.64491333779565, lng: 72.99209107579742 }), []);

  return (
    <div>
      <div className="map-main z-index-0">
        {!isLoaded ? (
          <h1 className="center text-white">Welcome to JanWhere</h1>
        ) : (
          <GoogleMap
            mapContainerClassName="map-container"
            center={center}
            zoom={15}
            options={{ mapId: process.env.REACT_APP_GOOGLE_MAP_ID, disableDefaultUI: true, zoomControl: true, styles: [{ "featureType": "poi", "stylers": [{ "visibility": "off" }] }] }}
          >
            <MarkerClusterer>
              {(clusterer) => (
                <div>
                  {postsToShow.map(animal => (
                    animal.location &&
                    <Marker key={animal._id} position={{ lat: parseFloat(animal.location.latitude), lng: parseFloat(animal.location.longitude) }} icon={{ "url": Icon, "scaledSize": new window.google.maps.Size(50, 50) }} onClick={() => handleMarkerClick(animal)} onMouseOver={() => handleMarkerMouseOver(animal)} onMouseOut={handleMarkerMouseOut} clusterer={clusterer}>
                      {activeAnimal === animal && (
                        <InfoBox position={{ lat: parseFloat(animal.location.latitude), lng: parseFloat(animal.location.longitude) }} options={{ pixelOffset: new window.google.maps.Size(-80, 0), closeBoxURL: '', enableEventPropagation: true, boxStyle: { width: "160px", height: "100px", overflow: "visible" } }}>
                          <div class="card">
                            {animal.images && animal.images.length > 0 &&
                              <img src={animal.images[0]} alt="Avatar" style={{ width: "100%" }} />
                            }
                            <div class="d-flex flex-column justify-content-between p-3">
                              <div className="p-3">
                                <h6><b>{animal.animal_name}</b></h6>
                              </div>
                              <div className="p-3">
                                <p className="truncate">Posted by {animal.user_name}</p>
                              </div>
                            </div>
                          </div>
                        </InfoBox>
                      )}
                    </Marker>
                  ))
                  }
                </div>
              )}
            </MarkerClusterer>
          </GoogleMap>
        )}
      </div>
      <div className="map-card-list overflow-auto">
        <nav>
          <div class="nav-wrapper">
            <div class="input-field">
              <input id="search" type="search" value={inputValue} onChange={handleSearch} className="black text-white" placeholder="Search for an animal" />
              <label class="label-icon" for="search">
                <i class="material-icons black text-white">search</i>
                </label>
              <i class="material-icons text-white" onClick={handleClose}
              >close</i>
            </div>
          </div>
        </nav>
        {animalsToShow.map(animal => (
          <MapCard key={animal._id} id={animal._id} name={animal.name} image={animal.image} clickhandle={() => handleFilterClick(animal.name)} />
        ))}
      </div>
    </div>
  );
};

export default Map;