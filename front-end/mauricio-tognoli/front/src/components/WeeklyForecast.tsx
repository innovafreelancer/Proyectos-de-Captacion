"use client";
import { ForecastItem } from "@/Interfaces/forecast";
import { useWeather } from "../context/WeatherContext";
import { formatLocalDate } from "@/utils/timeUtils";
import { translations } from "@/utils/translations";
import Image from "next/image";

const WeeklyForecast = () => {
  const { forecastData, unit, language } = useWeather();
  const t = translations[language as keyof typeof translations];

  if (!forecastData || !forecastData.list) return <></>

  const dailyData: { [key: string]: ForecastItem[] } = {};
  forecastData.list.forEach((item) => {
    if (!item.dt || !item.main || !item.weather) return;
    const date = formatLocalDate(item.dt, forecastData.city.timezone);
    if (!dailyData[date]) {
      dailyData[date] = [];
    }
    dailyData[date].push(item);
  });

  const next5Days = Object.keys(dailyData)
    .sort((a, b) => new Date(a).getTime() - new Date(b).getTime())
    .slice(0, 5);

  return (
    <div className="bg-blue-400 dark:bg-dark-secondary p-4 rounded-lg shadow-xl dark:shadow-gray-700/50">
      <h2 className="text-xl font-bold mb-4">{t.weeklyForecast}</h2>
      <div className="space-y-4">
        {next5Days.map((date, index) => {
          const dayData = dailyData[date];
          const minTemp = Math.round(
            Math.min(...dayData.map((item) => item.main.temp_min))
          );
          const maxTemp = Math.round(
            Math.max(...dayData.map((item) => item.main.temp_max))
          );
          const weather = dayData[0].weather[0];

          return (
            <div
              key={index}
              className="bg-blue-200 dark:bg-gray-600 p-2 rounded-lg flex items-center justify-between text-black dark:text-white shadow-lg"
            >
              <div>
                <p className="font-bold">
                  {new Date(date).toLocaleDateString("es-ES", {
                    weekday: "long",
                  })}
                </p>
                <p className="text-sm">{new Date(date).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center">
                <Image
                  src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
                  alt={weather.description}
                  width={40}
                  height={40}
                />
                <p className="capitalize text-sm">{weather.description}</p>
              </div>
              <div>
                <p className="text-lg font-bold">
                  {maxTemp}°{unit === "metric" ? "C" : "F"}
                </p>
                <p className="text-sm text-gray-600">
                  {minTemp}°{unit === "metric" ? "C" : "F"}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WeeklyForecast;
