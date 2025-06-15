"use client";

import { motion } from "framer-motion";
import { Mail, Terminal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { IoMail } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { LuLinkedin } from "react-icons/lu";
import { FaUpwork } from "react-icons/fa6";

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
          <div className="bg-gray-900 p-8 rounded-lg border border-gray-800 mb-8 mt-8">
            <div className="font-mono text-left">
              <div className="text-green-400 mb-4">
                {"# Let's build something amazing together"}
              </div>
              <div className="text-gray-300">
                <span className="text-blue-400">if</span> you_have_a_project{" "}
                <span className="text-blue-400">or</span> want_to_collaborate:
                <br />
                <span className="ml-4 text-yellow-400">contact</span>.
                <span className="text-green-400">send_message</span>()
                <br />
                <span className="text-blue-400">else</span>:
                <br />
                <span className="ml-4 text-yellow-400">social</span>.
                <span className="text-green-400">connect</span>
                ()
              </div>
            </div>
          </div>
            <div className="flex justify-center space-x-6">
              <Button
                size="lg"
                className="bg-green-400 text-black hover:bg-green-500"
              >
                <IoMail className="mr-2 h-5 w-5" />
                hammad_yaqub@hotmail.com
              </Button>
            </div>
          <div className="bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl p-6 mt-6">
            <div className="flex justify-center space-x-6">
              <div className="flex justify-center space-x-6">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black hover:border-white/30 transition-all duration-300"
                >
                  <FaGithub className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-blue-500 hover:text-white hover:border-blue-400 transition-all duration-300"
                >
                  <LuLinkedin className="h-5 w-5" />
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-green-500 hover:text-white hover:border-green-400 transition-all duration-300"
                >
                  <FaUpwork className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
