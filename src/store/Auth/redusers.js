import {AUTH_CHANGE_EMAIL, AUTH_CHANGE_PASSWORD} from "./actions";

const defaultState = {
    email: '',
    password: ''
};

export const authReducer = (state = defaultState, action) => {
    switch(action.type) {
        case AUTH_CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            };

        case AUTH_CHANGE_PASSWORD:
            return {
                ...state,
                password: action.payload
            }
    }

    return state;
}