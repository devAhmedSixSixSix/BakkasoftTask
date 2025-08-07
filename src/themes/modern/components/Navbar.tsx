'use client';

import { useState } from "react";
import ThemeSwitch from "@/SharedComponents/ThemeSwitch";
import Image from "next/image";

export default function Navbar() {
  const [activeItem, setActiveItem] = useState("Home");

  const navItems = ["Home", "Contact"];

  return (
    <header className="w-full shadow-sm rounded-b-2xl bg-white fixed top-0 z-[10000000]">
      <nav className="container mx-auto flex justify-between items-center py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center md:gap-7">
          <Image
            src="/Bakkasoft Logo.jpeg"
            alt="Bakkasoft Logo"
            width={60}
            height={60}
            className="object-contain"
            // priority
          />

          <ul className="flex items-start md:items-center gap-2 md:gap-5 text-lg font-medium text-gray-700">
            {navItems.map((item) => (
              <li
                key={item}
                onClick={() => setActiveItem(item)}
                className={`cursor-pointer transition-colors duration-200 ${
                  activeItem === item ? "text-[#0b91d4]" : "hover:text-[#0b91d4]"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <ThemeSwitch />
      </nav>
    </header>
  );
}
