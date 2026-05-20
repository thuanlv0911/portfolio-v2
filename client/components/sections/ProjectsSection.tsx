import Container from "../ui/Container";
import ProjectCard from "../ui/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-32">
            <Container>
                <h2 className="text-4xl font-bold">
                    Projects
                </h2>

                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {projects.map((project) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}