'use client'
import { useWeather } from '../context/WeatherContext';
import { formatLocalTime } from '../utils/timeUtils';

const WeatherCard = () => {
  const { weatherData, unit } = useWeather();

  if (!weatherData) return <p>Cargando...</p>;

  return (
    <div className="bg-blue-100 p-4 rounded-lg text-black">
      <h2 className="text-xl font-bold">{weatherData.name}</h2>
      <p className="text-gray-600">{formatLocalTime(weatherData.dt, weatherData.timezone)}</p>
      <div className="flex items-center">
        <img
          src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].description}
          className="w-16 h-16"
        />
        <p className="text-4xl font-bold">
          {Math.round(weatherData.main.temp)}°{unit === 'metric' ? 'C' : 'F'}
        </p>
      </div>
      <p className="capitalize">{weatherData.weather[0].description}</p>
      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p>Humedad</p>
          <p className="font-bold">{weatherData.main.humidity}%</p>
        </div>
        <div>
          <p>Viento</p>
          <p className="font-bold">{weatherData.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
        </div>
        <div>
          <p>Sensación Térmica</p>
          <p className="font-bold">
            {Math.round(weatherData.main.feels_like)}°{unit === 'metric' ? 'C' : 'F'}
          </p>
        </div>
        <div>
          <p>Presión</p>
          <p className="font-bold">{weatherData.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;