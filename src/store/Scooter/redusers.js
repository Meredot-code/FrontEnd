import {SCOOTER_FETCH_DATA, SET_FILTERED_SCOOTER} from "./actions";

const defaultState = {
    scooter: [],
    filteredscooter: []
};

export const scooterReducer = (state = defaultState, action) => {
    switch(action.type) {
        case SCOOTER_FETCH_DATA:
            return {
                ...state,
                scooter: action.payload
            };
        case  SET_FILTERED_SCOOTER:
            return {
                ...state,
                filteredscooter: action.payload
            }
    }

    return state;
}