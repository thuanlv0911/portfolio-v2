export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-4">
            <h1 className="text-2xl font-bold">
                Thuan.dev
            </h1>

            <ul className="flex gap-6">
                <li>Home</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}