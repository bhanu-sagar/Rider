import { all, fork } from "redux-saga/effects";
import { takeEvery } from "redux-saga/effects";
import {
  REQUEST_FACEBOOK_LOGIN,
  REQUEST_PHONE_NUMBER_LOGIN
} from "../store/auth/types";
import * as Sagas from "../store/auth/sagas";

export default function* rootSaga() {
  // yield all([takeEvery(REQUEST_FACEBOOK_LOGIN, Sagas.loginFacebookUser)]);
  // yield all([
  //   takeEvery(REQUEST_PHONE_NUMBER_LOGIN, Sagas.loginWithPhoneNumber)
  // ]);
}
