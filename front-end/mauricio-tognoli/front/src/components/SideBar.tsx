"use client";
import Link from "next/link";
import { FaHome, FaCog, FaInfoCircle, FaBars } from "react-icons/fa";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import SearchAutocomplete from "./SearchAutocomplete";
import logo from "../../public/Logo.png";
import Image from "next/image";
import { useWeather } from "@/context/WeatherContext";
import { translations } from "@/utils/translations";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const { language } = useWeather();
  const t = translations[language as keyof typeof translations];
  const pathname = usePathname();

  // Cerrar la barra lateral cada vez que cambie la ruta
  useEffect(() => {
    setIsCollapsed(true); // Cierra la barra lateral en móviles
  }, [pathname]);

  

  return (
    <>
      {/* Botón para expandir/contraer la barra lateral en móviles */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="fixed top-4 left-4 p-2 bg-light-secondary dark:bg-dark-secondary text-light-text dark:text-dark-text rounded-lg md:hidden z-50"
      >
        <FaBars />
      </button>

      {/* Barra lateral */}
      <div
        className={`bg-blue-400 dark:bg-dark-secondary text-white w-64 min-h-screen p-4 fixed md:relative transform transition-transform duration-300 ease-in-out ${
          isCollapsed ? "-translate-x-full" : "translate-x-0"
        } md:translate-x-0`}
      >
        {/* Logo */}
        <Image
          src={logo}
          alt="Logo"
          width={200}
          height={300}
          className="mb-8 mt-14"
        />

        {/* Componente de búsqueda */}
        <div className="mb-10">
          <SearchAutocomplete />
        </div>

        {/* Menú de la barra lateral */}
        <ul>
          <li className="text-xl mb-10">
            <Link href="/" className="flex items-center hover:text-gray-200">
              <FaHome className="mr-2" />
              {t.home}
            </Link>
          </li>
          <li className="text-xl mb-10">
            <Link
              href="/settings"
              className="flex items-center hover:text-gray-200"
            >
              <FaCog className="mr-2" />
              {t.settings}
            </Link>
          </li>
          <li className="text-xl mb-10">
            <Link
              href="/moreinfo"
              className="flex items-center hover:text-gray-200"
            >
              <FaInfoCircle className="mr-2" />
              {t.moreInfo}
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;