import React from 'react'
import ReactMapGL from "react-map-gl";
import getCenter from "geolib/es/getCenter";
import "mapbox-gl/dist/mapbox-gl.css";

const Map = ({ searchResult }) => {
    
    // Transforming the exixting objects into another formed object!
    const coordinates = searchResult.map((result) => ({
       longitude: result.long,
       latitude: result.lat,
    }))
    
    // The latitude and longitude of the center of locations coordinates
    const center = getCenter(coordinates)
    
    const [viewPort, setViewPort] = React.useState({
      width: "100%",
      height: "100%",
      latitude: center.latitude,
      longitude: center.longitude,
      zoom: 11,
    });

    return (
      <ReactMapGL
        mapStyle="mapbox://styles/abdulmaajith/ckslx864o92di17ocedtsb91a"
        mapboxApiAccessToken={process.env.mapbox_key}
        {...viewPort}
        onViewportChange={(nextViewPort) => setViewPort(nextViewPort)}
      >

      </ReactMapGL>
    );
}

export default Map
