import {STATION_FETCH_DATA, SET_FILTERED_STATION} from "./actions";

const defaultState = {
    station: [ ],
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