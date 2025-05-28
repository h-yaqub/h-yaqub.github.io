"use client"

import { motion } from "framer-motion"
import { Coffee, Code2 } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8 text-center">
            <span className="text-green-400">about</span>.<span className="text-blue-400">me</span>()
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 font-mono text-sm">
                <div className="text-green-400 mb-2">{"# About me"}</div>
                <div className="text-gray-300">
                  <span className="text-blue-400">developer</span> = {"{"}
                  <br />
                  <span className="ml-4 text-yellow-400">"name"</span>:{" "}
                  <span className="text-green-400">"Hammad Yaqub"</span>,
                  <br />
                  <span className="ml-4 text-yellow-400">"role"</span>:{" "}
                  <span className="text-green-400">"Solution Architect"</span>,
                  <br />
                  <span className="ml-4 text-yellow-400">"experience"</span>:{" "}
                  <span className="text-green-400">"8+ years"</span>,
                  <br />
                  <span className="ml-4 text-yellow-400">"passion"</span>:{" "}
                  <span className="text-green-400">"Building scalable systems"</span>
                  <br />
                  {"}"}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                I'm a passionate Python developer and solution architect who loves crafting elegant, scalable solutions
                to complex problems. With over 8 years of experience, I specialize in building robust backend systems,
                designing microservices architectures, and leading technical teams.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open source projects, or
                mentoring junior developers. I believe in writing clean, maintainable code that stands the test of time.
              </p>
              <div className="flex space-x-4">
                <div className="flex items-center text-green-400">
                  <Coffee className="h-5 w-5 mr-2" />
                  <span className="text-sm">Coffee enthusiast</span>
                </div>
                <div className="flex items-center text-blue-400">
                  <Code2 className="h-5 w-5 mr-2" />
                  <span className="text-sm">Open source contributor</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
