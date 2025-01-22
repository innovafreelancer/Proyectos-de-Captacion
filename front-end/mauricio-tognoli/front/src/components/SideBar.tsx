"use client";
import { useState } from "react";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "Close" : "Open"}
      </button>
      <div>
        <ul>
          <li>Weather</li>
          <li>Cities</li>
          <li>Map</li>
          <li>Settings</li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
