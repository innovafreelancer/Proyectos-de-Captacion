import axios from "axios";

const API_KEY = "91679ed48516303bcd3330304c2a9d97";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeather = async (city: string, unit: "metric" | "imperial") => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      units: unit,
      appid: API_KEY,
    },
  });
  return response.data;
};

export const getForecast = async (
  city: string,
  unit: "metric" | "imperial"
) => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      units: unit,
      appid: API_KEY,
    },
  });
  return response.data;
};
