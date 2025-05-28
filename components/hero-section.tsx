"use client"

import { useEffect, useState } from "react"
import { motion, type MotionValue } from "framer-motion"
import { ChevronDown, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

interface HeroSectionProps {
  opacity: MotionValue<number>
  scale: MotionValue<number>
}

interface Dot {
  x: number
  y: number
  duration: number
  delay: number
}

export function HeroSection({ opacity, scale }: HeroSectionProps) {
  const [dots, setDots] = useState<Dot[]>([])

  useEffect(() => {
    const width = window.innerWidth
    const height = window.innerHeight

    const generatedDots = Array.from({ length: 50 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2 + 2,
    }))

    setDots(generatedDots)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <motion.div
        className="text-center z-10"
        style={{ opacity, scale }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        {/* Animated Intro Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="mb-8"
        >
          <div className="text-sm font-mono text-green-400 mb-4">
            {"> python developer.initialize()"}
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-green-400 bg-clip-text text-transparent">
            Hammad Yaqub
          </h1>
          <div className="text-xl md:text-2xl text-gray-400 font-mono whitespace-pre leading-relaxed text-left md:text-center">
            <code>
              <span className="text-green-400">class</span> SolutionArchitect:<br />
              {"    "}
              <span className="text-blue-400">def</span> <span className="text-yellow-400">build_future</span>():<br />
              {"        "}
              <span className="text-gray-300">return</span>{" "}
              <span className="text-green-400">"scalable_solutions"</span>
            </code>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2.1 }}
          className="flex justify-center space-x-6 mb-12"
        >
          <Button
            variant="outline"
            size="lg"
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
          >
            <Github className="mr-2 h-5 w-5" />
            GitHub
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
          >
            <Linkedin className="mr-2 h-5 w-5" />
            LinkedIn
          </Button>
        </motion.div>
      </motion.div>

      {/* Animated Background - client-side only */}
      <div className="absolute inset-0 overflow-hidden">
        {dots.map((dot, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            initial={{ x: dot.x, y: dot.y, opacity: 0 }}
            animate={{ y: -100, opacity: [0, 1, 0] }}
            transition={{
              duration: dot.duration,
              delay: dot.delay,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      {/* Scroll Icon */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 2 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </motion.div>
    </section>
  )
}
