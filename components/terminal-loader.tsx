"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface TerminalLoaderProps {
  onComplete: () => void
}

export function TerminalLoader({ onComplete }: TerminalLoaderProps) {
  const [step, setStep] = useState(0)

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStep(1), 500), // Show prompt
      setTimeout(() => setStep(2), 1200), // Start typing
      setTimeout(() => setStep(3), 2800), // Show command
      setTimeout(() => setStep(4), 3300), // Show response
      setTimeout(() => setStep(5), 4800), // Show additional info
      setTimeout(() => onComplete(), 6500), // Complete loading
    ]

    return () => timeouts.forEach(clearTimeout)
  }, [onComplete])

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-center justify-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="text-center font-mono max-w-2xl mx-4">
        {/* Command prompt */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center justify-center text-2xl md:text-3xl mb-8"
            >
              <span className="text-blue-400">hyaqub@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-purple-400">~</span>
              <span className="text-white">$ </span>
              {step >= 2 && (
                <motion.span className="whitespace-nowrap text-green-400">
                  {"whoami".split("").map((char, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: index * 0.1, // Typing delay per character
                        duration: 0.05,
                      }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.span>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Command response */}
        <AnimatePresence>
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-4 mb-8"
            >
              <div className="text-3xl md:text-4xl font-bold text-white">Hammad Yaqub</div>
              <div className="text-xl md:text-2xl text-gray-400">Senior Solution Architect & Python Developer</div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Additional info */}
        <AnimatePresence>
          {step >= 5 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-3 mb-8"
            >
              <div className="text-lg text-yellow-400">📍 San Francisco, CA</div>
              <div className="text-lg text-cyan-400">🚀 Specialization: Scalable Backend Systems</div>
              <div className="text-lg text-pink-400">✨ Status: Available for new opportunities</div>

              <div className="mt-8">
                <div className="text-gray-400 mb-4 text-lg">Loading portfolio...</div>
                <div className="flex items-center justify-center">
                  <div className="flex space-x-1">
                    {[...Array(20)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="w-3 h-6 bg-green-400 rounded-sm"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ delay: i * 0.05, duration: 0.2 }}
                      />
                    ))}
                  </div>
                  <span className="ml-4 text-green-400 text-xl font-bold">100%</span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  )
}
