import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">🎬 Cerita Films</h1>
        <nav className="space-x-4">
            <Link href="/">Home</Link>
            <Link href="/favorites">Favorites</Link>
        </nav>
        </header>
    );
}
