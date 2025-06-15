"use client";

import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";

import { PiCoffeeBold } from "react-icons/pi";
import { TbAdjustmentsHeart } from "react-icons/tb";

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 font-mono text-md">
                <div className="text-green-400 mb-2">{"# About me"}</div>
                <div className="text-gray-300">
                  <span className="text-blue-400">developer</span> = {"{"}
                  <br />
                  <span className="ml-5 text-yellow-400">"name"</span>:{" "}
                  <span className="text-green-400">"Hammad Yaqub"</span>,
                  <br />
                  <span className="ml-5 text-yellow-400">"role"</span>:{" "}
                  <span className="text-green-400">
                    "Python Developer | Solution Architect"
                  </span>
                  ,
                  <br />
                  <span className="ml-5 text-yellow-400">
                    "experience"
                  </span>: <span className="text-green-400">"8 years"</span>,
                  <br />
                  <span className="ml-5 text-yellow-400">"born"</span>:{" "}
                  <span className="text-green-400">"1994"</span>
                  ,
                  <br />
                  <span className="ml-5 text-yellow-400">"email"</span>:{" "}
                  <span className="text-green-400">
                    "hammad_yaqub@hotmail.com"
                  </span>
                  ,
                  <br />
                  <span className="ml-5 text-yellow-400">"whatsapp"</span>:{" "}
                  <span className="text-green-400">"+92 334 019 0241"</span>,
                  <br />
                  <span className="ml-5 text-yellow-400">"location"</span>:{" "}
                  <span className="text-green-400">"Lahore, Pakistan"</span>,
                  <br />
                  <span className="ml-5 text-yellow-400">"passion"</span>:{" "}
                  <span className="text-green-400">
                    "Building scalable systems"
                  </span>
                  ,
                  <br />
                  <span className="ml-5 text-yellow-400">"languages"</span>:{" ["}
                  <br />
                  <span className="ml-10 text-green-400">"English (C1)"</span>,
                  <br />
                  <span className="ml-10 text-green-400">"Urdu (Mother tongue)"</span>,
                  <br />
                  <span className="ml-10 text-green-400">"Punjabi (C2)"</span>,
                  <br />
                  <span className="ml-5">{"]"}</span>
                  ,
                  <br />
                  <span className="ml-5 text-yellow-400">"hobbies"</span>:{" ["}
                  <br />
                  <span className="ml-10 text-green-400">"Video Games"</span>,
                  <br />
                  <span className="ml-10 text-green-400">"Snooker"</span>,
                  <br />
                  <span className="ml-10 text-green-400">"YouTube"</span>,
                  <br />
                  <span className="ml-5">{"]"}</span>
                  ,
                  <br />
                  {"}"}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed text-justify">
                I'm a seasoned Python developer and solution architect with 8+
                years of hands-on experience delivering scalable, high-impact
                backend systems. I thrive on turning complex challenges into
                clean, performant, and maintainable solutions—whether it's
                architecting microservices from the ground up, leading
                high-performing engineering teams, or integrating modern
                workflows for end-to-end automation.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify">
                My passion lies in building systems that not only function
                effectively but also endure. I embrace clean architecture,
                test-driven development, and robust pipelines to ensure
                every line of code is battle-hardened.
              </p>
              <p className="text-gray-300 leading-relaxed text-justify">
                Outside of active
                development, I stay ahead of the curve by exploring cutting-edge
                technologies, contributing to open-source ecosystems, and
                mentoring the next generation of developers.
              </p>
              <div className="flex space-x-6">
                <div className="flex items-center text-blue-400">
                  <FaCode className="h-5 w-5 mr-2" />
                  <span className="text-sm">Open source contributor</span>
                </div>
                <div className="flex items-center text-green-400">
                  <PiCoffeeBold className="h-5 w-5 mr-2" />
                  <span className="text-sm">Coffee enthusiast</span>
                </div>
                <div className="flex items-center text-purple-400">
                  <TbAdjustmentsHeart className="h-5 w-5 mr-2" />
                  <span className="text-sm">Lifelong learner</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
