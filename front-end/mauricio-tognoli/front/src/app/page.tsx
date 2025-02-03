"use client";
import HourlyForecast from "@/components/HourlyForecast";
import WeatherCard from "@/components/WeatherCard";
import WeeklyForecast from "@/components/WeeklyForecast";
import { useWeather } from "@/context/WeatherContext";
import { translations } from "@/utils/translations";
import Link from "next/link";

export default function Home() {
  const { language } = useWeather();
  const t = translations[language as keyof typeof translations];
  return (
    <div className="container mx-auto p-4 space-y-6 z-50">
      <h1 className="text-3xl font-bold text-center mb-5">
        {t.currentWeather}
      </h1>
      <Link href="/moreinfo">
        <WeatherCard />
      </Link>
      <HourlyForecast />
      <WeeklyForecast />
    </div>
  );
}
