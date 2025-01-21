import axios from "axios";

export const getForecastData = async (lat: number, lon: number) => {
  try {
    const forecast = await axios.get(
      `https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${lat}&lon=${lon}&cnt=7&appid=${
        import.meta.env.VITE_WEATHER_API_KEY
      }`
    );
    return forecast.data;
  } catch (error) {
    console.error("Error del API: ", error);
  }
};
