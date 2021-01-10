import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import { MapMarkers } from "./MapMarkers";

export default function MapMark() {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://api-adresse.data.gouv.fr/search/?q=paris&type=street")
            .then((response) => response.json())
            .then((response) => {
                // console.log(response);
                setData(response.features);
            });
    }, []);

    return (
        <MapContainer
            center={[51.505, 31.3]}
            zoom={12}
            scrollWheelZoom={true}
            style={{ height: "300px" }}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/*<MapMarkers mapPoints={data} />*/}
        </MapContainer>
    );
}
