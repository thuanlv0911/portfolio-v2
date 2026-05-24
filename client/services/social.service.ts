import { SocialLink } from "@/types/social-link";

const API_URL =
    "http://localhost:5000/socialLinks";

export async function getSocialLinks(): Promise<
    SocialLink[]
> {
    const response = await fetch(API_URL, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error(
            "Failed to fetch social links"
        );
    }

    return response.json();
}