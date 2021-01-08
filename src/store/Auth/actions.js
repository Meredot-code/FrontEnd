export const AUTH_CHANGE_EMAIL = 'AUTH_CHANGE_EMAIL';
export const AUTH_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD';
export const AUTH_SET_STATUS = 'AUTH_SET_STATUS';

export const setEmailText = email => ({
    type: AUTH_CHANGE_EMAIL,
    payload: email
});

export const setPasswordText = password => ({
    type: AUTH_CHANGE_PASSWORD,
    payload: password
});

export const setAuthenticate = isauth => ({
    type: AUTH_SET_STATUS,
    payload: isauth
});