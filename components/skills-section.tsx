"use client"

import { motion } from "framer-motion"
import { Code2, Cloud, Database } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export function SkillsSection() {
  const skillCategories = [
    {
      category: "Backend Development",
      icon: <Code2 className="h-8 w-8" />,
      skills: ["Python", "Django", "FastAPI", "Flask", "PostgreSQL", "Redis"],
      color: "green",
    },
    {
      category: "Cloud & DevOps",
      icon: <Cloud className="h-8 w-8" />,
      skills: ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD", "Monitoring"],
      color: "blue",
    },
    {
      category: "Architecture",
      icon: <Database className="h-8 w-8" />,
      skills: ["Microservices", "Event-Driven", "API Design", "System Design", "Performance", "Security"],
      color: "purple",
    },
  ]

  return (
    <section id="skills" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-black border-gray-800 hover:border-gray-600 transition-colors h-full">
                  <CardContent className="p-6">
                    <div className={`text-${category.color}-400 mb-4`}>{category.icon}</div>
                    <h3 className="text-xl font-semibold mb-4 text-white">{category.category}</h3>
                    <div className="space-y-2">
                      {category.skills.map((skill) => (
                        <div key={skill} className="flex items-center">
                          <div className={`w-2 h-2 bg-${category.color}-400 rounded-full mr-3`} />
                          <span className="text-gray-300">{skill}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
