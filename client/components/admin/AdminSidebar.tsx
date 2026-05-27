"use client";

import { adminLinks } from "@/data/admin-link";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside
            className="
      w-72
      border-r
      border-black/10
      bg-white
      p-6
      dark:border-white/10
      dark:bg-black/20
    "
        >
            <h2 className="text-3xl font-bold">
                CMS Panel
            </h2>

            <nav className="mt-10 flex flex-col gap-2">
                {adminLinks.map((link) => {
                    const isActive =
                        pathname === link.href;

                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={`
                rounded-xl
                px-4
                py-3
                transition

                ${isActive
                                    ? "bg-black text-white dark:bg-white dark:text-black"
                                    : "hover:bg-black/5 dark:hover:bg-white/10"
                                }
              `}
                        >
                            {link.label}
                        </Link>
                    );
                })}
            </nav>
        </aside>
    );
}