import React, { useState, useEffect } from "react";
import MapComp from "./MapComp";
import './dashboard.scss';

export default function MapCenterMark(geodata) {
    let lat=0;
    let lon=0;
    let geopositionArr = Object.keys(geodata).map((key) => [geodata[key]]);
    let geoposition = geopositionArr[0][0];
    if(geoposition && geoposition.length > 0) {
        const newCoords = geoposition[0].split(",");
        lat = parseFloat(newCoords[0]);
        lon = parseFloat(newCoords[1]);
    }
    else {
        geoposition = ['0,0']
    }


    const [coords, setCoords] = useState([lat, lon]);

    const handleChangeList = (e) => {
        const target = e.target.outerText;
        const newCoords = target.split(",");
        const lat = parseFloat(newCoords[0]);
        const lon = parseFloat(newCoords[1]);
        setCoords([lat, lon]);
    };

    useEffect(() => {
        console.log(coords);
    }, [coords]);

        return (
            <div className="row">
                <div className="col-md mb-8 db_map-addr">
                    {geoposition.map((item) => {
                        return (
                            <li onClick={handleChangeList}>{item}</li>
                        )
                    })}
                </div>
                <div className="col-md mb-2 db_map">
                    <MapComp coords={coords}/>
                </div>
            </div>
        );



}
