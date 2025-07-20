// components/Stars.js
export default function Stars({ count = 10 }) {
    const stars = Array.from({ length: count }, (_, i) => ({
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: `${Math.random() * 4 + 0.5}px`, // ukuran kecil random antara 0.5px - 2px
        key: i,
    }));

    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            {stars.map(({ top, left, size, key }) => (
                <div
                    key={key}
                    className="star"
                    style={{
                        top,
                        left,
                        width: size,
                        height: size,
                        position: 'absolute',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        filter: 'drop-shadow(0 0 2px white)',
                        opacity: 0.7,
                    }}
                />
            ))}
        </div>
    );
}
