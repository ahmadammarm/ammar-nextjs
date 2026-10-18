import { z } from "zod";
import { SITE } from "@/constants/site";

export const contactSchema = z.object({
    name: z.string().trim().min(1, "Please enter your name."),
    email: z.string().trim().min(1, "Please enter your email.").email("Please enter a valid email address."),
    message: z.string().trim().min(1, "Please describe your project or inquiry."),
});

export type ContactFormValues = z.infer<typeof contactSchema>;

/** Posts the form to the Google Apps Script endpoint. Resolves to `true` on success. */
export async function submitContactForm(values: ContactFormValues): Promise<boolean> {
    const body = new FormData();
    body.append("name", values.name);
    body.append("email", values.email);
    // The Apps Script expects the message under the "pesan" key.
    body.append("pesan", values.message);

    try {
        const response = await fetch(SITE.contactFormEndpoint, { method: "POST", body });
        return response.ok;
    } catch {
        return false;
    }
}
