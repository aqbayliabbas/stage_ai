"use server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const audienceId = process.env.RESEND_AUDIENCE_ID;

export async function saveEmail(email: string) {
    if (!process.env.RESEND_API_KEY || !audienceId) {
        console.error("Missing Resend API Key or Audience ID in environment variables.");
        return { success: false, error: "Environment configuration error." };
    }

    try {
        const { data, error } = await resend.contacts.create({
            email,
            unsubscribed: false,
            audienceId: audienceId,
        });

        if (error) {
            console.error("Resend Error:", error);
            return { success: false, error: error.message };
        }

        return { success: true, data };
    } catch (err) {
        console.error("Contact creation failed:", err);
        return { success: false, error: "Failed to join the list." };
    }
}
