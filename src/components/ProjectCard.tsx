"use client";
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  github: string;
  image: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  link,
  github,
  image,
  technologies,
}: ProjectProps) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative flex flex-col bg-white/[0.03] border border-white/[0.07] rounded-2xl overflow-hidden hover:border-white/[0.14] transition-all duration-300"
    >
      {/* Image */}
      <div className="relative w-full h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] via-[#080c14]/20 to-transparent" />

        {/* Live + GitHub icon buttons — float over the image */}
        <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0 transition-all duration-200">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#080c14]/80 backdrop-blur-sm border border-white/10 text-gray-300 hover:text-white hover:border-white/25 transition-all duration-200"
          >
            <FaGithub size={14} />
          </a>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Demo"
            className="w-8 h-8 flex items-center justify-center rounded-lg bg-cyan-400/90 backdrop-blur-sm text-[#080c14] hover:bg-cyan-300 transition-all duration-200"
          >
            <FaExternalLinkAlt size={12} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Title row */}
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-['Syne',sans-serif] text-lg font-bold text-white leading-snug">
            {title}
          </h3>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tech pills */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-white/[0.05]">
          {(technologies || []).map((tech, i) => (
            <span
              key={i}
              className="px-2.5 py-1 text-[11px] font-medium rounded-lg bg-white/[0.05] border border-white/[0.07] text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-150 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Footer links */}
        <div className="flex items-center gap-4 pt-1">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-white transition-colors duration-200"
          >
            <FaGithub size={13} />
            Source
          </a>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-gray-500 hover:text-cyan-400 transition-colors duration-200"
          >
            <FaExternalLinkAlt size={11} />
            Live Demo
          </a>
        </div>
      </div>
    </motion.div>
  );
}