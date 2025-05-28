"use client"

import { motion } from "framer-motion"

interface NavigationProps {
  activeSection: string
  onSectionClick: (section: string) => void
}

export function Navigation({ activeSection, onSectionClick }: NavigationProps) {
  const sections = ["about", "skills", "projects", "experience", "contact"]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-xl font-mono text-green-400"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
          >
            {"<dev />"}
          </motion.div>
          <div className="hidden md:flex space-x-8">
            {sections.map((section, index) => (
              <motion.button
                key={section}
                onClick={() => onSectionClick(section)}
                className={`text-sm font-mono transition-colors ${
                  activeSection === section ? "text-green-400" : "text-gray-400 hover:text-white"
                }`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
              >
                {section}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  )
}
