import React, { Component } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import "leaflet/dist/leaflet.css";
//https://react-leaflet.js.org/docs/example-popup-marker

export default class Map extends Component {
    render() {
        return(
            <MapContainer center={[51.505, 0.18]} zoom={15} scrollWheelZoom={false}>
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                {/*<Marker position={[0, 0.01]}>*/}
                {/*    <Popup>*/}
                {/*        A pretty CSS3 popup. <br /> Easily customizable.*/}
                {/*    </Popup>*/}
                {/*</Marker>*/}
            </MapContainer>

        )
    }
}