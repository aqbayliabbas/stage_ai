"use client";

import { useState, useCallback } from "react";
import { saveEmail } from "@/app/actions";

type Status = "idle" | "success" | "error" | "loading";

export default function EmailForm({ onSuccess }: { onSuccess?: () => void }) {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<Status>("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = useCallback(async () => {
        const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (valid) {
            setStatus("loading");
            const result = await saveEmail(email);
            if (result.success) {
                setStatus("success");
                setEmail("");
                if (onSuccess) onSuccess();
            } else {
                setStatus("error");
                setErrorMessage(result.error || "Something went wrong.");
            }
        } else {
            setStatus("error");
            setErrorMessage("Please enter a valid email address.");
        }
    }, [email]);

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") handleSubmit();
    };

    return (
        <div className="email-form-container">
            <div className="email-row">
                <input
                    id="email-input"
                    className={`email-input${status === "error" ? " error" : ""}`}
                    type="email"
                    placeholder="marclou@codefa.st"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                        if (status !== "idle") setStatus("idle");
                    }}
                    onKeyDown={handleKeyDown}
                />
                <button
                    id="cta-button"
                    className="cta-btn"
                    onClick={handleSubmit}
                    disabled={status === "loading"}
                >
                    {status === "loading" ? "Joining..." : "Get Notified"}
                </button>
            </div>

            {status === "success" && (
                <p className="success-msg" id="success-msg">
                    🎉 You&apos;re on the list! We&apos;ll reach out soon.
                </p>
            )}
            {status === "error" && (
                <p className="error-msg" id="error-msg">
                    {errorMessage}
                </p>
            )}
        </div>
    );
}
