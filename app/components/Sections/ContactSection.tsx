import { contact } from '@/constants/contact'
import React from 'react'

function ContactSection() {
    return (
        <div id='contact' className='w-full py-28'>
            <div className="text-center mb-10">
                <h2 className="text-5xl font-bold">Contact</h2>
            </div>

            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h3 className="text-2xl font-semibold mb-7">Jangan Ragu Untuk Mengontak Saya 📩</h3>
                    <p className="text-gray-700 dark:text-gray-500">
                        Saya selalu terbuka untuk berdiskusi tentang pengembangan produk, kolaborasi kerja, atau kemitraan. Hubungi saja saya melalui media di bawah ini.
                    </p>
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
                                    <span className="text-lg text-teal-500 font-bold">Kirim saya pesan</span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
                {/* Contact Content End */}
            </div>
        </div>
    )
}

export default ContactSection
