import { GoCloud, GoSun } from 'react-icons/go';


export const ForecastCard = () => {
  return (
    <>
      
        <div className="bg-gray-800 text-white p-8 lg:rounded-r-lg w-full rounded-e-xl">
          <div className="flex justify-between mb-4 w-full">
            <div className="w-auto font-bold uppercase text-90">
              Precipitation
            </div>
            <div className="w-auto text-right">10 %</div>
          </div>
          <div className="flex justify-between mb-4 w-full">
            <div className="w-auto font-bold uppercase text-90">Humidity</div>
            <div className="w-auto text-right">29 %</div>
          </div>
          <div className="flex justify-between mb-8 w-full">
            <div className="w-auto font-bold uppercase text-90">Wind</div>
            <div className="w-auto text-right">12 Mph</div>
          </div>
          <div className="flex flex-row gap-2">
            <div className="flex flex-col w-1/4 bg-gray-100 text-black rounded-lg pb-4">
              <div className="pt-2 mb-2 flex justify-center">
                <GoSun size={30}/>
              </div>
              <div className="text-center">
                <b className="font-normal">Tue</b>
                <br />
                <strong className="text-xl">29ºC</strong>
              </div>
            </div>
            <div className="flex flex-col w-1/4 bg-gray-900 rounded-lg">
              <div className="pt-2 mb-2 flex justify-center">
                <GoCloud size={30}/>
              </div>
              <div className="text-center">
                <b className="font-normal">Wed</b>
                <br />
                <strong className="text-xl">21ºC</strong>
              </div>
            </div>
            <div className="flex flex-col w-1/4 bg-gray-900 rounded-lg">
              <div className="pt-2 mb-2 flex justify-center">
                <GoCloud size={30}/>
              </div>
              <div className="text-center">
                <b className="font-normal">Thu</b>
                <br />
                <strong className="text-xl">18ºC</strong>
              </div>
            </div>
            <div className="flex flex-col w-1/4 bg-gray-900 rounded-lg">
              <div className="pt-2 mb-2 flex justify-center">
                <GoSun size={30}/>
              </div>
              <div className="text-center">
                <b className="font-normal">Fri</b>
                <br />
                <strong className="text-xl">25ºC</strong>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};
