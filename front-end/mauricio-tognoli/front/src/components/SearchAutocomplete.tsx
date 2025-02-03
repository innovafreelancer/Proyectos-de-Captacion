"use client";
import { useState, useEffect } from "react";
import { getCitySuggestions } from "../api/CityService";
import { useWeather } from "../context/WeatherContext";
import { translations } from "@/utils/translations";

const SearchAutocomplete = () => {
  const { setCity, language } = useWeather();
  const [inputValue, setInputValue] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const t = translations[language as keyof typeof translations];

  useEffect(() => {
    const debounce = setTimeout(async () => {
      if (inputValue.length > 2) {
        const results = await getCitySuggestions(inputValue);
        setSuggestions(results);
      }
    }, 300);
    return () => clearTimeout(debounce);
  }, [inputValue]);

  return (
    <div className="relative text-black">
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder={t.searchCity}
        className="p-2 border rounded-lg"
      />
      {suggestions.length > 0 && (
        <ul className="absolute bg-white border rounded-lg text-black mt-1 w-full">
          {suggestions.map((suggestion, index) => (
            <li
              key={index}
              onClick={() => {
                setCity(suggestion.split(",")[0]);
                setInputValue("");
                setSuggestions([]);
              }}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {suggestion}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SearchAutocomplete;
