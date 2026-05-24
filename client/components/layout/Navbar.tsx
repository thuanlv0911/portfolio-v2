"use client";
import Container from "../ui/Container";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";
import { navLinks } from "@/data/nav-links";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="sticky top-0 z-50 border-b border-white/10 bg-black/20 py-4 backdrop-blur">
            <Container>
                <div className="flex items-center justify-between">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden"
                    >
                        <Menu />
                    </button>
                    <h1 className="text-2xl font-bold">
                        Thuans Portfolio
                    </h1>
                    <ul className="hidden items-center gap-8 md:flex">
                        {navLinks.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className="relative text-sm text-gray-300 transition hover:text-white"

                                >
                                    <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>



                    <ThemeToggle />
                    {isOpen && (
                        <div className="absolute left-0 top-full w-full border-b border-white/10 bg-[#020617] md:hidden">
                            <ul className="flex flex-col p-6">
                                {navLinks.map((link) => (
                                    <li key={link.href}>
                                        <a
                                            href={link.href}
                                            className="block py-3"
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>

            </Container>
        </nav>
    );
}