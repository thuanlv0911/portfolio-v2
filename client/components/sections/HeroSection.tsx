"use client";
import { motion } from "framer-motion";
import Container from "../ui/Container";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import {
    FaGithub,
    FaFacebook,
    FaInstagram,
} from "react-icons/fa";
export default function HeroSection() {
    return (
        <section id="home" className="flex min-h-screen items-center px-8">

            <Container>
                <div className="grid items-center gap-16 md:grid-cols-2">
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

                        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600 dark:text-gray-400">
                            I am a Front-end Developer with a passion for creating beautiful and functional user interfaces. I have experience in React, JavaScript, and CSS, and I love to learn new technologies.
                        </p>
                        <div className="mt-10 flex gap-4">
                            <Button size="lg" asChild>
                                <a href="#projects">
                                    View Projects
                                </a>
                            </Button>

                            <Button
                                variant="outline"
                                size="lg"
                                asChild
                            >
                                <a href="#contact">
                                    Contact Me
                                </a>
                            </Button>
                        </div>
                        {/* <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.4,
                            }}
                            className="mt-10 flex gap-4"
                        >
                            <button className="rounded-xl bg-white px-6 py-3 font-semibold text-black transition hover:scale-105">
                                View Projects
                            </button>

                            <button className="rounded-xl border border-gray-600 px-6 py-3 transition hover:bg-white/10">
                                Contact Me
                            </button>
                        </motion.div> */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.6,
                            }}
                            className="mt-10 flex gap-6 text-3xl"
                        >
                            <a
                                href="https://github.com/thuanlv0911"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaGithub className="transition hover:scale-110 hover:text-gray-400" />
                            </a>

                            <a
                                href="https://facebook.com/thuanlv0911"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className="transition hover:scale-110 hover:text-blue-400" />
                            </a>

                            <a
                                href="https://instagram.com/thuanlv0911"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaInstagram className="transition hover:scale-110 hover:text-pink-400" />
                            </a>
                        </motion.div>

                    </div>
                    <div className="flex justify-center">
                        <Image
                            src="/images/hxx.jpg"
                            alt="avatar"
                            width={400}
                            height={400}
                            className="rounded-full border border-white/10 shadow-2xl transition hover:scale-105"
                            priority
                        />
                    </div>
                </div>
            </Container>
        </section>
    );
}