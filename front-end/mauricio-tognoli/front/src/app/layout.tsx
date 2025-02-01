import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { WeatherProvider } from "@/context/WeatherContext";
import Sidebar from "@/components/SideBar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "WeatherWeb",
  description: "Page for AccuWeather",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
   return (
    <html lang="en">
      <body className="flex bg-gray-100">
        <WeatherProvider>
          <Sidebar/>
          <main className="flex-1 p-4 ml-0 md:ml-64 transition-all duration-300">
            {children}
          </main>
        </WeatherProvider>
      </body>
    </html>
  );
}
