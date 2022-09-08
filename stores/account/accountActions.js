import { call, takeEvery } from "redux-saga/effects";
import { LOGIN } from "../../constants/url";
import utils from "../../utils/Utils.js";
import { LOGIN_SUCCESS, LOGIN_BEGIN } from "../../constants/types";

const { apiDelete, apiPost } = utils;

function* register(data) {
  try {
    const response = yield call(apiPost(LOGIN, data?.payload?.data));
    console.log("GENERATOR:", response);
  } catch (error) {
    return error;
  }
}

function* registerSaga() {
  try {
    yield takeEvery(LOGIN_SUCCESS, register);
    yield takeEvery(LOGIN_BEGIN);
  } catch (error) {
    return error;
  }
}

export default registerSaga;
