export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
  }
  
  export interface Main {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  }
  
  export interface Wind {
    speed: number;
    deg: number;
  }
  
  export interface WeatherData {
    name: string;
    dt: number;
    timezone: number;
    main: Main;
    weather: Weather[];
    wind: Wind;
    visibility: number
  }