import { combineReducers } from 'redux';
import { authReducer } from "./Auth/redusers";
import { registrationReducer } from "./Registration/redusers";
import { stationReducer } from './Station/redusers';
import { scooterReducer } from './Scooter/redusers';
import { dashboardReducer } from './Dashboard/redusers';

export default combineReducers({
    auth: authReducer,
    registration: registrationReducer,
    station: stationReducer,
    scooter: scooterReducer,
    dashboard: dashboardReducer,
});

