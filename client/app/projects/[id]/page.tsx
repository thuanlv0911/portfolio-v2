interface ProjectDetailPageProps {
    params: Promise<{
        id: string;
    }>;
}

export default async function ProjectDetailPage({
    params,
}: ProjectDetailPageProps) {
    const { id } = await params;

    return (
        <main className="p-20">
            <h1>Project ID: {id}</h1>
        </main>
    );
}