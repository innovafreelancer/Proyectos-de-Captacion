"use client";
import Link from 'next/link';
import { FaHome, FaCog, FaInfoCircle, FaBars } from 'react-icons/fa';
import { useState } from 'react';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <>
      {/* Botón para colapsar/expandir la sidebar en móviles */}
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="top-4 left-4 p-2 bg-gray-800 text-white rounded-lg md:hidden z-50"
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <div
        className={`flex bg-gray-800 text-white w-64 min-h-screen p-4 fixed md:relative transform transition-transform duration-300 ease-in-out ${
          isCollapsed ? '-translate-x-full' : 'translate-x-0'
        } md:translate-x-0`}
      >
        <h2 className="text-xl font-bold mb-4">Clima App</h2>
        <ul>
          <li className="mb-2">
            <Link href="/" className="flex items-center hover:text-gray-400">
              <FaHome className="mr-2" />
              Home
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/settings" className="flex items-center hover:text-gray-400">
              <FaCog className="mr-2" />
              Settings
            </Link>
          </li>
          <li className="mb-2">
            <Link href="/moreinfo" className="flex items-center hover:text-gray-400">
              <FaInfoCircle className="mr-2" />
              More Info
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;