import { useEffect, useState } from "react";
import { getGeocodingData } from "../api/get-geocoding";
import { Geocoding } from "../interfaces/geocoding";
import { CurrentWeather } from "../interfaces/current-weather";
import { getCurrentWeather } from "../api/get-current-weather";
import { CurrentWeatherCard } from "./CurrentWeatherCard";
import { ForecastCard } from './ForecastCard';

export const CurrentWeatherComponent = () => {
  const [geocoding, setGeocoding] = useState<Geocoding>();
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather>();

  useEffect(() => {
    // Funcion auto-ejecutable para obtener los datos de la API
    (async () => {
      try {
        await getGeocodingData("co", "pereira", 1).then((data) => {
          if (data.length === 0) {
            throw new Error("No se encontraron datos");
          }
          setGeocoding(data[0]);
          setLat(data.at(0).lat);
          setLon(data[0].lon);
        });
      } catch (error) {
        console.error('No se pudo ejeutar la llamada API: ',error);
      }
    })();
  }, [lat, lon]);

  useEffect(() => {
    (async () => {
      if (geocoding?.lat !== undefined && geocoding?.lon !== undefined) {
        await getCurrentWeather(geocoding.lat, geocoding.lon).then((data) => {
          setCurrentWeather(data);
        }).catch((error) => {
        console.error('No se pudo ejeutar la llamada API: ',error);
        })
      }
    })();
  }, [geocoding]);

  return (
    <div className="text-xl flex flex-col pb-20">
      <h1 className="text-blue-700">Geocoding: </h1>
      {geocoding ? (
        <div>
          <h1>{geocoding.name}</h1>
          <h1>{geocoding.lat}</h1>
          <h1>{geocoding.lon}</h1>
        </div>
      ) : (
        <div>
          <h1>No hay datos</h1>
        </div>
      )}
      <h2 className="text-blue-700">Latitude and longitude: </h2>
      <span>Latitude: {lat}</span>
      <br />
      <span>Longitude: {lon}</span>
      <h2 className="text-blue-700">Current weather: </h2>
      <span>{JSON.stringify(currentWeather, null, 2)}</span>
      <h2 className="text-red-700">Temp:</h2>
      <span>{currentWeather ? (currentWeather.main.temp - 273.15).toFixed(1) : 0 }</span>

      <h2 className="text-blue-700">Weather Card: </h2>
      <div className="flex w-4/5 self-center">
        <CurrentWeatherCard lat={lat} lon={lon}/>
        <ForecastCard/>
      </div>
    </div>
  );
};
