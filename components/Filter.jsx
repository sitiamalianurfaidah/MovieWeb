import { Poppins } from "next/font/google";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "600"] });

export default function Filter({ allTags, selectedTag, setSelectedTag }) {
    return (
        <div className="mb-6 flex flex-wrap justify-center gap-2">
            <button
                onClick={() => setSelectedTag(null)}
                className={`${poppins.className} px-3 py-1 rounded-full border ${
                    !selectedTag
                        ? 'bg-[#522b63] text-white'
                        : 'bg-[#f4e8ec] text-[#522b63]'
                } border-[#cbb7d3] transition-colors duration-200`}
            >
                All
            </button>
            {allTags.map((tag) => (
                <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`${poppins.className} px-3 py-1 rounded-full border ${
                        selectedTag === tag
                            ? 'bg-[#522b63] text-white'
                            : 'bg-[#f4e8ec] text-[#522b63]'
                    } border-[#cbb7d3] transition-colors duration-200`}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
}
