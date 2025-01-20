import { useEffect, useState } from "react";
import { getGeocodingData } from "../api/get-geocoding";



export const MyComponent = () => {
  const [data, setData] = useState();

  useEffect(() => {

    // Funcion auto-ejecutable para obtener los datos de la API
    (async () => {
      await getGeocodingData("co", "bogota", 1).then((data) => {
        setData(data.json());
        console.log(data.json())
      })
    })()

    // apiResponse()

  }, []);

  return <div className="text-xl">{data}</div>;
};
