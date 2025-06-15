"use client"

import { motion } from "framer-motion"

export function ExperienceSection() {
  const experiences = [
    {
      title: "Senior Solution Architect",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description:
        "Leading architecture decisions for cloud-native applications serving 10M+ users. Designed and implemented microservices architecture reducing system latency by 40%.",
    },
    {
      title: "Lead Python Developer",
      company: "DataFlow Systems",
      period: "2020 - 2022",
      description:
        "Built real-time data processing pipelines handling 1TB+ daily. Led a team of 6 developers and established coding standards and best practices.",
    },
    {
      title: "Senior Backend Developer",
      company: "StartupXYZ",
      period: "2018 - 2020",
      description:
        "Developed scalable APIs and backend services. Optimized database queries resulting in 60% performance improvement. Mentored junior developers.",
    },
  ]

  return (
    <section id="experience" className="py-20 px-6 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="space-y-8 mt-8">
            {experiences.map((job, index) => (
              <motion.div
                key={job.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border-l-2 border-green-400 pl-6 relative"
              >
                <div className="absolute w-4 h-4 bg-green-400 rounded-full -left-2 top-0" />
                <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                <div className="text-blue-400 font-mono text-sm mb-2">
                  {job.company} • {job.period}
                </div>
                <p className="text-gray-400 leading-relaxed">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
