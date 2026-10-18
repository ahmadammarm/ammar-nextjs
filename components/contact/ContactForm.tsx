"use client";

import { type ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { FormField, fieldInputClass } from "@/components/contact/FormField";
import { neoButton } from "@/components/shared/neo-button";
import { toast } from "@/hooks/use-toast";
import { type ContactFormValues, contactSchema, submitContactForm } from "@/lib/contact";
import { cn } from "@/lib/utils";

const defaultValues: ContactFormValues = { name: "", email: "", message: "" };

export function ContactForm(): ReactElement {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormValues>({ resolver: zodResolver(contactSchema), defaultValues });

    const onSubmit = async (values: ContactFormValues): Promise<void> => {
        const sent = await submitContactForm(values);

        if (sent) {
            toast({ title: "Message Dispatched!", description: "Thank you for reaching out. I'll get back to you shortly." });
            reset(defaultValues);
            return;
        }

        toast({
            variant: "destructive",
            title: "Transmission Failed",
            description: "Failed to send message. Please contact directly via WhatsApp or Email.",
        });
    };

    const describedBy = (field: keyof ContactFormValues): string | undefined =>
        errors[field] ? `${field}-error` : undefined;

    return (
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
            <FormField id="name" label="Your Name" error={errors.name?.message}>
                <input
                    id="name"
                    type="text"
                    placeholder="e.g. John Doe"
                    aria-invalid={errors.name ? true : undefined}
                    aria-describedby={describedBy("name")}
                    className={fieldInputClass}
                    {...register("name")}
                />
            </FormField>

            <FormField id="email" label="Your Email Address" error={errors.email?.message}>
                <input
                    id="email"
                    type="email"
                    placeholder="e.g. john@company.com"
                    aria-invalid={errors.email ? true : undefined}
                    aria-describedby={describedBy("email")}
                    className={fieldInputClass}
                    {...register("email")}
                />
            </FormField>

            <FormField id="message" label="Message & Project Scope" error={errors.message?.message}>
                <textarea
                    id="message"
                    rows={5}
                    placeholder="Describe your project, timeline, technical requirements, or inquiry..."
                    aria-invalid={errors.message ? true : undefined}
                    aria-describedby={describedBy("message")}
                    className={cn(fieldInputClass, "resize-none")}
                    {...register("message")}
                />
            </FormField>

            <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                    neoButton(),
                    "w-full py-4 px-6 text-sm justify-center gap-2.5 disabled:opacity-50 disabled:cursor-not-allowed"
                )}
            >
                {isSubmitting ? (
                    <span>Dispatching Transmission...</span>
                ) : (
                    <>
                        <span>Dispatch Message</span>
                        <Send className="w-4 h-4" />
                    </>
                )}
            </button>
        </form>
    );
}
