"use client";

import { contact } from "@/constants/contact";
import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { footer } from "@/constants/footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, ArrowUpRight, Copy, Check, Clock, MapPin } from "lucide-react";

export default function ContactSection(): React.JSX.Element {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        pesan: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

    const handleInputChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const copyToClipboard = (text: string, index: number, e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        navigator.clipboard.writeText(text);
        setCopiedIndex(index);
        toast({
            title: "Copied!",
            description: `${text} copied to clipboard.`,
        });
        setTimeout(() => setCopiedIndex(null), 2000);
    };

    const formSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, pesan } = formData;

        if (!name.trim() || !email.trim() || !pesan.trim()) {
            toast({
                variant: "destructive",
                title: "Incomplete Fields",
                description: "Please fill in your name, email, and message before dispatching.",
            });
            return;
        }

        setIsSubmitting(true);
        const scriptURL =
            "https://script.google.com/macros/s/AKfycby-TIGP5hd3qZDQkAWczflI3qVDorrRt3egys1dGRolltGTEX6xI5XdumXT7CQdFqiAvA/exec";

        try {
            const formDataObject = new FormData();
            formDataObject.append("name", name.trim());
            formDataObject.append("email", email.trim());
            formDataObject.append("pesan", pesan.trim());

            const response = await fetch(scriptURL, {
                method: "POST",
                body: formDataObject,
            });

            if (response.ok) {
                toast({
                    title: "Message Dispatched!",
                    description: "Thank you for reaching out. I'll get back to you shortly.",
                });

                setFormData({
                    name: "",
                    email: "",
                    pesan: "",
                });
            } else {
                throw new Error("Failed to dispatch message.");
            }
        } catch (error) {
            console.error("Submission Error:", error);
            toast({
                variant: "destructive",
                title: "Transmission Failed",
                description: "Failed to send message. Please contact directly via WhatsApp or Email.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="w-full min-h-screen py-16 md:py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12 md:mb-16 max-w-3xl mx-auto"
                >
                    <div className="inline-block px-3.5 py-1 bg-brand-blue text-black text-xs md:text-sm font-black uppercase tracking-wider border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] mb-4">
                        Communication Protocol
                    </div>
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-foreground leading-[1.05]">
                        Let&apos;s Start a <span className="text-brand-blue">Conversation</span>
                    </h1>
                    <p className="text-base sm:text-lg text-muted-foreground mt-4 leading-relaxed">
                        Have a project inquiry, collaboration proposal, or technical question? Reach out directly via the direct channels or send a transmission through the form below.
                    </p>
                </motion.div>

                {/* 2-Column Grid: Channels (Left) & Dispatch Window (Right) */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
                    {/* Left Column: Direct Channels & Status (5 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="lg:col-span-5 space-y-6"
                    >
                        {/* Availability Status Card */}
                        <div className="bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark p-5 md:p-6">
                            <div className="flex items-center gap-2.5 pb-3 border-b-2 border-black dark:border-white mb-4">
                                <span className="w-3 h-3 bg-emerald-500 border border-black dark:border-white animate-pulse" />
                                <span className="text-xs font-black uppercase tracking-wider text-foreground">
                                    Current Availability: Open
                                </span>
                            </div>

                            <div className="space-y-3 text-xs sm:text-sm font-medium">
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold text-foreground">Location</p>
                                        <p className="text-muted-foreground">Malang City, Indonesia (UTC+7)</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Clock className="w-4 h-4 text-brand-blue flex-shrink-0 mt-0.5" />
                                    <div>
                                        <p className="font-bold text-foreground">Response Window</p>
                                        <p className="text-muted-foreground">Usually within 24 hours on workdays</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Direct Channels */}
                        <div className="space-y-4">
                            <div className="inline-block px-3 py-1 bg-brand-blue text-black border-2 border-black dark:border-white text-xs font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                                Direct Channels
                            </div>

                            {contact.map((item, index) => {
                                const isCopied = copiedIndex === index;

                                return (
                                    <div
                                        key={index}
                                        className="group relative bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark p-4 sm:p-5 flex items-center justify-between gap-4 transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-hover dark:hover:shadow-neo-hover-dark active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-active dark:active:shadow-neo-active-dark cursor-default"
                                    >
                                        {/* Icon & Details */}
                                        <div className="flex items-center gap-4 min-w-0">
                                            <div className="w-12 h-12 flex-shrink-0 bg-brand-blue border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] flex items-center justify-center p-2">
                                                <Image
                                                    src={item.icon}
                                                    alt={item.nama}
                                                    width={26}
                                                    height={26}
                                                    className="object-contain"
                                                />
                                            </div>

                                            <div className="min-w-0">
                                                <h2 className="text-base font-black text-foreground uppercase tracking-tight">
                                                    {item.nama}
                                                </h2>
                                                <p className="text-xs sm:text-sm font-mono text-muted-foreground truncate">
                                                    {item.detail}
                                                </p>
                                            </div>
                                        </div>

                                        {/* Actions: Copy & Direct Link */}
                                        <div className="flex items-center gap-2 flex-shrink-0">
                                            <button
                                                type="button"
                                                onClick={(e) => copyToClipboard(item.detail, index, e)}
                                                className="p-2 bg-background border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 cursor-pointer"
                                                title="Copy to clipboard"
                                                aria-label={`Copy ${item.nama}`}
                                            >
                                                {isCopied ? (
                                                    <Check className="w-4 h-4 text-emerald-600" />
                                                ) : (
                                                    <Copy className="w-4 h-4 text-foreground" />
                                                )}
                                            </button>

                                            <Link
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 bg-brand-blue text-black border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 cursor-pointer"
                                                title={`Open ${item.nama}`}
                                                aria-label={`Open ${item.nama}`}
                                            >
                                                <ArrowUpRight className="w-4 h-4" />
                                            </Link>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Social Networks Bar */}
                        <div className="bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark p-5">
                            <span className="text-xs font-black uppercase tracking-wider text-muted-foreground block mb-3">
                                Social Networks &amp; Code Repositories
                            </span>
                            <div className="flex items-center gap-3">
                                {footer.map((item, index) => {
                                    const Icon = item.logo;
                                    return (
                                        <Link
                                            key={index}
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-11 h-11 bg-background text-foreground border-2 border-black dark:border-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_0px_rgba(0,0,0,1)] dark:active:shadow-[1px_1px_0px_0px_rgba(255,255,255,1)] transition-all duration-200 flex items-center justify-center cursor-pointer"
                                            aria-label="Social Link"
                                        >
                                            <Icon className="w-5 h-5" />
                                        </Link>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column: Transmission Window & Form (7 cols) */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-background border-2 border-black dark:border-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)] p-4 sm:p-6 md:p-8">
                            {/* Window Inspector Bar */}
                            <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-black dark:border-white">
                                <div className="flex items-center gap-1.5">
                                    <span className="w-3 h-3 bg-red-500 border border-black dark:border-white inline-block" />
                                    <span className="w-3 h-3 bg-yellow-400 border border-black dark:border-white inline-block" />
                                    <span className="w-3 h-3 bg-emerald-500 border border-black dark:border-white inline-block" />
                                </div>
                                <span className="font-mono text-xs font-black uppercase tracking-widest text-muted-foreground">
                                    DISPATCH_STATION_v2.EXE
                                </span>
                            </div>

                            {/* Form Header */}
                            <div className="mb-8">
                                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground mb-2">
                                    Send Direct Transmission
                                </h2>
                                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                                    Fill in your project brief or contact details. All incoming dispatches are forwarded directly to my primary inbox.
                                </p>
                            </div>

                            {/* Form */}
                            <form onSubmit={formSubmit} className="space-y-6">
                                {/* Name Input */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="name"
                                        className="block text-xs font-black uppercase tracking-wider text-foreground"
                                    >
                                        Your Name <span className="text-brand-blue">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        required
                                        placeholder="e.g. John Doe"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-background border-2 border-black dark:border-white text-foreground text-sm font-medium placeholder:text-muted-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] focus:outline-none focus:bg-brand-blue/5 transition-all"
                                    />
                                </div>

                                {/* Email Input */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="email"
                                        className="block text-xs font-black uppercase tracking-wider text-foreground"
                                    >
                                        Your Email Address <span className="text-brand-blue">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        required
                                        placeholder="e.g. john@company.com"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-background border-2 border-black dark:border-white text-foreground text-sm font-medium placeholder:text-muted-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] focus:outline-none focus:bg-brand-blue/5 transition-all"
                                    />
                                </div>

                                {/* Message Textarea */}
                                <div className="space-y-2">
                                    <label
                                        htmlFor="pesan"
                                        className="block text-xs font-black uppercase tracking-wider text-foreground"
                                    >
                                        Message &amp; Project Scope <span className="text-brand-blue">*</span>
                                    </label>
                                    <textarea
                                        name="pesan"
                                        id="pesan"
                                        required
                                        rows={5}
                                        placeholder="Describe your project, timeline, technical requirements, or inquiry..."
                                        value={formData.pesan}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-background border-2 border-black dark:border-white text-foreground text-sm font-medium placeholder:text-muted-foreground shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] focus:outline-none focus:bg-brand-blue/5 transition-all resize-none"
                                    />
                                </div>

                                {/* Submit Action */}
                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 px-6 bg-brand-blue text-black border-2 border-black dark:border-white font-black text-sm uppercase tracking-wider shadow-neo dark:shadow-neo-dark hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-neo-hover dark:hover:shadow-neo-hover-dark active:translate-x-[2px] active:translate-y-[2px] active:shadow-neo-active dark:active:shadow-neo-active-dark disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2.5 cursor-pointer"
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
                        </div>
                    </motion.div>
                </div>
            </div>
            <Toaster />
        </div>
    );
}
