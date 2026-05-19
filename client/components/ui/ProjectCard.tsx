import { Project } from "@/types/project";
import Link from "next/link";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({
    project,
}: ProjectCardProps) {
    return (
        <div className="rounded-2xl border border-white/10 bg-white/5 p-6 transition hover:-translate-y-2 hover:border-blue-400">
            <h3 className="text-2xl font-bold">
                {project.title}
            </h3>

            <p className="mt-4 text-gray-400">
                {project.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                    <span
                        key={tech}
                        className="rounded-lg bg-blue-500/20 px-3 py-1 text-sm text-blue-300"
                    >
                        {tech}
                    </span>
                ))}
            </div>

            <Link
                href={`/projects/${project.id}`}
                className="mt-6 inline-block text-blue-400"
            >
                View Project →
            </Link>
        </div>
    );
}