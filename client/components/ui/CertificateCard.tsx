import Image from "next/image";
import { Certificate } from "@/types/certificate";

interface CertificateCardProps {
    certificate: Certificate;
}

export default function CertificateCard({
    certificate,
}: CertificateCardProps) {
    return (
        <div
            className="
      overflow-hidden
      rounded-2xl
      border border-black/10
      bg-black/5
      transition
      hover:-translate-y-2
      dark:border-white/10
      dark:bg-white/5
    "
        >
            <Image
                src={certificate.image}
                alt={certificate.title}
                width={600}
                height={400}
                className="h-52 w-full object-cover"
            />

            <div className="p-6">
                <h3 className="text-xl font-bold">
                    {certificate.title}
                </h3>

                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                    {certificate.issuer}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                    Issued: {certificate.issueDate}
                </p>

                <a
                    href={certificate.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-blue-500"
                >
                    View Credential →
                </a>
            </div>
        </div>
    );
}