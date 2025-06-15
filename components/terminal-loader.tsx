"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TerminalLoaderProps {
  onComplete: () => void;
}

export function TerminalLoader({ onComplete }: TerminalLoaderProps) {
  const [step, setStep] = useState(0);
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setStep(1), 300), // Show prompt
      setTimeout(() => setStep(2), 600), // Start typing
      setTimeout(() => setStep(3), 2000), // Show response lines
      setTimeout(() => setStep(4), 4500), // Show loading bar
      setTimeout(() => onComplete(), 6000), // Complete loading
    ];

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  // Dynamic percentage counter
  useEffect(() => {
    if (step >= 4) {
      let currentPercentage = 0
      const interval = setInterval(() => {
        currentPercentage += Math.random() * 8 + 2 // Random increment between 2-10
        if (currentPercentage >= 100) {
          currentPercentage = 100
          clearInterval(interval)
        }
        setPercentage(Math.floor(currentPercentage))
      }, 80) // Update every 80ms

      return () => clearInterval(interval)
    }
  }, [step])

  const terminalLines = [
    "Fetching good vibes... ☕",
    "Deploying main character energy... 🌟",
    "Running `pip install success`... ✅",
    "Syncing portfolio... ✨",
  ];

  return (
    <motion.div
      className="fixed inset-0 bg-black z-50 flex items-left justify-left mt-4"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="text-left font-mono max-w-2xl mx-4">
        {/* Command prompt */}
        <AnimatePresence>
          {step >= 1 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-left justify-left text-xl md:text-2xl mb-8"
            >
              <span className="text-blue-400">hyaqub@portfolio</span>
              <span className="text-white">:</span>
              <span className="text-purple-400">/</span>
              <span className="text-white mr-4"># </span>
              {step >= 2 && (
                <motion.span className="whitespace-nowrap text-white-400">
                  {"brew install vibes --caffeinated"
                    .split("")
                    .map((char, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          delay: index * 0.04,
                          duration: 0.05,
                        }}
                      >
                        {char}
                      </motion.span>
                    ))}
                  <motion.span
                    className="animate-pulse text-white"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                  >
                    |
                  </motion.span>
                </motion.span>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Terminal response lines */}
        <AnimatePresence>
          {step >= 3 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-2 mb-8 text-left"
            >
              {terminalLines.map((line, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.8, duration: 0.3 }}
                  className="text-green-400 text-lg"
                >
                  {line}
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Loading bar */}
        <AnimatePresence>
          {step >= 4 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-left"
            >
              <div className="flex items-left justify-left">
                <div className="flex space-x-1">
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-3 h-6 bg-green-400 rounded-sm"
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: percentage >= (i + 1) * (100 / 15) ? 1 : 0 }}
                      transition={{ duration: 0.1 }}
                    />
                  ))}
                </div>
                <motion.span
                  className="ml-4 text-green-400 text-xl font-bold tabular-nums"
                  key={percentage} // Force re-render on percentage change
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.1 }}
                >
                  {percentage}%
                </motion.span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
