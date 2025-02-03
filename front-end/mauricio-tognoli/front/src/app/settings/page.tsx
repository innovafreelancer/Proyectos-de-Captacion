"use client";
import { Switch } from "@headlessui/react";
import { useWeather } from "../../context/WeatherContext";
import { translations } from "@/utils/translations";

const Setting = () => {
  const { unit, setUnit, theme, setTheme, language, setLanguage } =
    useWeather();
  const t = translations[language as keyof typeof translations];

  return (
    <div className="p-4 mt-10 text-black dark:text-white">
      <h1 className="text-2xl font-bold mb-6">{t.settings}</h1>

      {/* Switch para Unidades */}
      <div className="mb-6">
        <Switch.Group>
          <div className="flex items-center justify-between">
            <Switch.Label className="mr-4 text-lg font-medium">
              {t.units}
            </Switch.Label>
            <Switch
              checked={unit === "imperial"}
              onChange={(checked) => setUnit(checked ? "imperial" : "metric")}
              className={`${
                unit === "imperial" ? "bg-blue-500" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
            >
              <span
                className={`${
                  unit === "imperial" ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>
        </Switch.Group>
        <p className="text-sm text-gray-500 mt-1">
          {unit === "metric" ? t.celsius : t.fahrenheit}
        </p>
      </div>

      {/* Switch para Tema */}
      <div className="mb-6">
        <Switch.Group>
          <div className="flex items-center justify-between">
            <Switch.Label className="mr-4 text-lg font-medium">
              {t.theme}
            </Switch.Label>
            <Switch
              checked={theme === "dark"}
              onChange={(checked) => setTheme(checked ? "dark" : "light")}
              className={`${
                theme === "dark" ? "bg-blue-500" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
            >
              <span
                className={`${
                  theme === "dark" ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>
        </Switch.Group>
        <p className="text-sm text-gray-500 mt-1">
          {theme === "light" ? t.lightMode : t.darkMode}
        </p>
      </div>

      {/* Switch para Idioma */}
      <div className="mb-6">
        <Switch.Group>
          <div className="flex items-center justify-between">
            <Switch.Label className="mr-4 text-lg font-medium">
              {t.language}
            </Switch.Label>
            <Switch
              checked={language === "en"}
              onChange={(checked) => setLanguage(checked ? "en" : "es")}
              className={`${
                language === "en" ? "bg-blue-500" : "bg-gray-300"
              } relative inline-flex h-6 w-11 items-center rounded-full transition-colors`}
            >
              <span
                className={`${
                  language === "en" ? "translate-x-6" : "translate-x-1"
                } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
              />
            </Switch>
          </div>
        </Switch.Group>
        <p className="text-sm text-gray-500 mt-1">
          {language === "es" ? t.spanish : t.english}
        </p>
      </div>
    </div>
  );
};

export default Setting;
