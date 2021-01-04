export const SCOOTER_FETCH_DATA = 'SCOOTER_FETCH_DATA';
export const SET_FILTERED_SCOOTER= 'SET_FILTERED_SCOOTER';

export const setScooter = scooter => ({
    type: SCOOTER_FETCH_DATA,
    payload: scooter
});

export const setFilteredScooter = filteredscooter => ({
    type: SET_FILTERED_SCOOTER,
    payload: filteredscooter
});