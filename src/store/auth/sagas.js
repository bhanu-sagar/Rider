// import * as apiCaller from "../../config/api";
// import { call, put } from "redux-saga/effects";
// import { handlers } from "../../helpers";
// import { AsyncStorage } from "react-native";
// import { strings } from "../../../locale/i18n";

// import {
//   REQUEST_FACEBOOK_LOGIN,
//   REQUEST_FACEBOOK_LOGIN_FAILURE,
//   REQUEST_PHONE_NUMBER_LOGIN,
//   REQUEST_PHONE_NUMBER_LOGIN_FAILURE
// } from "../../store/auth/types";

// const LOGIN_API = "https://comingoo-api.herokuapp.com/api/riders/loginRider";

// export function* loginFacebookUser(action) {
//   try {
//     const data = { username: action.facebookEmail };
//     const response = yield call(
//       apiCaller.signinRequest,
//       LOGIN_API,
//       "POST",
//       data
//     );
//     if (response.auth_token) {
//       AsyncStorage.setItem("COMINGOO_TOKEN", response.auth_token);
//       handlers.showToast(strings("login.logged_in_succesfully"));
//       yield put({ type: REQUEST_FACEBOOK_LOGIN, payload: response });
//     }
//   } catch (error) {
//     handlers.showToast(strings("login.error_retry_login"), "danger");
//     yield put({
//       type: REQUEST_FACEBOOK_LOGIN_FAILURE,
//       message: response.message
//     });
//   }
// }

// export function* loginWithPhoneNumber(action) {
//     console.log("JJJJ",action);
//   try {
//     const data = { username: action.phoneNumber };
//     const response = yield call(
//       apiCaller.signinRequest,
//       LOGIN_API,
//       "POST",
//       data
//     );
//     console.log("HEYYYYYYYY",response);
//     if (response.auth_token) {
//       AsyncStorage.setItem("COMINGOO_TOKEN", response.auth_token);
//       handlers.showToast(strings("login.logged_in_succesfully"));
//       yield put({ type: REQUEST_PHONE_NUMBER_LOGIN, payload: response });
//     }
//   } catch (error) {
//     handlers.showToast(strings("login.error_retry_login"), "danger");
//     yield put({
//       type: REQUEST_PHONE_NUMBER_LOGIN_FAILURE,
//       message: response.message
//     });
//   }
// }
