import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import React, { useMemo } from "react";
import "../styles/App.css";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
    id : "93eba23fb9a0dcc5"
  });
  const center = useMemo(() => ({ lat: 33.64491333779565, lng: 72.99209107579742 }), []);

  return (
    <div className="map-main">
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={15}
          mapTypeId="hybrid"
        
        >
          <Marker position={center} />
        </GoogleMap>
      )}
    </div>
  );
};

export default Map;