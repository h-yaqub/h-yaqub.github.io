"use client"

import { motion } from "framer-motion"
import { Mail, Terminal } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-8">
            <span className="text-green-400">get</span>.<span className="text-blue-400">in_touch</span>()
          </h2>
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 mb-8">
            <div className="font-mono text-left">
              <div className="text-green-400 mb-4">{"# Let's build something amazing together"}</div>
              <div className="text-gray-300">
                <span className="text-blue-400">if</span> you_have_a_project <span className="text-blue-400">or</span>{" "}
                want_to_collaborate:
                <br />
                <span className="ml-4 text-yellow-400">contact</span>.
                <span className="text-green-400">send_message</span>()
                <br />
                <span className="text-blue-400">else</span>:
                <br />
                <span className="ml-4 text-yellow-400">social</span>.<span className="text-green-400">connect</span>
                ()
              </div>
            </div>
          </div>
          <div className="flex justify-center space-x-6">
            <Button size="lg" className="bg-green-400 text-black hover:bg-green-500">
              <Mail className="mr-2 h-5 w-5" />
              hyaqub@email.com
            </Button>
            <Button variant="outline" size="lg" className="border-gray-600 text-gray-300 hover:bg-gray-800">
              <Terminal className="mr-2 h-5 w-5" />
              Schedule Call
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
