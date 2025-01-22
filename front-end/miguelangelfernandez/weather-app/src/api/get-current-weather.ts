import axios from "axios";
import { CurrentWeather } from "../interfaces/current-weather";

export const getCurrentWeather = async (lat: number, lon: number): Promise<CurrentWeather> => {

  const currentWeather = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${
      import.meta.env.VITE_WEATHER_API_KEY
    }`
  );

  return currentWeather.data;
};
