"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = ["About", "Projects", "Contact"];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    setMounted(true);

    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${scrolled
        ? "bg-[#080c14]/95 backdrop-blur-xl border-b border-white/[0.06] shadow-[0_1px_32px_rgba(0,0,0,0.5)]"
        : "bg-[#080c14]/60 backdrop-blur-md"
        }`}
    >


      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between sticky top-0 z-50">

        {/* Logo */}
        <a
          href="#"
          className="font-['Syne',sans-serif] text-xl font-bold text-white tracking-tight hover:text-cyan-400 transition-colors duration-200"
        >
          VS
          <span className="text-cyan-400">.</span>
        </a>

        {/* Nav links */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((item) => {
            const href = `#${item.toLowerCase()}`;
            const isActive = active === item;
            return (
              <a
                key={item}
                href={href}
                onClick={() => setActive(item)}
                className={`relative px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 group ${isActive
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
                  }`}
              >
                {/* hover/active bg */}
                <span className="absolute inset-0 rounded-lg bg-white/0 group-hover:bg-white/[0.05] transition-colors duration-200" />
                {/* active underline */}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-1 left-4 right-4 h-px bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{item}</span>
              </a>
            );
          })}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
  
          {/* Resume CTA */}
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold text-[#080c14] bg-cyan-400 hover:bg-cyan-300 transition-colors duration-200 shadow-[0_0_16px_rgba(34,211,238,0.2)]"
          >
            Resume
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3" />
            </svg>
          </motion.a>

          {/* Mobile menu — hamburger (visual only, extend with state if needed) */}
          <button className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-[5px] rounded-lg border border-white/[0.08] bg-white/[0.03] hover:bg-white/[0.07] transition-all duration-200">
            <span className="w-4 h-px bg-gray-400" />
            <span className="w-4 h-px bg-gray-400" />
            <span className="w-2.5 h-px bg-gray-400" />
          </button>
        </div>
      </div>
    </motion.nav>
  );
}