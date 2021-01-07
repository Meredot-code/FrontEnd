import {STATION_FETCH_DATA, SET_FILTERED_STATION} from "./actions";
import lodashClonedeep from "lodash.clonedeep";

let data = onGetStation;

const defaultState = {
    station: [],
    stations: [{
        data
    }
    ],
    filteredstation: []
};

export const stationReducer = (state = defaultState, action) => {
    switch(action.type) {
        case STATION_FETCH_DATA:
            return {
                ...state,
                station: action.payload
            };
        case  SET_FILTERED_STATION:
            return {
                ...state,
                filteredstation: action.payload
            }
    }

    return state;
}

function onGetStation() {
    fetch('http://localhost:5000/api/station/all')
        .then(response => {
            if (!response.ok) {
                console.log('error');
            }
            return response.json();
        })
        .then((data) => {
            if(data.length > 0) {
                return data;
            }
        })
        .then( setTimeout(this.onGetStation, 1000))
}