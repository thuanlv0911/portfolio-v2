import {
    getProjectById,
} from "@/services/project.service";

interface ProjectDetailPageProps {
    params: Promise<{
        id: string;
    }>;


}

import { getProjects } from "@/services/project.service";

export async function generateStaticParams() {
    const projects = await getProjects();

    return projects.map((project) => ({
        id: project.id.toString(),
    }));
}

export default async function ProjectDetailPage({
    params,
}: ProjectDetailPageProps) {
    const { id } = await params;

    const project =
        await getProjectById(id);

    return (
        <main className="p-20">
            <h1 className="text-5xl font-bold">
                {project.title}
            </h1>

            <p className="mt-6 text-xl text-gray-400">
                {project.description}
            </p>
        </main>
    );
}