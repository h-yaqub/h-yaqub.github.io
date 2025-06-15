"use client"

import { motion } from "framer-motion"
import { useState, useEffect } from "react"

interface NavigationProps {
  activeSection: string
  onSectionClick: (section: string) => void
  onNavigationReady: () => void
  startTyping: boolean
}

export function Navigation({ activeSection, onSectionClick, onNavigationReady, startTyping }: NavigationProps) {
  const sections = ["about", "skills", "projects", "experience", "contact"]

  const [typedText, setTypedText] = useState("")
  const [isTypingComplete, setIsTypingComplete] = useState(false)

  // Map sections to their corresponding typing text
  const sectionTexts = {
    hero: "$ whoami",
    about: "> about.me()",
    skills: "> skills.stack",
    projects: "> featured.projects()",
    experience: "> work.history",
    contact: "> get.in_touch()",
  }

  const currentText = sectionTexts[activeSection as keyof typeof sectionTexts] || sectionTexts.hero

  useEffect(() => {
    // Signal that navigation is ready immediately when terminal completes
    if (startTyping) {
      onNavigationReady()
    }
  }, [startTyping, onNavigationReady])

  useEffect(() => {
    // Only start typing after terminal is complete
    if (!startTyping) return

    // Reset typing when section changes
    setTypedText("")
    setIsTypingComplete(false)

    let index = 0
    const timer = setInterval(() => {
      if (index <= currentText.length) {
        setTypedText(currentText.slice(0, index))
        index++
      } else {
        clearInterval(timer)
        setIsTypingComplete(true)
      }
    }, 60)

    return () => clearInterval(timer)
  }, [activeSection, currentText, startTyping])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-black/20 via-gray-900/30 to-black/20 backdrop-blur-xl border-b border-white/10 shadow-lg shadow-black/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <motion.div
            className="text-xl font-mono text-green-400 min-w-[300px]"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: startTyping ? 1 : 0, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {typedText}
            {!isTypingComplete && startTyping && <span className="animate-pulse">|</span>}
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
                animate={{ opacity: startTyping ? 1 : 0, y: 0 }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
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
