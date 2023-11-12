import axios from "axios";

export const API_URL = "http://172.20.10.5:8080";

export const getRestaurants = async () => {
  let path = API_URL + "/getRestaurantsData";
  let response = await axios.get(path);
  if(response.status === 200) {
    return response.data;
  }
  return null;
};
