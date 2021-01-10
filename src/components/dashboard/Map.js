import React from "react";
import {Popup, Marker, MapContainer, TileLayer, useMap} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

import LeafletControlGeocoder from "./LeafletControlGeocoder";
import icon from "./constants";
import {Circle} from "google-maps-react";

const m =[[51.505, 31.3]];
// const map = useMap();

export default function MapsContainer() {
    const position = [51.505, 31.3];

    return (
        <MapContainer center={position} zoom={13} style={{ height: "400px" }}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Circle center={[51.5, 31.3]} radius={200} pane="my-existing-pane" />

            <LeafletControlGeocoder />
        </MapContainer>
    );
}