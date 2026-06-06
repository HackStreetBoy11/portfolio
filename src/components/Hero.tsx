"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";
import { useEffect, useState } from "react";

const ROLES = [
  "Full-Stack Developer",
  "ML Enthusiast",
  "Open Source Contributor",
  "Problem Solver",
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 60);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const socials = [
    {
      href: "https://github.com/HackStreetBoy11",
      icon: <FaGithub size={18} />,
      label: "GitHub",
      accent: "hover:border-white/20 hover:text-white hover:bg-white/5",
    },
    {
      href: "https://www.linkedin.com/in/varun-sammal-771122256/",
      icon: <FaLinkedin size={18} />,
      label: "LinkedIn",
      accent: "hover:border-blue-500/40 hover:text-blue-400 hover:bg-blue-500/5",
    },
    {
      href: "https://leetcode.com/u/Varun_Sammal446/",
      icon: <SiLeetcode size={18} />,
      label: "LeetCode",
      accent: "hover:border-yellow-500/40 hover:text-yellow-400 hover:bg-yellow-500/5",
    },
    {
      href: "https://codeforces.com/profile/varun_sammal",
      icon: <SiCodeforces size={18} />,
      label: "Codeforces",
      accent: "hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-cyan-500/5",
    },
  ];

  return (
    <section className="relative flex flex-col justify-center items-center text-center min-h-screen  overflow-hidden px-6">

      {/* Ambient blobs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-cyan-500/6 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-60px] left-1/4 w-[320px] h-[320px] bg-violet-500/5 blur-[100px] rounded-full" />
        <div className="absolute bottom-[-60px] right-1/4 w-[280px] h-[280px] bg-emerald-500/4 blur-[100px] rounded-full" />
        {/* grid */}
        
      </div>

      {/* Gradient top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="relative z-10 flex flex-col items-center max-w-3xl">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-medium text-emerald-400 tracking-wide">
            Open to opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-['Syne',sans-serif] text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight"
        >
          Varun{" "}
          <span className="relative inline-block">
            Sammal
            <span className="absolute -bottom-1 left-0 w-full h-[4px] bg-gradient-to-r from-cyan-400 via-violet-400 to-emerald-400 rounded-full" />
          </span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-5 h-10 flex items-center justify-center"
        >
          <span className="text-xl md:text-2xl font-medium text-gray-400">
            I&apos;m a{" "}
            <span className="text-cyan-400 font-semibold">
              {displayed}
              <span className="inline-block w-[2px] h-5 bg-cyan-400 ml-0.5 align-middle animate-pulse" />
            </span>
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-6 text-base md:text-lg text-gray-500 max-w-xl leading-relaxed"
        >
          Crafting intelligent, scalable digital experiences at the intersection of{" "}
          <span className="text-gray-300 font-medium">web development</span>,{" "}
          <span className="text-gray-300 font-medium">cloud computing</span>, and{" "}
          <span className="text-gray-300 font-medium">AI technologies</span>.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.6 }}
          className="mt-10 flex flex-col sm:flex-row gap-3"
        >
          <motion.a
            href="#projects"
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="relative px-7 py-3 rounded-xl font-semibold text-sm text-[#080c14] bg-cyan-400 hover:bg-cyan-300 transition-colors duration-200 shadow-[0_0_24px_rgba(34,211,238,0.25)]"
          >
            View My Work
            <span className="ml-2">→</span>
          </motion.a>

          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="px-7 py-3 rounded-xl font-semibold text-sm text-gray-300 border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200"
          >
            Download Resume
            <span className="ml-2">↓</span>
          </motion.a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex items-center gap-3 mt-10 flex-wrap justify-center"
        >
          {socials.map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-gray-400 bg-white/[0.03] border border-white/[0.07] transition-all duration-200 ${item.accent}`}
            >
              {item.icon}
              {item.label}
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
      >
        <span className="text-[10px] tracking-[0.2em] uppercase text-gray-600">Scroll</span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="w-px h-8 bg-gradient-to-b from-gray-600 to-transparent"
        />
      </motion.div>
    </section>
  );
}