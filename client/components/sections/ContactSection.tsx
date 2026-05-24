import Container from "../ui/Container";

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="py-32"
        >
            <Container>
                <h2 className="text-4xl font-bold">
                    Contact
                </h2>

                <p className="mt-6 text-gray-400">
                    Feel free to contact me for
                    collaborations or opportunities.
                </p>

                <button className="mt-8 rounded-xl bg-white px-6 py-3 font-semibold text-black">
                    Contact Me
                </button>
            </Container>
        </section>
    );
}