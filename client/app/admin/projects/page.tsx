import Link from "next/link";
import { getProjects } from "@/services/project.service";

export default async function AdminProjectsPage() {
    const projects = await getProjects();

    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-5xl font-bold">
                        Projects
                    </h1>

                    <p className="mt-3 text-gray-500">
                        Manage your portfolio projects.
                    </p>
                </div>

                <Link
                    href="/admin/projects/new"
                    className="
            rounded-xl
            bg-black
            px-5
            py-3
            font-semibold
            text-white
            dark:bg-white
            dark:text-black
          "
                >
                    Add Project
                </Link>
            </div>

            <div
                className="
        mt-10
        overflow-hidden
        rounded-2xl
        border border-black/10
        dark:border-white/10
      "
            >
                <table className="w-full">
                    <thead
                        className="
            border-b
            border-black/10
            bg-black/5
            dark:border-white/10
            dark:bg-white/5
          "
                    >
                        <tr>
                            <th className="p-5 text-left">
                                Title
                            </th>

                            <th className="p-5 text-left">
                                Stack
                            </th>

                            <th className="p-5 text-left">
                                Actions
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {projects.map((project) => (
                            <tr
                                key={project.id}
                                className="
                  border-b
                  border-black/10
                  dark:border-white/10
                "
                            >
                                <td className="p-5">
                                    {project.title}
                                </td>

                                <td className="p-5">
                                    {project.techStack.join(
                                        ", "
                                    )}
                                </td>

                                <td className="p-5">
                                    <div className="flex gap-5">
                                        <Link
                                            href={`/admin/projects/edit/${project.id}`}
                                        >
                                            Edit
                                        </Link>

                                        <button>
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}