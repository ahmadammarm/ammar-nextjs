import { contact } from '@/constants/contact'
import React from 'react'

function ContactSection() {
    return (
        <div id='contact' className='w-full py-20'>
            <div className="text-center mb-10">
                <h2 className="text-5xl font-bold mb-[5rem] mt-[5rem]">Contact</h2>
            </div>

            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-semibold mb-7">Contact Me Through The Media Below 📩</h3>
                </div>

                {/* Contact Content Start */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {contact.map((item, index) => (
                        <div key={index} className="flex items-center justify-center">
                            <a href={item.link} target="_blank" rel="noreferrer" className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-4 bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 w-full">
                                <img src={item.icon} alt={item.nama} className="w-12 h-10 md:w-14 md:h-12" />
                                <div className="flex flex-col items-center md:items-start">
                                    <span className="text-2xl font-bold">{item.nama}</span>
                                    <span className="text-base text-gray-600 dark:text-gray-400">{item.detail}</span>
                                    <span className="text-lg text-teal-500 font-bold">Send me a message</span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                {/* Contact Content End */}

                {/* Form Contact */}
                <div className="mt-12">
                    <h3 className="text-2xl font-semibold mb-7">
                        Or You Can Contact Me Through The Form Below 📝
                    </h3>
                    <form action="#" method="POST" className="flex flex-col items-center">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name (Under Development)"
                            className="w-full p-4 mb-4 bg-white dark:bg-gray-800 shadow-md rounded-lg cursor-not-allowed"
                            disabled
                        />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Your Email (Under Development)"
                            className="w-full p-4 mb-4 bg-white dark:bg-gray-800 shadow-md rounded-lg cursor-not-allowed"
                            disabled
                        />
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Your Message (Under Development)"
                            className="w-full p-4 mb-4 bg-white dark:bg-gray-800 shadow-md rounded-lg cursor-not-allowed"
                            disabled
                        ></textarea>
                        <button
                            type="submit"
                            className="bg-teal-500 text-white px-4 py-3 rounded-lg cursor-not-allowed opacity-50"
                            disabled
                        >
                            Send Message (Under Development)
                        </button>
                    </form>
                </div>

            </div>
        </div>
    )
}

export default ContactSection
