"use client";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaPython } from "react-icons/fa";
import { SiMongodb, SiJavascript, SiCplusplus, SiNumpy, SiPandas, SiScikitlearn, SiPlotly, SiPython } from "react-icons/si";

export default function About() {
    const education = [
        {
            level: "10th Grade",
            institution: "Parwati Prema Jagati Saraswati Vihar",
            board: "CBSE",
            score: "90%",
            year: "2020",
        },
        {
            level: "12th Grade",
            institution: "Beersheba Senior Secondary School",
            board: "CBSE",
            score: "82%",
            year: "2022",
        },
        {
            level: "B.Tech — Computer Science",
            institution: "Graphic Era Hill University",
            board: "Haldwani, Nainital",
            score: "8.1 CGPA",
            year: "2022 – Present",
        },
    ];

    const techCategories = [
        {
            label: "Frontend",
            color: "cyan",
            techs: [
                { name: "HTML5", icon: <FaHtml5 /> },
                { name: "CSS3", icon: <FaCss3Alt /> },
                { name: "JavaScript", icon: <SiJavascript /> },
                { name: "React", icon: <FaReact /> },
            ],
        },
        {
            label: "Backend",
            color: "emerald",
            techs: [
                { name: "Node.js", icon: <FaNodeJs /> },
                { name: "MongoDB", icon: <SiMongodb /> },
                { name: "Python", icon: <FaPython /> },
                { name: "C++", icon: <SiCplusplus /> },
            ],
        },
        {
            label: "Data Science",
            color: "violet",
            techs: [
                { name: "NumPy", icon: <SiNumpy /> },
                { name: "Pandas", icon: <SiPandas /> },
                { name: "Scikit-learn", icon: <SiScikitlearn /> },
                { name: "Matplotlib", icon: <SiPlotly /> },
                { name: "Seaborn", icon: <SiPython /> },
            ],
        },
    ];

    const colorMap: Record<string, { pill: string; icon: string; border: string; dot: string }> = {
        cyan: {
            pill: "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20",
            icon: "text-cyan-400",
            border: "border-cyan-500/30",
            dot: "bg-cyan-400",
        },
        emerald: {
            pill: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
            icon: "text-emerald-400",
            border: "border-emerald-500/30",
            dot: "bg-emerald-400",
        },
        violet: {
            pill: "bg-violet-500/10 text-violet-400 border border-violet-500/20",
            icon: "text-violet-400",
            border: "border-violet-500/30",
            dot: "bg-violet-400",
        },
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
    };

    return (
        <section
            id="about"
            className="relative py-28 px-6 overflow-hidden"
        >
            {/* Ambient background blobs */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute -top-32 -left-32 w-[480px] h-[480px] rounded-full bg-cyan-500/5 blur-[120px]" />
                <div className="absolute bottom-0 right-0 w-[360px] h-[360px] rounded-full bg-violet-500/5 blur-[100px]" />
                {/* subtle grid */}
                
            </div>

            <div className="relative max-w-6xl mx-auto">
                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mb-20 text-center"
                >
                    <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-4 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5">
                        About Me
                    </span>
                    <h2 className="text-5xl md:text-6xl font-bold text-white leading-tight tracking-tight">
                        Who I{" "}
                        <span className="relative inline-block">
                            Am
                            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full" />
                        </span>
                    </h2>
                    <p className="mt-5 text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
                        A CS undergrad passionate about building clean, performant software and exploring the intersection of data and engineering.
                    </p>
                </motion.div>

                {/* Main Grid */}
                <div className="grid lg:grid-cols-5 gap-10">
                    {/* Education — 2/5 */}
                    <motion.div
                        className="lg:col-span-2"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-6">
                            Education
                        </h3>
                        <div className="relative pl-5">
                            {/* vertical timeline line */}
                            <div className="absolute left-0 top-2 bottom-2 w-px bg-gradient-to-b from-cyan-500/40 via-violet-500/20 to-transparent" />

                            <div className="space-y-6">
                                {education.map((edu, i) => (
                                    <motion.div
                                        key={i}
                                        variants={itemVariants}
                                        className="relative group"
                                    >
                                        {/* timeline dot */}
                                        <div className="absolute -left-[21px] top-[6px] w-2.5 h-2.5 rounded-full bg-[#080c14] border-2 border-cyan-400 group-hover:border-violet-400 transition-colors duration-300" />

                                        <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.12] hover:bg-white/[0.05] transition-all duration-300">
                                            <div className="flex items-start justify-between gap-3 mb-2">
                                                <h4 className="text-sm font-semibold text-white leading-snug">
                                                    {edu.level}
                                                </h4>
                                                <span className="shrink-0 text-[11px] font-medium text-gray-500 bg-white/5 px-2 py-0.5 rounded-full border border-white/5">
                                                    {edu.year}
                                                </span>
                                            </div>
                                            <p className="text-sm text-gray-400">{edu.institution}</p>
                                            <div className="flex items-center justify-between mt-3">
                                                <span className="text-xs text-gray-600">{edu.board}</span>
                                                <span className="text-sm font-bold text-cyan-400">
                                                    {edu.score}
                                                </span>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Tech Stack — 3/5 */}
                    <motion.div
                        className="lg:col-span-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        <h3 className="text-xs font-semibold tracking-[0.2em] uppercase text-gray-500 mb-6">
                            Technologies
                        </h3>

                        <div className="space-y-6">
                            {techCategories.map((cat, ci) => {
                                const c = colorMap[cat.color];
                                return (
                                    <motion.div
                                        key={ci}
                                        variants={itemVariants}
                                        className={`p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-white/[0.10] transition-all duration-300`}
                                    >
                                        {/* Category header */}
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className={`w-1.5 h-1.5 rounded-full ${c.dot}`} />
                                            <span className={`text-xs font-semibold tracking-widest uppercase ${c.icon}`}>
                                                {cat.label}
                                            </span>
                                        </div>

                                        {/* Tech pills */}
                                        <div className="flex flex-wrap gap-2">
                                            {cat.techs.map((tech, ti) => (
                                                <motion.div
                                                    key={ti}
                                                    whileHover={{ scale: 1.06, y: -2 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-sm font-medium cursor-default select-none ${c.pill}`}
                                                >
                                                    <span className={`text-base ${c.icon}`}>{tech.icon}</span>
                                                    {tech.name}
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* Stats row */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-6 grid grid-cols-3 gap-3"
                        >
                            {[
                                { label: "Projects Built", value: "10+" },
                                { label: "Technologies", value: "13+" },
                                { label: "Current CGPA", value: "8.1" },
                            ].map((stat, i) => (
                                <div
                                    key={i}
                                    className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] text-center"
                                >
                                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                                    <p className="text-[11px] text-gray-500 mt-1 uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}