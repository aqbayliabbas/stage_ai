const AVATARS = [
    { letter: "J", color: "#4B5563" },
    { letter: "A", color: "#374151" },
    { letter: "M", color: "#1F2937" },
];

export default function SocialProof() {
    return (
        <div className="social-proof" id="social-proof">
            <div className="avatars">
                {AVATARS.map((a) => (
                    <div
                        key={a.letter}
                        className="avatar"
                        style={{ backgroundColor: a.color, color: "#FFFFFF" }}
                    >
                        {a.letter}
                    </div>
                ))}
            </div>
            <span className="social-text">
                <strong style={{ color: "var(--text-primary)" }}>~10+</strong> founders already joined
            </span>
        </div>
    );
}
