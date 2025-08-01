"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Cinzel } from "next/font/google";

const cinzel = Cinzel({ subsets: ["latin"], weight: "700" });

export default function Header() {
    const [scrollWidth, setScrollWidth] = useState(0);
    const pathname = usePathname();

    useEffect(() => {
        const handleScrollProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.body.scrollHeight - window.innerHeight;
            const scrolled = (scrollTop / docHeight) * 100;
            setScrollWidth(scrolled);
        };

        window.addEventListener("scroll", handleScrollProgress);
        return () => window.removeEventListener("scroll", handleScrollProgress);
    }, []);

    // Jika di halaman favorites, hanya tampilkan tombol back
    if (pathname === "/favorites" || pathname === "/merch" || (pathname && pathname.startsWith("/movies/"))) {
        return (
            <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-[#3b1e47]/80 text-white">
                <div className="max-w-7xl mx-auto px-8 py-5">
                    <Link
                        href="/"
                        className="text-sm md:text-base text-white hover:text-orange-300 transition"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </header>
        );
    }

    // Tampilan navbar normal
    return (
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-[#3b1e47]/90 text-white">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-5">
                <h1 className={`${cinzel.className} text-2xl font-bold tracking-wide text-shadow`}>
                    Cerita Films
                </h1>

                <nav className="{${poppins.className} flex flex-wrap justify-center gap-4 text-sm md:text-base">
                    <NavLink href="/#hero" label="Home" />
                    <NavLink href="#about" label="About" scrollId="about" />
                    <NavLink href="#featured" label="Featured" scrollId="featured" />
                    <NavLink href="#movielist" label="Movie List" scrollId="movielist" />
                    <NavLink href="#testimonials" label="Reviews" scrollId="testimonials" />
                    <Link
                        href="/favorites"
                        className="nav-btn"
                    >
                        Favorites
                    </Link>
                    <Link
                        href="/merch"
                        className="nav-btn"
                    >
                        Merchandise
                    </Link>
                </nav>
            </div>

            <div
                className="h-[4px] bg-gradient-to-r from-pink-300 via-purple-400 to-indigo-400 transition-all duration-200"
                style={{ width: `${scrollWidth}%` }}
            />
        </header>
    );
}

function NavLink({ href, label, scrollId }) {
    const handleClick = (e) => {
        if (scrollId) {
            e.preventDefault();
            const section = document.getElementById(scrollId);
            if (section) {
                section.scrollIntoView({ behavior: "smooth" });
            }
        }
    };

    return (
        <a
            href={href}
            onClick={handleClick}
            className="nav-btn"
        >
            {label}
        </a>
    );
}
