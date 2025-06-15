"use client"

import { useState, useEffect } from "react"
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion"
import { TerminalLoader } from "@/components/terminal-loader"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ExperienceSection } from "@/components/experience-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function Portfolio() {
  const [showTerminal, setShowTerminal] = useState(true)
  const [terminalComplete, setTerminalComplete] = useState(false)
  const [activeSection, setActiveSection] = useState("hero")
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
  const [navigationReady, setNavigationReady] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 300

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    if (terminalComplete) {
      window.addEventListener("scroll", handleScroll)
      handleScroll()
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [terminalComplete])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const handleTerminalComplete = () => {
    setShowTerminal(false)
    // Add small delay to let terminal fade out smoothly
    setTimeout(() => {
      setTerminalComplete(true)
    }, 300)
  }

  const handleNavigationReady = () => {
    setNavigationReady(true)
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <AnimatePresence>{showTerminal && <TerminalLoader onComplete={handleTerminalComplete} />}</AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: terminalComplete ? 1 : 0 }}
        transition={{ duration: 0.5 }}
      >
        <Navigation
          activeSection={activeSection}
          onSectionClick={scrollToSection}
          onNavigationReady={handleNavigationReady}
          startTyping={terminalComplete}
        />
      </motion.div>

      {/* Main content appears shortly after terminal with smooth stagger */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: terminalComplete ? 1 : 0, y: terminalComplete ? 0 : 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <HeroSection opacity={opacity} scale={scale} />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
        <Footer />
      </motion.div>
    </div>
  )
}
