import { Weather, Main, Wind } from "./weather";

export interface ForecastItem {
  dt: number;
  main: Main;
  weather: Weather[];
  wind: Wind;
  dt_txt: string;
}

export interface ForecastData {
  city: {
    name: string;
    timezone: number;
  };
  list: ForecastItem[];
}
