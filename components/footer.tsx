"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-gray-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-gray-400 font-mono text-sm">{"© 2024 Hammad Yaqub. Built with ❤️ and lot of \u2615"}</div>
        <div className="flex space-x-4">
          <Github className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <Linkedin className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
          <Mail className="h-5 w-5 text-gray-400 hover:text-white cursor-pointer transition-colors" />
        </div>
      </div>
    </footer>
  )
}
