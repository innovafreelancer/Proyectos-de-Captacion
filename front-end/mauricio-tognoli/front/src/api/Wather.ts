import axios from "axios";
import { WeatherData, ForecastData } from "@/Interfaces/Interfaces";

const API_KEY = "91679ed48516303bcd3330304c2a9d97";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

// Clima actual
export const getCurrentWeather = async (
  lat: number,
  lon: number,
  units = "metric"
): Promise<WeatherData> => {
  const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;
  const { data } = await axios.get<WeatherData>(url);
  return data;
};

// Pronóstico por hora
export const getHourlyForecast = async (
  lat: number,
  lon: number,
  units = "metric"
): Promise<ForecastData> => {
  const url = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;
  const { data } = await axios.get<ForecastData>(url);
  return data;
};

// Pronóstico de 7 días (usaremos One Call API)
export const getWeeklyForecast = async (
  lat: number,
  lon: number,
  units = "metric"
) => {
  const url = `${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=${units}&appid=${API_KEY}`;
  const { data } = await axios.get(url);
  return data;
};
