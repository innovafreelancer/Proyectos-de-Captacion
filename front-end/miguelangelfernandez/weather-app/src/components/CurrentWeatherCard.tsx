import { useEffect, useState } from "react";
import { getForecastData } from "../api/get-forecast";
import { IoLocationSharp } from "react-icons/io5";
import { GoSun } from "react-icons/go";

interface Props {
  lat: number;
  lon: number;
}

export const CurrentWeatherCard = ({ lat, lon }: Props) => {


  const [forecast, setForecast] = useState();

  useEffect(() => {
    (async () => {
      // ! el forecast requiere pago en el API
      await getForecastData(lat, lon)
        .then((data) => {
          setForecast(data);
        })
        .catch((error) => {
          console.error("No se pudo ejeutar la llamada API: ", error);
        });
    })();

    console.log(forecast);
  }, [forecast]);

  return (
    <>
      <div className="py-6 px-8 w-full bg-blue-400 opacity-90 text-white rounded-s-xl">
        <div className="mb-10">
          <h2 className="font-bold text-3xl leading-none pb-1">Tuesday</h2>
          <h3 className="leading-none pb-2 pl-1">15 Jan 19</h3>
          <p className="flex aling-center opacity-75">
            <IoLocationSharp />
            París, FR
          </p>
        </div>
        <div>
          <GoSun size={100}/>
          <strong className="leading-none text-6xl block font-weight-bolder">
            29ºC
          </strong>
          <b className="text-2xl block font-bold">Sunny</b>
        </div>
      </div>
    </>
  );
};
