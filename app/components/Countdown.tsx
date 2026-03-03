"use client";

import { useState, useEffect } from "react";

/* ── target date: ~225 days from 2026-03-03 ─────────────────────────────── */
const TARGET_DATE = new Date("2026-03-14T00:00:00");

interface TimeLeft {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}

function getTimeLeft(): TimeLeft {
    const now = Date.now();
    const diff = Math.max(TARGET_DATE.getTime() - now, 0);
    return {
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
    };
}

const pad = (n: number) => String(n).padStart(2, "0");

const UNITS: { key: keyof TimeLeft; label: string }[] = [
    { key: "days", label: "Days" },
    { key: "hours", label: "Hours" },
    { key: "minutes", label: "Minutes" },
    { key: "seconds", label: "Seconds" },
];

export default function Countdown() {
    const [time, setTime] = useState<TimeLeft>(getTimeLeft);

    useEffect(() => {
        const id = setInterval(() => setTime(getTimeLeft()), 1000);
        return () => clearInterval(id);
    }, []);

    return (
        <div className="countdown" id="countdown-timer">
            {UNITS.map((unit) => (
                <div key={unit.key} className="countdown-unit">
                    <span className="countdown-number">
                        {unit.key === "days" ? time[unit.key] : pad(time[unit.key])}
                    </span>
                    <span className="countdown-label">{unit.label}</span>
                </div>
            ))}
        </div>
    );
}
