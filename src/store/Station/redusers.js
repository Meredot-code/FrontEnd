import {STATION_FETCH_DATA, SET_FILTERED_STATION} from "./actions";

const defaultState = {
    station: [
        {id: 1, pow: 127, location: 'loc1' },
        {id: 2, pow: 100, location: 'loc2' }
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