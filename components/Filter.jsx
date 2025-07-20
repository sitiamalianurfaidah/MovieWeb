export default function Filter({ allTags, selectedTag, setSelectedTag }) {
    return (
        <div className="mb-6 flex flex-wrap justify-center gap-2">
            <button
                onClick={() => setSelectedTag(null)}
                className={`px-3 py-1 rounded-full border ${
                    !selectedTag
                        ? 'bg-[#a4929f] text-white'
                        : 'bg-[#f4e8ec] text-[#a4929f]'
                } border-[#a4929f] transition-colors duration-200`}
            >
                All
            </button>
            {allTags.map((tag) => (
                <button
                    key={tag}
                    onClick={() => setSelectedTag(tag)}
                    className={`px-3 py-1 rounded-full border ${
                        selectedTag === tag
                            ? 'bg-[#a4929f] text-white'
                            : 'bg-[#f4e8ec] text-[#a4929f]'
                    } border-[#a4929f] transition-colors duration-200`}
                >
                    {tag}
                </button>
            ))}
        </div>
    );
}
