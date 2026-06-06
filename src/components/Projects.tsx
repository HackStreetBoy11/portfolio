"use client";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

export default function Projects() {
    return (
        <section id="projects" className="relative py-28 px-6  overflow-hidden">

            {/* Ambient blobs */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500/5 blur-[110px] rounded-full" />
                <div className="absolute bottom-0 left-0 w-[320px] h-[320px] bg-cyan-500/4 blur-[90px] rounded-full" />
            </div>

            <div className="relative max-w-6xl mx-auto">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-16 text-center"
                >
                    <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-violet-400 mb-4 px-3 py-1 rounded-full border border-violet-500/20 bg-violet-500/5">
                        Portfolio
                    </span>
                    <h2 className="font-['Syne',sans-serif] text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
                        Things I&apos;ve{" "}
                        <span className="relative inline-block">
                            Built
                            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full" />
                        </span>
                    </h2>
                    <p className="mt-5 text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
                        A collection of projects spanning full-stack web apps, data science, and everything in between.
                    </p>
                </motion.div>

                {/* Project grid */}
                <motion.div
                    className="grid md:grid-cols-2 gap-5"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        visible: { transition: { staggerChildren: 0.1 } },
                    }}
                >
                    {projects.map((proj, idx) => (
                        <motion.div
                            key={idx}
                            variants={{
                                hidden: { opacity: 0, y: 30 },
                                visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
                            }}
                        >
                            <ProjectCard {...proj} />
                        </motion.div>
                    ))}
                </motion.div>

                {/* Bottom CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-14 flex justify-center"
                >
                    <a
                        href="https://github.com/HackStreetBoy11"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-gray-300 border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 hover:text-white transition-all duration-200"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.694.825.576C20.565 21.796 24 17.298 24 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        View all on GitHub
                    </a>
                </motion.div>
            </div>
        </section>
    );
}