import Container from "../ui/Container";
import CertificateCard from "../ui/CertificateCard";
import { certificates } from "@/data/certificates";

export default function CertificatesSection() {
    return (
        <section
            id="certifications"
            className="py-32"
        >
            <Container>
                <h2 className="text-4xl font-bold">
                    Certifications
                </h2>

                <div className="mt-12 grid gap-8 md:grid-cols-2">
                    {certificates.map((certificate) => (
                        <CertificateCard
                            key={certificate.id}
                            certificate={certificate}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}