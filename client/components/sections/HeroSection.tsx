"use client";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import {
    FaGithub,
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";
export default function HeroSection() {
    return (
        <section className="flex min-h-screen items-center px-8">

            <Container>
                <div className="max-w-3xl">
                    <p className="mb-4 text-blue-400">
                        Fullstack Developer
                    </p>

                    <motion.h1
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-5xl font-bold leading-tight md:text-7xl"
                    >
                        Hi, I am Thuan.
                    </motion.h1>

                    <motion.h2
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.2,
                        }}
                        className="mt-4 text-4xl font-semibold text-gray-300 md:text-6xl"
                    >
                        I am a
                        Front-end Developer!
                    </motion.h2>

                    <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-400">
                        I am a Front-end Developer with a passion for creating beautiful and functional user interfaces. I have experience in React, JavaScript, and CSS, and I love to learn new technologies.
                    </p>

                    <div className="mt-10 flex gap-4">
                        <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
                            View Projects
                        </button>

                        <button className="rounded-xl border border-gray-600 px-6 py-3 transition hover:bg-white/10">
                            Contact Me
                        </button>
                    </div>
                    <div className="mt-10 flex gap-6 text-3xl">
                        <a
                            href="https://github.com/thuanlv0911"
                            target="_blank"
                        >
                            <FaGithub className="transition hover:scale-110 hover:text-gray-400" />
                        </a>

                        <a
                            href="https://facebook.com/thuanlv0911"
                            target="_blank"
                        >
                            <FaFacebook className="transition hover:scale-110 hover:text-blue-400" />
                        </a>

                        <a
                            href="https://instagram.com/thuanlv0911"
                            target="_blank"
                        >
                            <FaInstagram className="transition hover:scale-110 hover:text-pink-400" />
                        </a>
                    </div>
                </div>
            </Container>
        </section>
    );
}