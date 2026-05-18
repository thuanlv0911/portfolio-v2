import Container from "../ui/Container";

export default function Navbar() {
    return (
        <nav className="py-4">
            <Container>
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">
                        Thuan.dev
                    </h1>

                    <ul className="flex gap-6">
                        <li>Home</li>
                        <li>Projects</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
}