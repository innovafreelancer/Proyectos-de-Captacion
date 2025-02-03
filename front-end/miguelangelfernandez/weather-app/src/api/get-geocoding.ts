import axios from "axios";

export const getGeocodingData = async (
  countryCode: string,
  city: string,
  limit: number = 5
) => {
  const geocoding = await axios.get(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city.toLocaleLowerCase()},${countryCode.toUpperCase()}&limit=${limit}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`
  );

  return geocoding.data;
};