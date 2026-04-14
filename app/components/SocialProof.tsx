"use client";

import { useEffect, useState } from "react";

const AVATARS = [
    { letter: "J", color: "#4B5563" },
    { letter: "A", color: "#374151" },
    { letter: "M", color: "#1F2937" },
];

export default function SocialProof({ count }: { count: number }) {
    const [isBumping, setIsBumping] = useState(false);

    useEffect(() => {
        if (count > 10) { // Only bump if it's an increment from base
            setIsBumping(true);
            const timer = setTimeout(() => setIsBumping(false), 500);
            return () => clearTimeout(timer);
        }
    }, [count]);

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
                <strong 
                    className={isBumping ? "bump" : ""}
                    style={{ color: isBumping ? "var(--accent)" : "var(--text-primary)" }}
                >
                    ~{count}+
                </strong> founders already joined
            </span>
        </div>
    );
}
