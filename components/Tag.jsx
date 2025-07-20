const Tag = ({ label }) => {
    return (
        <span className="text-xs bg-[#522b63] text-white px-3 py-1 rounded-full border border-purple-500/30 backdrop-blur-sm shadow-sm">
        {label}
        </span>
    );
};

export default Tag;
