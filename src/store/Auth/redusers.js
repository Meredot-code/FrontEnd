import {AUTH_CHANGE_EMAIL, AUTH_CHANGE_PASSWORD, AUTH_SET_STATUS} from "./actions";

const defaultState = {
    email: '',
    password: '',
    isauth: false
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
            };
        case AUTH_SET_STATUS:
            console.log("action.payload-"+action.payload);
            return {
                ...state,
                isauth: action.payload
            }
    }

    return state;
}