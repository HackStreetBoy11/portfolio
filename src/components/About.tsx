"use client";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiCplusplus } from "react-icons/si";

export default function About() {
    const education = [
        { level: "10th Grade", institution: "Parwati Prema Jagati Saraswati Vihar", board: "CBSE", score: "90%", year: "2020" },
        { level: "12th Grade", institution: "Beersheba Senior Secondary School", board: "CBSE", score: "82%", year: "2022" },
        { level: "B.Tech in Computer Science", institution: "Graphic Era Hill University", location: "Haldwani, Nainital", score: "Current CGPA: 8.1", year: "2022 - Present" },
    ];

    const techStack = [
        { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
        { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
        { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-5xl" /> },
        { name: "React", icon: <FaReact className="text-cyan-400 text-5xl" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
        { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
        { name: "Python", icon: <FaPython className="text-blue-400 text-5xl" /> },
        { name: "C++", icon: <SiCplusplus className="text-blue-600 text-5xl" /> },
    ];

    return (
        <section id="about" className="py-20 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-500">
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
            >
                About Me ✨
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {/* Education */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-2xl font-semibold mb-5 text-gray-800 dark:text-gray-200">🎓 Education</h3>
                    <div className="space-y-5">
                        {education.map((edu, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.03 }}
                                className="p-5 bg-white dark:bg-gray-800 rounded-xl shadow border border-gray-200 dark:border-gray-700"
                            >
                                <h4 className="font-semibold text-lg text-gray-900 dark:text-white">{edu.level}</h4>
                                <p className="text-gray-700 dark:text-gray-300">{edu.institution}</p>
                                <p className="text-sm text-gray-600 dark:text-gray-400">{edu.board || edu.location} • {edu.year}</p>
                                <p className="text-blue-600 dark:text-blue-400 mt-1 font-medium">{edu.score}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Tech Stack */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <h3 className="text-2xl font-semibold mb-5 text-gray-800 dark:text-gray-200">💻 Technologies</h3>
                    <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
                        {techStack.map((tech, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.05 }}
                                className="flex flex-col items-center p-3 bg-white dark:bg-gray-800 
                           rounded-lg shadow-sm hover:shadow-lg transition"
                            >
                                {tech.icon}
                                <span className="text-gray-800 dark:text-gray-200 text-sm font-medium mt-2">
                                    {tech.name}
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
