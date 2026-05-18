import Container from "../ui/Container";
import { skills } from "@/data/skills";

export default function SkillsSection() {
    return (
        <section className="py-32">
            <Container>
                <h2 className="text-4xl font-bold">
                    Skills
                </h2>

                <div className="mt-12 flex flex-wrap gap-4">
                    {skills.map((skill) => (
                        <div
                            key={skill}
                            className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}