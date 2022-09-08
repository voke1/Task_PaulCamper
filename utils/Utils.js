import axios from "axios";
import { Alert } from "react-native";
import { LOGIN_BEGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "../constants/types";

export async function getHeaders() {
  try {
    return {};
  } catch (error) {
    Alert.alert("Error found in token");
  }
}

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: {data},
});

export const loginBegin = (user) => ({
  type: LOGIN_BEGIN,
  payload: { user },
});

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: { error },
});

export async function apiReq(
  endpoint,
  data,
  method,
  headers,

  requestOptions = {}
) {
  const getTokenHeader = await getHeaders();

  try {

    const result = await axios[method](endpoint, data, { headers });
    if (result) {
      return result.status;
    }
  } catch (err) {
    return err
  }
}

export function apiPost(endpoint, data, headers = {}) {

  return apiReq(endpoint, data, "post", headers);
}

export function apiDelete(endPoint, headers = {}) {
  return apiReq(endPoint, "delete", headers);
}

const utils = {
  apiDelete,
  apiPost,
  getHeaders,

  loginSuccess,
  loginBegin,
  loginFailure,
};

export default utils;
