import { Profile } from "@/types/profile";

const API_URL =
    "http://localhost:5000/profile";

export async function getProfile(): Promise<Profile> {
    const response = await fetch(API_URL, {
        cache: "no-store",
    });

    if (!response.ok) {
        throw new Error(
            "Failed to fetch profile"
        );
    }

    return response.json();
}