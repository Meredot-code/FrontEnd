import {STATION_FETCH_DATA, SET_FILTERED_STATION} from "./actions";

const defaultState = {
    station: [
        {
            "id_slots": [
                "3"
            ],
            "arr_slots": [
                {
                    "_id": "5fec1b0ab906c0168740d42f",
                    "slot_id": 3,
                    "scooter_id": 4,
                    "slot_status": 3,
                    "slot_power": 100,
                    "scooter_event": 11111
                }
            ],
            "_id": "5ff25d73679f3fde441174b1",
            "st_id": 1,
            "location": "London,Piccadilly,10",
            "picture": "pic2.png",
            "info": "-"
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