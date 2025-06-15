"use client";

import { motion, type MotionValue } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FaUpwork } from "react-icons/fa6";

interface HeroSectionProps {
  opacity: MotionValue<number>;
  scale: MotionValue<number>;
}

export function HeroSection({ opacity, scale }: HeroSectionProps) {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative"
    >
      <motion.div
        className="text-center z-10"
        style={{ opacity, scale }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className=""
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-gray-300 to-green-400 bg-clip-text text-transparent">
            Hammad Yaqub
          </h1>
          <div className="text-xl md:text-2xl text-gray-400 font-mono whitespace-pre leading-relaxed text-left md:text-center">
            <code>
              <span className="text-green-400">class</span> SolutionArchitect:
              <br />
              {"       "}
              <span className="text-blue-400">def</span>{" "}
              <span className="text-yellow-400">build_future</span>():
              <br />
              {"                       "}
              <span className="text-gray-300">return</span>{" "}
              <span className="text-green-400">"scalable_solutions"</span>
            </code>
          </div>
        </motion.div>
      </motion.div>

      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-green-400 rounded-full"
            initial={{
              x:
                Math.random() *
                (typeof window !== "undefined" ? window.innerWidth : 1000),
              y:
                Math.random() *
                (typeof window !== "undefined" ? window.innerHeight : 1000),
              opacity: 0,
            }}
            animate={{
              y: [null, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: Math.random() * 2 + 2,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 2.1 }}
        className="absolute bottom-32 left-0 right-0 flex justify-center"
      >
        <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6">
          <div className="flex justify-center space-x-6">
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black hover:border-white/30 transition-all duration-300"
            >
              <FaGithub className="mr-2 h-5 w-5" />
              GitHub
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-blue-500 hover:text-white hover:border-blue-400 transition-all duration-300"
            >
              <LuLinkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-green-500 hover:text-white hover:border-green-400 transition-all duration-300"
            >
              <FaUpwork className="mr-2 h-5 w-5" />
              Upwork
            </Button>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: 2 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
      >
        <ChevronDown className="h-8 w-8 text-gray-400" />
      </motion.div>
    </section>
  );
}
