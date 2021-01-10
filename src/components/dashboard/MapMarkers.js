import React from "react";
import { Marker, Popup } from "react-leaflet";

import icon from "./constants";

export const MapMarkers = ({ mapPoints }) => {
    const markers = mapPoints.map((x, index) => {
        const { geometry: { coordinates } } = x;
        return (
            <Marker
                key={index}
                position={{ lat: coordinates[1], lng: coordinates[0] }}
                icon={icon}
            >
                <Popup>
                    <span>test</span>
                </Popup>
            </Marker>
        );
    });

    return markers;
};
