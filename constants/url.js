export const API_BASE_URL = "https://musical-osprey-54.hasura.app/api/rest";
export const getApiUrl = (endpoint) => API_BASE_URL + endpoint;

export const LOGIN = getApiUrl("/registerUser");

const urlData = {
  ///Account
  LOGIN,
};

export default urlData;
