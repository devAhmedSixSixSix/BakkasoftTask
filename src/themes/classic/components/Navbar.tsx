"use client";

import { useState } from "react";
import ThemeSwitch from "@/SharedComponents/ThemeSwitch";
import Image from "next/image";

export default function Navbar() {
  const [active, setActive] = useState("Home");

  const navItems = ["Home", "Contact"]; 

  return (
    <header className="w-full shadow-sm bg-white fixed top-0 z-[10000000]">
      <nav className="container mx-auto flex items-center justify-between py-4 px-4 sm:px-6 lg:px-8">
        <div className="flex-shrink-0">
          <Image
            src="/Bakkasoft Logo.jpeg"
            alt="Bakkasoft Logo"
            width={60}
            height={60}
            className="object-contain"
            // priority
          />
        </div>

        <ul className="flex gap-2 md:gap-7 text-lg font-medium text-gray-700">
          {navItems.map((item) => (
            <li
              key={item}
              onClick={() => setActive(item)}
              className={`cursor-pointer transition-colors duration-200 ${
                active === item
                  ? "text-[#0b91d4]"
                  : "hover:text-[#0b91d4] text-gray-700"
              }`}
            >
              {item}
            </li>
          ))}
        </ul>

        <ThemeSwitch />
      </nav>
    </header>
  );
}
