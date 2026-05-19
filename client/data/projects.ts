import { Project } from "@/types/project";

export const projects: Project[] = [
    {
        id: 1,
        title: "Portfolio V2",
        description:
            "Modern portfolio built with NextJS and TailwindCSS.",
        techStack: [
            "NextJS",
            "TypeScript",
            "Tailwind",
        ],
        githubUrl: "https://github.com/",
    },

    {
        id: 2,
        title: "Event Management System",
        description:
            "Fullstack event management platform.",
        techStack: [
            "React",
            "NestJS",
            "MongoDB",
        ],
        githubUrl: "https://github.com/",
    },
];