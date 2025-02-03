'use client';
import { useWeather } from '@/context/WeatherContext';
import { formatLocalTime } from '@/utils/timeUtils';
import { translations } from '@/utils/translations';
import Image from 'next/image';

const HourlyForecast = () => {
  const { forecastData, unit, language } = useWeather();
  const t = translations[language as keyof typeof translations];

  if (!forecastData || !forecastData.list) return <></>;

  const hourlyData = forecastData.list.slice(0, 4).filter((item) => item.dt && item.main && item.weather);

  return (
    <div className="bg-blue-400 dark:bg-dark-secondary p-4 rounded-lg shadow-xl dark:shadow-gray-700/50">
      <h2 className="text-xl font-bold mb-4">{t.hourlyForecast}</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {hourlyData.map((hour, index) => (
          <div key={index} className="bg-blue-200 dark:bg-gray-600 p-2 rounded-lg text-center shadow-lg">
            <p className="font-bold">
              {formatLocalTime(hour.dt, forecastData.city.timezone)}
            </p>
            <Image
              src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
              alt={hour.weather[0].description}
              className="mx-auto"
              width={40}
              height={40}
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