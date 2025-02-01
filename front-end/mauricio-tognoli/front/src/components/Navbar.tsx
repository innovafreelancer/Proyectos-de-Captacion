import React from "react";
import SearchAutocomplete from "./SearchAutocomplete";

export const Navbar: React.FC = () => {
  

  return (
    <nav className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <div className="text-xl font-bold">WeatherWeb</div>
      <div className="flex items-center gap-4 w-full max-w-lg">
      <SearchAutocomplete/>
       
      </div>
    </nav>
  );
};
