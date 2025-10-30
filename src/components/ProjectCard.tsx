"use client"
import Image from "next/image";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

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
        <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 border border-gray-200 dark:border-gray-700">
            {/* Project Image */}
            <div className="relative w-full h-56">
                <Image
                    src={image}
                    alt={title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                />
            </div>

            {/* Project Content */}
            <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
                    {title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {(technologies || []).map((tech, idx) => (
                        <span
                            key={idx}
                            className="px-3 py-1 text-sm rounded-full bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 text-blue-800 dark:text-blue-300 font-medium shadow-sm hover:scale-105 transition-transform"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                    <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                    >
                        <FaExternalLinkAlt className="text-lg" /> {/* 🌐 Live Demo Icon */}
                    </a>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-300 font-medium hover:underline"
                    >
                        <FaGithub className="text-xl" /> {/* 💻 GitHub Icon */}

                    </a>
                </div>
            </div>
        </div>
    );
}
