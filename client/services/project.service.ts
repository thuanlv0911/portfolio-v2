import { Project } from "@/types/project";

const API_URL =
    "http://localhost:5000/projects";

export async function getProjects(): Promise<Project[]> {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error(
            "Failed to fetch projects"
        );
    }

    return response.json();
}