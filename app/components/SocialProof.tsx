const AVATARS = [
    { letter: "J", color: "var(--avatar-1)" },
    { letter: "A", color: "var(--avatar-2)" },
    { letter: "M", color: "var(--avatar-3)" },
];

export default function SocialProof() {
    return (
        <div className="social-proof" id="social-proof">
            <div className="avatars">
                {AVATARS.map((a) => (
                    <div
                        key={a.letter}
                        className="avatar"
                        style={{ backgroundColor: a.color, color: "#1A1A1A" }}
                    >
                        {a.letter}
                    </div>
                ))}
            </div>
            <span className="social-text" style={{ color: "#1A1A1A" }}>
                <strong style={{ color: "#1A1A1A" }}>~10+</strong> founders already joined
            </span>
        </div>
    );
}
