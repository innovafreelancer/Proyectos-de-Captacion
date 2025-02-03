import axios from "axios";
const API_KEY = "91679ed48516303bcd3330304c2a9d97";

export const getCitySuggestions = async (query: string) => {
  const response = await axios.get(
    "http://api.openweathermap.org/geo/1.0/direct",
    {
      params: {
        q: query,
        limit: 5,
        appid: API_KEY,
      },
    }
  );
  return response.data.map(
    (city: { name: unknown; country: unknown }) =>
      `${city.name}, ${city.country}`
  );
};
