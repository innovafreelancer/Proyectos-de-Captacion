'use client'
import { ForecastItem } from '@/Interfaces/forecast';
import { useWeather } from '../context/WeatherContext';
import { formatLocalDate } from '@/utils/timeUtils';

const WeeklyForecast = () => {
  const { forecastData, unit } = useWeather();

  // Agrupa los datos por día
  if (!forecastData || !forecastData.list) return <p>Cargando pronóstico semanal...</p>;

const dailyData: { [key: string]: ForecastItem[] } = {};
forecastData.list.forEach((item) => {
  if (!item.dt || !item.main || !item.weather) return; // Saltar datos inválidos
  const date = formatLocalDate(item.dt, forecastData.city.timezone);
  if (!dailyData[date]) {
    dailyData[date] = [];
  }
  dailyData[date].push(item);
});

  // Obtén los próximos 5 días
  const next5Days = Object.keys(dailyData)
  .sort((a, b) => new Date(a).getTime() - new Date(b).getTime()) // Ordenar por fecha
  .slice(0, 5); // Obtener los próximos 5 días

  return (
    <div className="bg-blue-100 p-4 rounded-lg">
      <h2 className="text-xl font-bold mb-4">Pronóstico Semanal</h2>
      <div className="space-y-4">
        {next5Days.map((date, index) => {
          const dayData = dailyData[date];
          const minTemp = Math.round(Math.min(...dayData.map((item) => item.main.temp_min)));
          const maxTemp = Math.round(Math.max(...dayData.map((item) => item.main.temp_max)));
          const weather = dayData[0].weather[0]; // Usamos el primer pronóstico del día para el icono y descripción

          return (
            <div key={index} className="bg-white p-2 rounded-lg flex items-center justify-between text-black">
              <div>
                <p className="font-bold">{new Date(date).toLocaleDateString('es-ES', { weekday: 'long' })}</p>
                <p className="text-sm text-gray-600">{new Date(date).toLocaleDateString()}</p>
              </div>
              <div className="flex items-center">
                <img
                  src={`http://openweathermap.org/img/wn/${weather.icon}.png`}
                  alt={weather.description}
                  className="w-10 h-10"
                />
                <p className="capitalize text-sm">{weather.description}</p>
              </div>
              <div>
                <p className="text-lg font-bold">
                  {maxTemp}°{unit === 'metric' ? 'C' : 'F'}
                </p>
                <p className="text-sm text-gray-600">
                  {minTemp}°{unit === 'metric' ? 'C' : 'F'}
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