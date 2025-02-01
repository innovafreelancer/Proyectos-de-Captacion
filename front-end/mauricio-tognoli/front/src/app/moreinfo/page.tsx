'use client'
import { useWeather } from '../../context/WeatherContext';

const MoreInfo = () => {
  const { weatherData, unit } = useWeather();

  if (!weatherData) return <p>Cargando información detallada...</p>;

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Información Detallada</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Condiciones Actuales</h2>
          <p><strong>Temperatura:</strong> {Math.round(weatherData.main.temp)}°{unit === 'metric' ? 'C' : 'F'}</p>
          <p><strong>Sensación Térmica:</strong> {Math.round(weatherData.main.feels_like)}°{unit === 'metric' ? 'C' : 'F'}</p>
          <p><strong>Humedad:</strong> {weatherData.main.humidity}%</p>
          <p><strong>Presión:</strong> {weatherData.main.pressure} hPa</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-2">Viento y Visibilidad</h2>
          <p><strong>Velocidad del Viento:</strong> {weatherData.wind.speed} {unit === 'metric' ? 'm/s' : 'mph'}</p>
          <p><strong>Dirección del Viento:</strong> {weatherData.wind.deg}°</p>
          <p><strong>Visibilidad:</strong> {weatherData.visibility / 1000} km</p>
        </div>
      </div>
    </div>
  );
};

export default MoreInfo;