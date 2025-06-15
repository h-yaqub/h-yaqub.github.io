"use client"

import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export function ProjectsSection() {
  const projects = [
    {
      title: "Distributed Analytics Platform",
      description: "A real-time analytics platform processing 10M+ events daily using Python, Kafka, and ClickHouse.",
      tech: ["Python", "Kafka", "ClickHouse", "Docker", "AWS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Microservices E-commerce",
      description: "Scalable e-commerce platform with 15+ microservices, event sourcing, and CQRS pattern.",
      tech: ["FastAPI", "PostgreSQL", "Redis", "RabbitMQ", "K8s"],
      github: "#",
      demo: "#",
    },
    {
      title: "ML Model Deployment Pipeline",
      description: "Automated ML pipeline for model training, validation, and deployment with A/B testing.",
      tech: ["Python", "MLflow", "Airflow", "TensorFlow", "AWS"],
      github: "#",
      demo: "#",
    },
    {
      title: "Real-time Chat System",
      description: "High-performance chat system supporting 100K+ concurrent users with WebSocket clustering.",
      tech: ["Django", "WebSocket", "Redis", "PostgreSQL", "Docker"],
      github: "#",
      demo: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-8 mt-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900 border-gray-800 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 h-full">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white">{project.title}</h3>
                    <p className="text-gray-400 mb-4 leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span key={tech} className="px-2 py-1 bg-gray-800 text-green-400 text-xs rounded font-mono">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-4">
                      <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Button>
                      <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:bg-gray-800">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Button>
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
