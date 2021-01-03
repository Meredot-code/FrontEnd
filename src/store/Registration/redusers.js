import {REGISTRATION_CHANGE_EMAIL,
        REGISTRATION_CHANGE_PASSWORD,
        REGISTRATION_CHANGE_REPEAT_PASSWORD
} from "../Registration/actions";

const defaultState = {
    email: '',
    password: '',
    repeatpassword: ''
};

export const registrationReducer = (state = defaultState, action) => {
    switch(action.type) {
        case REGISTRATION_CHANGE_EMAIL:
            return {
                ...state,
                email: action.payload
            };

        case REGISTRATION_CHANGE_PASSWORD:
            return {
                ...state,
                email: action.payload
            }
        case REGISTRATION_CHANGE_REPEAT_PASSWORD:
            return {
                ...state,
                email: action.payload
            }
    }
    return state;
}