import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
    return (
        <section id="projects" className="p-8 bg-gray-50 dark:bg-gray-900">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((proj, idx) => (
                    <ProjectCard key={idx} {...proj} />
                ))}
            </div>
        </section>
    );
}
