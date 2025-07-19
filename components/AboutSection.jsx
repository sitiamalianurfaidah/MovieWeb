const AboutSection = () => {
    return (
        <section
        id="about"
        className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 text-gray-800"
        style={{
            background: "linear-gradient(to bottom, #d19484, #e8ad9a, #a4929f)",
        }}
        >
        <h2 className="text-6xl md:text-7xl font-extrabold mb-4 text-white drop-shadow" style={{ fontFamily: "'Playfair Display', serif" }}>
            About Cerita Films
        </h2>
        <p className="text-lg md:text-xl max-w-2xl text-white drop-shadow">
            A film production company based in Jakarta.
            <br />
            Producer <strong>Suryana Paramita</strong> & Director Writer <strong>Yandy Laurens</strong>
        </p>
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
                <svg viewBox="0 0 500 50" preserveAspectRatio="none" className="w-full h-16">
                    <path
                        d="M0,30 C150,60 350,0 500,30 L500,00 L0,0 Z"
                        style={{ fill: "#a4929f", opacity: 0.4 }}
                    ></path>
                </svg>
            </div>
        </section>
    );
};

export default AboutSection;
