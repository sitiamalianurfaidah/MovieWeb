const Tag = ({ label }) => {
    return (
        <span className="text-xs bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full border border-purple-500/30 backdrop-blur-sm shadow-sm">
        {label}
        </span>
    );
};

export default Tag;
