export default function Filter({ allTags, selectedTag, setSelectedTag }) {
    return (
        <div className="mb-6 flex flex-wrap gap-2">
        <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 rounded-full border ${
            !selectedTag ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
            }`}
        >
            All
        </button>
        {allTags.map((tag) => (
            <button
            key={tag}
            onClick={() => setSelectedTag(tag)}
            className={`px-3 py-1 rounded-full border ${
                selectedTag === tag ? 'bg-blue-600 text-white' : 'bg-white text-blue-600'
            }`}
            >
            {tag}
            </button>
        ))}
        </div>
    );
}
