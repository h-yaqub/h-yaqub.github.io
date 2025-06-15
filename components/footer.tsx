"use client";

import { LuLinkedin } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-gray-400 font-mono text-sm">
          {"© 2024 Hammad Yaqub. Built with ❤️ and lot of "}
          <span className="text-gray-400 font-mono text-xl">{"\u2615"}</span>
        </div>

        <div className="flex space-x-4">
          <FaGithub className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <LuLinkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  );
}
