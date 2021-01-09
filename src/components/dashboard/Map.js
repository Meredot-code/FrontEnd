import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import LeafletControlGeocoder from "./LeafletControlGeocoder";

export default function MapsContainer() {
    const position = [51.505, 31.3];

    return (
        <MapContainer center={position} zoom={13} style={{ height: "400px" }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <LeafletControlGeocoder />
        </MapContainer>
    );
}