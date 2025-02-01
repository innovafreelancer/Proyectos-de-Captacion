'use client'
import { useWeather } from '../context/WeatherContext';
import { formatLocalTime } from '../utils/timeUtils';

const HourlyForecast = () => {
  const { forecastData, unit } = useWeather();

  if (!forecastData || !forecastData.list) return <p>Cargando pronóstico por hora...</p>;

const hourlyData = forecastData.list.slice(0, 4).filter((item) => item.dt && item.main && item.weather);

  return (
    <div className="bg-blue-100 p-4 rounded-lg text-black">
      <h2 className="text-xl font-bold mb-4">Próximas Horas</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {hourlyData.map((hour, index) => (
          <div key={index} className="bg-white p-2 rounded-lg text-center">
            <p className="font-bold">
              {formatLocalTime(hour.dt, forecastData.city.timezone)}
            </p>
           <img
  src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
  alt={hour.weather[0].description}
  className="w-10 h-10 mx-auto"
/>
            <p className="text-lg font-bold">
              {Math.round(hour.main.temp)}°{unit === 'metric' ? 'C' : 'F'}
            </p>
            <p className="capitalize text-sm">{hour.weather[0].description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HourlyForecast;