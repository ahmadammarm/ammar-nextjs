"use client"

import { services } from "@/constants/services";
import { contact } from "@/constants/contact";
import { motion } from "framer-motion";
import { Layout, Bot, Cpu, Check, MessageCircle } from "lucide-react";

const icons: any = {
    Layout: <Layout className="w-8 h-8" />,
    Bot: <Bot className="w-8 h-8" />,
    Cpu: <Cpu className="w-8 h-8" />
};

export default function ServicesPage() {
    const whatsappContact = contact.find(c => c.nama === "WhatsApp");
    const baseWhatsappUrl = whatsappContact ? whatsappContact.link : "https://wa.me/6281217952403";

    return (
        <div className="min-h-screen py-20 px-4 md:px-8 max-w-7xl mx-auto mt-16">
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-16"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6">Services</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                    I build intelligent, high-performance web solutions tailored to your business needs.
                </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {services.map((service, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="bg-background border-4 border-black dark:border-white p-8 shadow-neo dark:shadow-neo-dark flex flex-col h-full"
                    >
                        <div className="bg-brand-blue p-4 border-2 border-black inline-block mb-6 shadow-neo-sm">
                            {icons[service.icon]}
                        </div>
                        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">
                            {service.description}
                        </p>
                        <ul className="space-y-3 mb-8">
                            {service.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-center gap-2">
                                    <Check className="w-5 h-5 text-brand-blue" />
                                    <span className="font-medium">{feature}</span>
                                </li>
                            ))}
                        </ul>
                        <a 
                            href={`${baseWhatsappUrl}?text=${encodeURIComponent(service.whatsappMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-brand-blue text-black font-bold py-4 px-6 border-2 border-black shadow-neo hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
                        >
                            <MessageCircle className="w-5 h-5" />
                            Book Now
                        </a>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}
