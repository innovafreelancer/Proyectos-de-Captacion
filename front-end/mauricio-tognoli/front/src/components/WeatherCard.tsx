"use client";
import { useWeather } from "@/context/WeatherContext";
import { formatLocalTime } from "@/utils/timeUtils";
import { translations } from "@/utils/translations";
import Image from "next/image";
import { FadeLoader } from "react-spinners";

const WeatherCard = () => {
  const { weatherData, unit, language } = useWeather();
  const t = translations[language as keyof typeof translations];

  if (!weatherData) return <div className="flex justify-center items-center h-screen"><FadeLoader color="#60a5fa" /></div>;

  return (
    <div className="bg-blue-400 dark:bg-dark-secondary p-4 rounded-lg shadow-xl dark:shadow-gray-700/50">
      <h2 className="text-xl font-bold">{weatherData.name}</h2>
      <p>{formatLocalTime(weatherData.dt, weatherData.timezone)}</p>
      <div className="flex items-center">
        <Image
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].description}
          width={64}
          height={64}
        />
        <p className="text-4xl font-bold">
          {Math.round(weatherData.main.temp)}°{unit === "metric" ? "C" : "F"}
        </p>
      </div>
      <p className="capitalize">{weatherData.weather[0].description}</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p>{t.humidity}</p>
          <p className="font-bold">{weatherData.main.humidity}%</p>
        </div>
        <div>
          <p>{t.windSpeed}</p>
          <p className="font-bold">
            {weatherData.wind.speed} {unit === "metric" ? "m/s" : "mph"}
          </p>
        </div>
        <div>
          <p>{t.feelsLike}</p>
          <p className="font-bold">
            {Math.round(weatherData.main.feels_like)}°
            {unit === "metric" ? "C" : "F"}
          </p>
        </div>
        <div>
          <p>{t.pressure}</p>
          <p className="font-bold">{weatherData.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
