import {
  LOGIN,
  LOGOUT,
  UPDATE_USER,
  REQUEST_FACEBOOK_LOGIN,
  REQUEST_PHONE_NUMBER_LOGIN
} from "./types";

export const onLogin = () => ({
  type: LOGIN
});

export const onLogout = () => ({
  type: LOGOUT
});

export const updataUser = payload => ({
  type: UPDATE_USER,
  payload
});

// export const requestFacebooklogin = facebookEmail => ({
//   type: REQUEST_FACEBOOK_LOGIN,
//   facebookEmail
// });

// export const requestPhoneNumberlogin = phoneNumber => ({
//   type: REQUEST_PHONE_NUMBER_LOGIN,
//   phoneNumber
// });
