import React, { createContext, useState, useContext } from "react";
import { getCurrentWeather, getHourlyForecast, getWeeklyForecast } from "@/api/Wather";
import { getUserLocation } from "@/api/Location";
import { WeatherData, ForecastData, WeatherContextProps } from "@/Interfaces/Interfaces";


const WeatherContext = createContext<WeatherContextProps | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [hourlyForecast, setHourlyForecast] = useState<ForecastData | null>(null);
  const [weeklyForecast, setWeeklyForecast] = useState<unknown | null>(null);
  const [units, setUnits] = useState<"metric" | "imperial">("metric");

  const changeUnits = (newUnits: "metric" | "imperial") => {
    setUnits(newUnits);
  };

  const fetchWeather = async () => {
    try {
      const location = await getUserLocation();
      const current = await getCurrentWeather(location.latitude, location.longitude, units);
      const hourly = await getHourlyForecast(location.latitude, location.longitude, units);
      const weekly = await getWeeklyForecast(location.latitude, location.longitude, units);

      setWeatherData(current);
      setHourlyForecast(hourly);
      setWeeklyForecast(weekly);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  return (
    <WeatherContext.Provider
      value={{ weatherData, hourlyForecast, weeklyForecast, units, changeUnits, fetchWeather }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error("useWeather debe ser usado dentro de WeatherProvider");
  }
  return context;
};
