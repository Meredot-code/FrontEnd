import {DASHBOARD_STATION_FETCH_DATA} from "./actions";

const defaultState = {
    dashboard: []
};

export const dashboardReducer = (state = defaultState, action) => {
    switch(action.type) {
        case DASHBOARD_STATION_FETCH_DATA:
            return {
                ...state,
                dashboard: action.payload
            };
    }

    return state;
}