export interface Translations {
  loading: string;
  currentWeather: string;
  feelsLike: string;
  humidity: string;
  pressure: string;
  windSpeed: string;
  windDirection: string;
  visibility: string;
  cloudiness: string;
  latitude: string;
  longitude: string;
  sunrise: string;
  sunset: string;
  airQuality: string;
  uvIndex: string;
  settings: string;
  language: string;
  theme: string;
  units: string;
  celsius: string;
  fahrenheit: string;
  lightMode: string;
  darkMode: string;
  searchPlaceholder: string;
  hourlyForecast: string;
  weeklyForecast: string;
  detailedInfo: string;
  currentConditions: string;
  windAndVisibility: string;
  cloudinessAndCoordinates: string;
  sunriseAndSunset: string;
  spanish: string;
  english: string;
}

export const translations: { es: Translations; en: Translations } = {
  es: {
    loading: "Cargando...",
    currentWeather: "Clima Actual",
    feelsLike: "Sensación Térmica",
    humidity: "Humedad",
    pressure: "Presión",
    windSpeed: "Velocidad del Viento",
    windDirection: "Dirección del Viento",
    visibility: "Visibilidad",
    cloudiness: "Nubosidad",
    latitude: "Latitud",
    longitude: "Longitud",
    sunrise: "Amanecer",
    sunset: "Atardecer",
    airQuality: "Calidad del Aire",
    uvIndex: "Índice UV",
    settings: "Configuración",
    language: "Idioma",
    theme: "Tema",
    units: "Unidades",
    celsius: "Celsius",
    fahrenheit: "Fahrenheit",
    lightMode: "Modo Claro",
    darkMode: "Modo Oscuro",
    searchPlaceholder: "Buscar ciudad...",
    hourlyForecast: "Próximas Horas",
    weeklyForecast: "Pronóstico Semanal",
    detailedInfo: "Información Detallada",
    currentConditions: "Condiciones Actuales",
    windAndVisibility: "Viento y Visibilidad",
    cloudinessAndCoordinates: "Nubosidad y Coordenadas",
    sunriseAndSunset: "Amanecer y Atardecer",
    spanish: "Español",
    english: "Inglés",
  },
  en: {
    loading: "Loading...",
    currentWeather: "Current Weather",
    feelsLike: "Feels Like",
    humidity: "Humidity",
    pressure: "Pressure",
    windSpeed: "Wind Speed",
    windDirection: "Wind Direction",
    visibility: "Visibility",
    cloudiness: "Cloudiness",
    latitude: "Latitude",
    longitude: "Longitude",
    sunrise: "Sunrise",
    sunset: "Sunset",
    airQuality: "Air Quality",
    uvIndex: "UV Index",
    settings: "Settings",
    language: "Language",
    theme: "Theme",
    units: "Units",
    celsius: "Celsius",
    fahrenheit: "Fahrenheit",
    lightMode: "Light Mode",
    darkMode: "Dark Mode",
    searchPlaceholder: "Search city...",
    hourlyForecast: "Hourly Forecast",
    weeklyForecast: "Weekly Forecast",
    detailedInfo: "Detailed Info",
    currentConditions: "Current Conditions",
    windAndVisibility: "Wind and Visibility",
    cloudinessAndCoordinates: "Cloudiness and Coordinates",
    sunriseAndSunset: "Sunrise and Sunset",
    spanish: "Spanish",
    english: "English",
  },
};
