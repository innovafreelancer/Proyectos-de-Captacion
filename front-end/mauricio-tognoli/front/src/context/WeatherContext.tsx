"use client";
import { createContext, useContext, useState, useEffect } from "react";
import { WeatherData } from "@/Interfaces/weather";
import { ForecastData } from "@/Interfaces/forecast";
import { getWeather, getForecast } from "@/api/Wather";

type WeatherContextType = {
  city: string;
  setCity: (city: string) => void;
  weatherData: WeatherData | null;
  forecastData: ForecastData | null;
  unit: "metric" | "imperial";
  setUnit: (unit: "metric" | "imperial") => void;
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
  language: string;
  setLanguage: (lang: string) => void;
};

const WeatherContext = createContext<WeatherContextType>(
  {} as WeatherContextType
);

export const WeatherProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [city, setCity] = useState("Buenos Aires");
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecastData, setForecastData] = useState<ForecastData | null>(null);
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [language, setLanguage] = useState("es");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const weather = await getWeather(city, unit);
        const forecast = await getForecast(city, unit);
        setWeatherData(weather);
        setForecastData(forecast);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [city, unit]);

  // Cargar la ciudad desde el localStorage
  useEffect(() => {
    const savedCity = localStorage.getItem("city") || "Buenos Aires";
    setCity(savedCity);
  }, []);

  // Guardar la ciudad en el localStorage
  useEffect(() => {
    localStorage.setItem("city", city);
  }, [city]);

  // Cargar tema desde el LocalStorage
  useEffect(() => {
    const savedTheme =
      (localStorage.getItem("theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
  }, []);

  // Guardar la tema en el LocalStorage
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Cargar unidades desde el LocalStorage
  useEffect(() => {
    const savedUnit =
      (localStorage.getItem("unit") as "metric" | "imperial") || "metric";
    setUnit(savedUnit);
  }, []);

  // Guardar las unidades en el localStorage
  useEffect(() => {
    localStorage.setItem("unit", unit);
  }, [unit]);

  // Cargar el idioma desde el localStorage
  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "es";
    setLanguage(savedLanguage);
  }, []);

  // Guardar el idioma en el localStorage
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  return (
    <WeatherContext.Provider
      value={{
        city,
        setCity,
        weatherData,
        forecastData,
        unit,
        setUnit,
        theme,
        setTheme,
        language,
        setLanguage,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
