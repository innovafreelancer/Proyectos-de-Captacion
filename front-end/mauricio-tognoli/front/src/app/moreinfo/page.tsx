"use client";
import { useWeather } from "../../context/WeatherContext";
import { formatLocalTime } from "../../utils/timeUtils";
import {
  FaTemperatureHigh,
  FaTint,
  FaWind,
  FaCompass,
  FaEye,
  FaCloud,
  FaMapMarkerAlt,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import { translations } from "@/utils/translations";
import { FadeLoader } from "react-spinners";

const MoreInfo = () => {
  const { weatherData, unit, language } = useWeather();
  const t = translations[language as keyof typeof translations];

  if (!weatherData) return <div className="flex justify-center items-center h-screen"><FadeLoader color="#60a5fa" /></div>;

  const getWindDirection = (degrees: number) => {
    const directions = [
      "Norte",
      "Noreste",
      "Este",
      "Sureste",
      "Sur",
      "Suroeste",
      "Oeste",
      "Noroeste",
    ];
    const index = Math.round((degrees % 360) / 45);
    return directions[index % 8];
  };

  const formatVisibility = (visibility: number) => {
    return unit === "metric"
      ? `${(visibility / 1000).toFixed(1)} km`
      : `${(visibility / 1609.34).toFixed(1)} millas`;
  };

  return (
    <div className="p-4 mt-10 text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-6">{t.detailedInfo}</h1>

      {/* Condiciones Actuales */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-400 dark:bg-dark-secondary p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaTemperatureHigh className="mr-2" /> {t.currentConditions}
          </h2>
          <div className="space-y-3">
            <p className="flex items-center">
              <FaTemperatureHigh className="mr-2" />{" "}
              {Math.round(weatherData.main.temp)}°
              {unit === "metric" ? "C" : "F"}
            </p>
            <p className="flex items-center">
              <FaTemperatureHigh className="mr-2" /> {t.feelsLike}:{" "}
              {Math.round(weatherData.main.feels_like)}°
              {unit === "metric" ? "C" : "F"}
            </p>
            <p className="flex items-center">
              <FaTint className="mr-2" /> {t.humidity}:{" "}
              {weatherData.main.humidity}%
            </p>
            <p className="flex items-center">
              <FaTint className="mr-2" /> {t.pressure}:{" "}
              {weatherData.main.pressure} hPa
            </p>
          </div>
        </div>

        {/* Viento y Visibilidad */}
        <div className="bg-blue-400 dark:bg-dark-secondary p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaWind className="mr-2" /> {t.windAndVisibility}
          </h2>
          <div className="space-y-3">
            <p className="flex items-center">
              <FaWind className="mr-2" /> {t.windSpeed}:{" "}
              {weatherData.wind.speed} {unit === "metric" ? "m/s" : "mph"}
            </p>
            <p className="flex items-center">
              <FaCompass className="mr-2" /> {t.windDirection}:{" "}
              {getWindDirection(weatherData.wind.deg)} ({weatherData.wind.deg}°)
            </p>
            <p className="flex items-center">
              <FaEye className="mr-2" /> {t.visibility}:{" "}
              {formatVisibility(weatherData.visibility)}
            </p>
          </div>
        </div>

        {/* Nubosidad y Coordenadas */}
        <div className="bg-blue-400 dark:bg-dark-secondary p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaCloud className="mr-2" /> {t.cloudinessAndCoordinates}
          </h2>
          <div className="space-y-3">
            <p className="flex items-center">
              <FaCloud className="mr-2" /> {t.cloudiness}:{" "}
              {weatherData.clouds.all}%
            </p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> {t.latitude}:{" "}
              {weatherData.coord.lat}
            </p>
            <p className="flex items-center">
              <FaMapMarkerAlt className="mr-2" /> {t.longitude}:{" "}
              {weatherData.coord.lon}
            </p>
          </div>
        </div>

        {/* Amanecer y Atardecer */}
        <div className="bg-blue-400 dark:bg-dark-secondary p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4 flex items-center">
            <FaSun className="mr-2" /> {t.sunriseAndSunset}
          </h2>
          <div className="space-y-3">
            <p className="flex items-center">
              <FaSun className="mr-2" /> {t.sunrise}:{" "}
              {formatLocalTime(weatherData.sys.sunrise, weatherData.timezone)}
            </p>
            <p className="flex items-center">
              <FaMoon className="mr-2" /> {t.sunset}:{" "}
              {formatLocalTime(weatherData.sys.sunset, weatherData.timezone)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;