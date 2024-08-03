import axios from "axios";
const BASE_URL = "http://localhost:5000"

console.log("token",BASE_URL);
const getToken = () => {
  return window.localStorage.getItem("userToken") || "";
};
export const ApiRequest = async (config) => {
  const token = getToken();
  
  const headers = {
    Authorization: `Bearer ${token}`,
    "Content-Type": "application/json",
  };
  const newConfig = {
    baseURL: BASE_URL,
    headers,
    ...config,
  };
  return axios(newConfig)
    .then((res) => {
      return res;
    })
    .catch((error) => {
      throw error;
    });
};
