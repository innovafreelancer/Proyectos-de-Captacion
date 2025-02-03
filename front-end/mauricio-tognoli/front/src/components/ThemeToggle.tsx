"use client";
import { useWeather } from "../context/WeatherContext";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, setTheme } = useWeather();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-light-secondary dark:bg-dark-secondary hover:bg-light-accent dark:hover:bg-dark-accent transition-colors"
    >
      {theme === "light" ? (
        <FaMoon className="text-dark-text" />
      ) : (
        <FaSun className="text-yellow-400" />
      )}
    </button>
  );
};

export default ThemeToggle;
