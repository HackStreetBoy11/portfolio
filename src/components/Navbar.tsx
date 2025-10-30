"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => setMounted(true), []);
    if (!mounted) return null;

    return (
        <motion.nav
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col md:flex-row justify-between items-center 
                       gap-4 md:gap-0 p-4 shadow-md 
                       bg-gradient-to-r from-gray-100 via-white to-gray-50
                       dark:from-gray-900 dark:via-gray-800 dark:to-gray-900
                       transition-all duration-500 sticky top-0 z-50 backdrop-blur-md"
        >
            {/* Logo / Name */}
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white tracking-wide">
                Info
            </h1>

            {/* Nav Links + Theme Toggle */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-5 items-center text-gray-800 dark:text-gray-200">
                {["About", "Projects", "Contact"].map((item) => (
                    <a
                        key={item}
                        href={`#${item.toLowerCase()}`}
                        className="relative hover:text-blue-500 dark:hover:text-blue-400 transition"
                    >
                        {item}
                    </a>
                ))}

                <button
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className="px-4 py-2 rounded-md font-medium 
                               bg-blue-500 dark:bg-yellow-400 
                               text-white dark:text-gray-900
                               hover:scale-105 transition-transform"
                >
                    {theme === "light" ? "🌙 Dark" : "☀️ Light"}
                </button>
            </div>
        </motion.nav>
    );
}
