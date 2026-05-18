"use client";

import { contact } from "@/constants/contact";
import React, { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { footer } from "@/constants/footer";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare } from "lucide-react";

function ContactSection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        pesan: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const formSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const { name, email, pesan } = formData;

        if (!name || !email || !pesan) {
            toast({
                variant: "destructive",
                title: "Error",
                description: "Please fill out all fields before submitting.",
            });
            return;
        }

        const scriptURL = "https://script.google.com/macros/s/AKfycby-TIGP5hd3qZDQkAWczflI3qVDorrRt3egys1dGRolltGTEX6xI5XdumXT7CQdFqiAvA/exec";

        try {
            const formDataObject = new FormData();
            formDataObject.append("name", name);
            formDataObject.append("email", email);
            formDataObject.append("pesan", pesan);

            const response = await fetch(scriptURL, {
                method: "POST",
                body: formDataObject,
            });

            if (response.ok) {
                toast({
                    title: "Success",
                    description: "Message sent successfully.",
                });

                setFormData({
                    name: "",
                    email: "",
                    pesan: "",
                });
            } else {
                throw new Error("Failed to send message.");
            }
        } catch (error) {
            console.error("Error!", error);
            toast({
                variant: "destructive",
                title: "Error",
                description: "Failed to send message.",
            });
        }
    };

    return (
        <div className="relative w-full py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-foreground">
                        Get In Touch
                    </h1>
                    <p className="text-base md:text-lg text-gray-700 dark:text-gray-400 max-w-2xl mx-auto">
                        Feel free to reach out through any of these channels
                    </p>
                </motion.div>

                {/* Contact Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
                    {contact.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="group h-full"
                        >
                            <Link
                                href={item.link}
                                target="_blank"
                                rel="noreferrer"
                                className="relative flex flex-col items-center text-center bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark rounded-md p-6 md:p-8 h-full transition-all duration-300 overflow-hidden"
                            >
                                {/* Icon Container */}
                                <div className="relative mb-5">
                                    <div className="relative w-16 h-16 md:w-20 md:h-20 bg-brand-blue rounded-full flex items-center justify-center border-2 border-black dark:border-white shadow-neo group-hover:scale-110 transition-all duration-300">
                                        <Image
                                            src={item.icon}
                                            alt={item.nama}
                                            className="w-8 h-8 md:w-10 md:h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                                            width={40}
                                            height={40}
                                        />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative z-10">
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                                        {item.nama}
                                    </h3>

                                    {/* Divider */}
                                    <div className="w-12 h-1 bg-black dark:bg-white mx-auto mb-3 group-hover:w-16 transition-all duration-300"></div>

                                    <p className="text-sm md:text-base text-gray-700 dark:text-gray-400 mb-4">
                                        {item.detail}
                                    </p>

                                    <div className="inline-flex items-center gap-2 text-brand-blue font-bold text-sm md:text-base group-hover:gap-3 transition-all duration-300">
                                        <span>Send message</span>
                                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* Social Media Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                        Connect With Me
                    </h3>

                    {/* Social Icons */}
                    <div className="flex justify-center flex-wrap gap-4">
                        {footer.map((foot, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3, delay: index * 0.05 }}
                                viewport={{ once: true }}
                            >
                                <Link
                                    href={foot.link}
                                    className="group relative inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-background border-2 border-black dark:border-white rounded-md hover:bg-brand-blue transition-all duration-300 shadow-neo dark:shadow-neo-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
                                    target='_blank'
                                >
                                    {/* Icon */}
                                    <div className="relative z-10 text-brand-blue group-hover:text-black group-hover:scale-110 transition-all duration-300">
                                        {React.createElement(foot.logo, { className: "w-6 h-6 md:w-7 md:h-7" })}
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="bg-background rounded-md shadow-neo dark:shadow-neo-dark p-6 md:p-8 lg:p-10 border-2 border-black dark:border-white">
                        {/* Form Header */}
                        <div className="text-center mb-8 md:mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-foreground">
                                Send Me a Message
                            </h3>
                            <p className="text-sm md:text-base text-gray-700 dark:text-gray-400">
                                Fill out the form below and I&apos;ll get back to you as soon as possible
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={formSubmit} className="space-y-6">
                            {/* Name and Email Grid */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {/* Name Input */}
                                <div className="group relative">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Your Name
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <User className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full pl-12 pr-4 py-3 md:py-4 bg-background border-2 border-black dark:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all duration-300 text-foreground placeholder-gray-400 shadow-neo"
                                        />
                                    </div>
                                </div>

                                {/* Email Input */}
                                <div className="group relative">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                        Your Email
                                    </label>
                                    <div className="relative">
                                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                            <Mail className="h-5 w-5 text-gray-400" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full pl-12 pr-4 py-3 md:py-4 bg-background border-2 border-black dark:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all duration-300 text-foreground placeholder-gray-400 shadow-neo"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Message Textarea */}
                            <div className="group relative">
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                                    Your Message
                                </label>
                                <div className="relative">
                                    <div className="absolute top-4 left-4 pointer-events-none">
                                        <MessageSquare className="h-5 w-5 text-gray-400" />
                                    </div>
                                    <textarea
                                        name="pesan"
                                        id="message"
                                        placeholder="Write your message here..."
                                        value={formData.pesan}
                                        onChange={handleInputChange}
                                        rows={6}
                                        className="w-full pl-12 pr-4 py-3 md:py-4 bg-background border-2 border-black dark:border-white rounded-md focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition-all duration-300 text-foreground placeholder-gray-400 resize-none shadow-neo"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center pt-4">
                                <button
                                    type="submit"
                                    className="group relative inline-flex items-center justify-center gap-2 bg-brand-blue text-black px-8 md:px-10 py-3 md:py-4 rounded-md font-bold text-base md:text-lg border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[2px_2px_0px_0px_rgba(255,255,255,1)] transition-all duration-300 active:translate-x-[4px] active:translate-y-[4px] active:shadow-none min-w-[200px]"
                                >
                                    <Send className="relative z-10 w-5 h-5 group-hover:scale-110 transition-all duration-300" />
                                    <span className="relative z-10">Send Message</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </motion.div>
            </div>
            <Toaster />
        </div>
    );
}

export default ContactSection;