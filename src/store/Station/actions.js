export const AUTH_CHANGE_EMAIL = 'AUTH_CHANGE_EMAIL';
export const AUTH_CHANGE_PASSWORD = 'AUTH_CHANGE_PASSWORD';

export const setEmailText = email => ({
    type: AUTH_CHANGE_EMAIL,
    payload: email
});

export const setPasswordText = password => ({
    type: AUTH_CHANGE_PASSWORD,
    payload: password
});