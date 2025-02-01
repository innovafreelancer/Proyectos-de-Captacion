
import HourlyForecast from "@/components/HourlyForecast";
import WeatherCard from "@/components/WeatherCard";
import WeeklyForecast from "@/components/WeeklyForecast";

export default function Home() {
  return (
    <div className="container mx-auto p-4 space-y-6 z-50">
      <h1 className="text-3xl font-bold text-center">Clima Actual</h1>
      <WeatherCard />
      <HourlyForecast />
      <WeeklyForecast />
    </div>
  );
}
