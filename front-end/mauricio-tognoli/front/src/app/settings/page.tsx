'use client'
import { useWeather } from '../../context/WeatherContext';

const Setting = () => {
  const { unit, setUnit, theme, setTheme, language, setLanguage } = useWeather();

  return (
    <div className="p-4 text-black">
      <select value={unit} onChange={(e) => setUnit(e.target.value as 'metric' | 'imperial')}>
        <option value="metric">Celsius</option>
        <option value="imperial">Fahrenheit</option>
      </select>
      <br />
      <select value={theme} onChange={(e) => setTheme(e.target.value as 'light' | 'dark')}>
        <option value="light">Modo Claro</option>
        <option value="dark">Modo Oscuro</option>
      </select>
<br />
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </div>
  );
};

export default Setting