import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <main>
      <Navbar />

      <section className="px-8 py-20">
        <h1 className="text-6xl font-bold">
          Fullstack Developer
        </h1>

        <p className="mt-4 text-gray-400">
          React, NextJS, NestJS, MongoDB
        </p>
      </section>
    </main>
  );
}