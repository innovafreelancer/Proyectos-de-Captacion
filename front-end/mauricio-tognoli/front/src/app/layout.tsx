import type { Metadata } from "next";
import "./globals.css";
import { WeatherProvider } from "@/context/WeatherContext";
import Sidebar from "@/components/SideBar";

export const metadata: Metadata = {
  title: "WeatherWeb",
  description: "Page for OpenWeatherApi",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
    <html lang="es">
      <body className="flex bg-light-primary dark:bg-black text-dark-primary dark:text-light-primary">
        <WeatherProvider>
          <Sidebar />
          <main className="flex-1 p-4 ml-0 transition-all duration-300">
            {children}
          </main>
        </WeatherProvider>
      </body>
    </html>
  );
}
