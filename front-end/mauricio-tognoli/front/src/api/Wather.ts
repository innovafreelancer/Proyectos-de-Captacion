import axios from "axios";

const API_KEY = "91679ed48516303bcd3330304c2a9d97";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

export const getWeather = async (city: string, unit: 'metric' | 'imperial') => {
  const response = await axios.get(`${BASE_URL}/weather`, {
    params: {
      q: city,
      units: unit,
      appid: API_KEY,
    },
  });
  return response.data;
};

export const getForecast = async (city: string, unit: 'metric' | 'imperial') => {
  const response = await axios.get(`${BASE_URL}/forecast`, {
    params: {
      q: city,
      units: unit,
      appid: API_KEY,
    },
  });
  return response.data;
};

// // Clima actual
// export const getCurrentWeather = async (
//   lat: number,
//   lon: number,
//   units = "metric"
// ): Promise<WeatherData> => {
//   const url = `${BASE_URL}/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;
//   const { data } = await axios.get<WeatherData>(url);
//   return data;
// };

// // Pronóstico por hora
// export const getHourlyForecast = async (
//   lat: number,
//   lon: number,
//   units = "metric"
// ): Promise<ForecastData> => {
//   const url = `${BASE_URL}/forecast?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`;
//   const { data } = await axios.get<ForecastData>(url);
//   return data;
// };

// // Pronóstico de 7 días (usaremos One Call API)
// export const getWeeklyForecast = async (
//   lat: number,
//   lon: number,
//   units = "metric"
// ) => {
//   const url = `${BASE_URL}/onecall?lat=${lat}&lon=${lon}&exclude=minutely,hourly&units=${units}&appid=${API_KEY}`;
//   const { data } = await axios.get(url);
//   return data;
// };

// export const fetchCities = async (query: string, lang: string = "es"): Promise<City[]> => {
//     try {
//       const response = await axios.get(
//         `${BASE_URL}/geo/1.0/direct?q=${query}&limit=5&appid=${API_KEY}&lang=${lang}`
//       );
//       return response.data.map((city: City) => ({
//         name: city.name,
//         country: city.country,
//         lat: city.lat,
//         lon: city.lon,
//       }));
//     } catch (error) {
//       console.error("Error fetching cities:", error);
//       return [];
//     }
//   };