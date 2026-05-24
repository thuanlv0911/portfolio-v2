import { Project } from "@/types/project";

const API_URL =
    "http://localhost:5000/projects";

export async function getProjects(): Promise<Project[]> {
    const response = await fetch(API_URL, {
        next: {
            revalidate: 10,
        },
    });

    if (!response.ok) {
        throw new Error(
            "Failed to fetch projects"
        );
    }

    return response.json();
}

export async function getProjectById(
    id: string
): Promise<Project> {
    const response = await fetch(
        `${API_URL}/${id}`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        throw new Error(
            "Failed to fetch project"
        );
    }

    return response.json();
}