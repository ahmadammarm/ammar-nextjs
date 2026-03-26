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
            {/* Minimal Background Decoration */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-teal-500/3 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-0 w-80 h-80 bg-teal-500/3 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                        Get In Touch
                    </h2>
                    <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
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
                                className="relative flex flex-col items-center text-center bg-white dark:bg-slate-900 shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 rounded-2xl p-6 md:p-8 h-full border border-gray-100 dark:border-slate-800 hover:border-teal-500/30 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                            >
                                {/* Gradient overlay on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-600/0 group-hover:from-teal-500/5 group-hover:to-teal-600/5 transition-all duration-500 rounded-2xl"></div>

                                {/* Icon Container */}
                                <div className="relative mb-5">
                                    <div className="absolute inset-0 bg-teal-500/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                                    <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-900/30 dark:to-teal-800/20 rounded-full flex items-center justify-center border-2 border-teal-500/30 group-hover:border-teal-500 group-hover:scale-110 transition-all duration-300">
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
                                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-2 group-hover:text-teal-500 transition-colors duration-300">
                                        {item.nama}
                                    </h3>

                                    {/* Divider */}
                                    <div className="w-12 h-0.5 bg-gradient-to-r from-teal-500 to-transparent mx-auto mb-3 group-hover:w-16 transition-all duration-300"></div>

                                    <p className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-4">
                                        {item.detail}
                                    </p>

                                    <div className="inline-flex items-center gap-2 text-teal-500 font-semibold text-sm md:text-base group-hover:gap-3 transition-all duration-300">
                                        <span>Send message</span>
                                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </div>
                                </div>

                                {/* Corner decoration */}
                                <div className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="absolute top-0 right-0 w-full h-full border-t-2 border-r-2 border-teal-500/20 rounded-tr-2xl"></div>
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
                    <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                        Connect With Me
                    </h3>
                    <div className='flex justify-center mb-8'>
                        <div className='w-16 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full'></div>
                    </div>

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
                                    className="group relative inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-slate-900 border-2 border-teal-500 rounded-xl hover:bg-teal-500 dark:hover:bg-teal-500 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-teal-500/30 hover:-translate-y-1 overflow-hidden"
                                    target='_blank'
                                >
                                    {/* Background gradient overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-teal-600 to-teal-500 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>

                                    {/* Icon */}
                                    <div className="relative z-10 text-teal-500 group-hover:text-white group-hover:scale-110 transition-all duration-300">
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
                    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl p-6 md:p-8 lg:p-10 border border-gray-100 dark:border-slate-800">
                        {/* Form Header */}
                        <div className="text-center mb-8 md:mb-10">
                            <h3 className="text-2xl md:text-3xl font-bold mb-3 text-gray-800 dark:text-gray-100">
                                Send Me a Message
                            </h3>
                            <div className='flex justify-center mb-4'>
                                <div className='w-16 h-0.5 bg-gradient-to-r from-transparent via-teal-500 to-transparent rounded-full'></div>
                            </div>
                            <p className="text-sm md:text-base text-gray-600 dark:text-gray-400">
                                Fill out the form below and I'll get back to you as soon as possible 📝
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
                                            <User className="h-5 w-5 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
                                        </div>
                                        <input
                                            type="text"
                                            name="name"
                                            id="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full pl-12 pr-4 py-3 md:py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 text-gray-900 dark:text-gray-100 placeholder-gray-400"
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
                                            <Mail className="h-5 w-5 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
                                        </div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full pl-12 pr-4 py-3 md:py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 text-gray-900 dark:text-gray-100 placeholder-gray-400"
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
                                        <MessageSquare className="h-5 w-5 text-gray-400 group-hover:text-teal-500 transition-colors duration-300" />
                                    </div>
                                    <textarea
                                        name="pesan"
                                        id="message"
                                        placeholder="Write your message here..."
                                        value={formData.pesan}
                                        onChange={handleInputChange}
                                        rows={6}
                                        className="w-full pl-12 pr-4 py-3 md:py-4 bg-gray-50 dark:bg-slate-800 border-2 border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 text-gray-900 dark:text-gray-100 placeholder-gray-400 resize-none"
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <div className="flex justify-center pt-4">
                                <button
                                    type="submit"
                                    className="group relative inline-flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-600 text-white px-8 md:px-10 py-3 md:py-4 rounded-xl font-semibold text-base md:text-lg shadow-lg hover:shadow-xl hover:shadow-teal-500/30 transition-all duration-300 overflow-hidden hover:-translate-y-1 min-w-[200px]"
                                >
                                    {/* Button gradient overlay */}
                                    <span className="absolute inset-0 bg-gradient-to-r from-teal-600 to-teal-500 transform translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300"></span>

                                    {/* Button content */}
                                    <Send className="relative z-10 w-5 h-5 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300" />
                                    <span className="relative z-10">Send Message</span>

                                    {/* Shine effect */}
                                    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></div>
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