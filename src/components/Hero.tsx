"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

export default function Hero() {
    return (
        <section className="flex flex-col justify-center items-center text-center h-[85vh] 
                        bg-white dark:bg-gray-900 transition-colors">
            {/* Name and Intro */}
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-6xl font-extrabold 
                   bg-gradient-to-r from-blue-500 to-purple-600 
                   bg-clip-text text-transparent"
            >
                Hi, I'm Varun Sammal 👋
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl"
            >
                A passionate Full-Stack Developer exploring the intersection of
                <span className="font-semibold text-blue-600 dark:text-blue-400"> web development, cloud computing,</span>
                and <span className="font-semibold text-purple-600 dark:text-purple-400"> AI technologies.</span>
                I love crafting intelligent, scalable, and beautiful digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
            >
                <motion.a
                    href="#projects"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium 
                   hover:bg-blue-700 transition shadow-lg text-center"
                >
                    View My Work 🚀
                </motion.a>

                <motion.a
                    href="/resume.pdf"
                    download
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium 
                   dark:text-blue-400 dark:border-blue-400
                   hover:bg-blue-600 hover:text-white transition shadow text-center"
                >
                    Download Resume 📄
                </motion.a>
            </motion.div>



            {/* Social Icons */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="flex gap-6 mt-10"
            >
                <a
                    href="https://github.com/HackStreetBoy11"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-3xl"
                >
                    <FaGithub />
                </a>
                <a
                    href="https://www.linkedin.com/in/varun-sammal-771122256/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition text-3xl"
                >
                    <FaLinkedin />
                </a>
                <a
                    href="https://leetcode.com/u/Varun_Sammal446/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-yellow-500 transition text-3xl"
                >
                    <SiLeetcode />
                </a>
                <a
                    href="https://codeforces.com/profile/varun_sammal"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-700 dark:text-gray-300 hover:text-red-500 transition text-3xl"
                >
                    <SiCodeforces />
                </a>
            </motion.div>
        </section>
    );
}
