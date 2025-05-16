"use client";

import { useState } from "react";
import LanguageButton from "./language-button";
import TermsAndConditions from "./terms-and-conditions";

export function FooterBottomMobile() {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div className="block sm:hidden mt-6">
      <TermsAndConditions />
      <div className="flex justify-between items-center mt-6">
        <LanguageButton customStyle="block sm:hidden" />
        <div>

        <label className="relative inline-flex items-center cursor-pointer" aria-label="Toggle theme">
          <input
            type="checkbox"
            checked={isDarkTheme}
            onChange={toggleTheme}
            className="sr-only peer"
          />
          <div className="w-12 h-6 bg-gray-600 rounded-full peer peer-checked:bg-gray-400 peer-checked:after:translate-x-6 after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all duration-300"></div>
        </label>
        </div>
      </div>
    </div>
  );
}