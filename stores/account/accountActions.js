import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { LOGIN, LOGOUT, FILTER } from "../../constants/url";
import utils from "../../utils/Utils.js";
import { LOGIN_SUCCESS, LOGIN_BEGIN } from "../../constants/types";
import { useSelector } from "react-redux";

const {
  apiDelete,
  apiPost,
  apiGet,
  apiPut,
  getHeaders,

  loginSuccess,
  loginBegin,
  loginFailure,
} = utils;

function* register(data) {
  console.log("USER:");
  try {
    const response = yield call(apiPost(LOGIN, data));
    console.log("GENERATOR:", response);
    const users = yield response.json();
    return users;
    // yield put(loginSuccess(users));
  } catch (error) {
    return error;
  }
}

function* registerSaga() {
  try {
    yield takeEvery(LOGIN_BEGIN);
    yield takeEvery(LOGIN_SUCCESS, register);
  } catch (error) {
    return error;
  }
}

export default registerSaga;
