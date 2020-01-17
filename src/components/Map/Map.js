import React from "react";
import './Map.css';

import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";

const Map = withScriptjs(withGoogleMap((props) => {
    return (
        <div className="map-main-container">
            <GoogleMap
                defaultZoom={8}
                defaultCenter={{ lat: 44.986656, lng: -93.258133}}
                zoom={10}
            >
                <Marker position={{ lat: props.lat, lng: props.lng }} />}
            </GoogleMap>
        </div>
    );
}));

export default Map;