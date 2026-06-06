"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { SiLeetcode, SiCodeforces } from "react-icons/si";

export default function Footer() {
    const links = [
        {
            href: "mailto:varunsammal90@gmail.com",
            icon: <FaEnvelope size={18} />,
            label: "Gmail",
            accent: "hover:border-red-500/40 hover:text-red-400 hover:bg-red-500/5",
        },
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
        <motion.footer
            id="contact"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative bg-[#080c14] border-t border-white/[0.06] overflow-hidden"
        >
            {/* Ambient glow */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-cyan-500/5 blur-[80px] rounded-full" />
            </div>

            {/* Divider line with gradient */}
            <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

            <div className="relative max-w-5xl mx-auto px-6 py-14 flex flex-col items-center gap-8">

                {/* Heading */}
                <div className="text-center">
                    <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-cyan-400 mb-3 px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-500/5">
                        Get In Touch
                    </span>
                    <h2 className="font-['Syne',sans-serif] text-3xl md:text-4xl font-bold text-white tracking-tight">
                        Let&apos;s Build Something{" "}
                        <span className="relative inline-block">
                            Together
                            <span className="absolute -bottom-1 left-0 w-full h-[3px] bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full" />
                        </span>
                    </h2>
                    <p className="mt-3 text-sm text-gray-500 max-w-sm mx-auto leading-relaxed">
                        Open to opportunities, collaborations, and interesting conversations.
                    </p>
                </div>

                {/* Social links */}
                <div className="flex items-center gap-3 flex-wrap justify-center">
                    {links.map((item, i) => (
                        <motion.a
                            key={i}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ y: -3 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium text-gray-400 bg-white/[0.03] border border-white/[0.07] transition-all duration-200 ${item.accent}`}
                        >
                            {item.icon}
                            {item.label}
                        </motion.a>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="w-full flex flex-col sm:flex-row items-center justify-between gap-3 pt-6 border-t border-white/[0.05]">
                    <p className="text-xs text-gray-600">
                        Designed &amp; built by{" "}
                        <span className="text-gray-400 font-medium">Varun Sammal</span>
                    </p>
                    <p className="text-xs text-gray-600">
                        © {new Date().getFullYear()} · All rights reserved
                    </p>
                </div>
            </div>
        </motion.footer>
    );
}