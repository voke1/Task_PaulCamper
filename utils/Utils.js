import axios from "axios";
import { Alert } from "react-native";
import { LOGIN_BEGIN, LOGIN_FAILURE, LOGIN_SUCCESS } from "../constants/types";
import { useSelector } from "react-redux";

export async function getHeaders() {
  try {
    return {};
  } catch (error) {
    Alert.alert("Error found in token");
  }
}
export const noInternet = () => ({
  type: types.NO_INTERNET,
  payload: { internetConnection: true },
});

export const clearState = () => ({
  type: CLEAR_REDUX_STATE,
  payload: {},
});

export const loginSuccess = () => ({
  type: LOGIN_SUCCESS,
  payload: {},
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

  // try {
  console.log(
    "ITS CALLED",
    "url:",
    endpoint,
    "data: ",
    data,
    "method: ",
    method,
    "headers",
    { headers }
  );

  try {
    const user = useSelector((state) => state.user);

    const result = await axios[method](endpoint, data, { headers });
    console.log("API RESULT: ", result);
    if (result) {
      const { data } = result;
      // console.log("first data check: ", data);
      return data;
      // console.log("another check on data: ", data);
    }
  } catch (err) {
    console.log("ERROR OCCURRED!", err.response);
  }
}

export function apiPost(endpoint, data, headers = {}) {
  // const data = useSelector((state)=>state.user)

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
