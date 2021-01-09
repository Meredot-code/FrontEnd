import { useEffect } from "react";
import { useMap } from "react-leaflet";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js";
import Lf from "leaflet";

import icon from "./constants";

export default function LeafletControlGeocoder() {
    const map = useMap();

    useEffect(() => {
        let geocoder = Lf.Control.Geocoder.nominatim();
        if (typeof URLSearchParams !== "undefined" && window.location.search) {
            let params = new URLSearchParams(window.location.search);
            let geocoderString = params.get("geocoder");
            if (geocoderString && Lf.Control.Geocoder[geocoderString]) {
                geocoder = Lf.Control.Geocoder[geocoderString]();
            } else if (geocoderString) {
                console.warn("Unsupported geocoder", geocoderString);
            }
        }

        Lf.Control.geocoder({
            query: "",
            placeholder: "Search here...",
            defaultMarkGeocode: false,
            geocoder
        })
            .on("markgeocode", function (e) {
                let latlng = e.geocode.center;
                Lf.marker(latlng, { icon })
                    .addTo(map)
                    .bindPopup(e.geocode.name)
                    .openPopup();
                map.fitBounds(e.geocode.bbox);
            })
            .addTo(map);
    }, []);

    return null;
}
