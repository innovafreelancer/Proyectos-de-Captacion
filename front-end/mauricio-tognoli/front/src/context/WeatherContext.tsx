'use client'
import { createContext, useContext, useState, useEffect } from 'react';
import { WeatherData } from '@/Interfaces/weather';
import { ForecastData } from '@/Interfaces/forecast';
import { getWeather, getForecast } from '@/api/Wather';

type WeatherContextType = {
  city: string;
  setCity: (city: string) => void;
  weatherData: WeatherData | null;
  forecastData: ForecastData | null;
  unit: 'metric' | 'imperial';
  setUnit: (unit: 'metric' | 'imperial') => void;
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  language: string;
  setLanguage: (lang: string) => void;
};

const WeatherContext = createContext<WeatherContextType>({} as WeatherContextType);

export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [city, setCity] = useState('Buenos Aires');
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [language, setLanguage] = useState('es');

  useEffect(() => {
  const fetchData = async () => {
    try {
      const weather = await getWeather(city, unit);
      const forecast = await getForecast(city, unit);
      console.log("Weather Data:", weather);
      console.log("Forecast Data:", forecast);
      setWeatherData(weather);
      setForecastData(forecast);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
}, [city, unit]);

  return (
    <WeatherContext.Provider value={{ city, setCity, weatherData, forecastData, unit, setUnit, theme, setTheme, language, setLanguage }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);