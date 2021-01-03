export const STATION_FETCH_DATA = 'STATION_FETCH_DATA';
export const SET_FILTERED_STATION = 'SET_FILTERED_STATION';

export const setStation = stations => ({
    type: STATION_FETCH_DATA,
    payload: stations
});

export const setFilteredStations = filteredstations => ({
    type: SET_FILTERED_STATION,
    payload: filteredstations
});