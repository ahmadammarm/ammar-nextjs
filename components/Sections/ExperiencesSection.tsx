import { experiences } from '@/constants/experiences'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const ExperiencesSection = () => {
    return (
        <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
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
                    className="text-center mb-12 md:mb-16 lg:mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 bg-gradient-to-r from-teal-500 to-teal-600 bg-clip-text text-transparent">
                        Work Experience
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
                        Here are some of my work experiences that I have gained
                    </p>
                </motion.div>

                {/* Timeline Container - Desktop */}
                <div className="hidden lg:block relative max-w-6xl mx-auto">
                    {/* Timeline Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-teal-500/30 via-teal-500/50 to-teal-500/30"></div>

                    {/* Timeline Items */}
                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                                    <div className="relative">
                                        {/* Outer ring */}
                                        <div className="absolute inset-0 w-5 h-5 bg-teal-500/20 rounded-full"></div>
                                        {/* Main node */}
                                        <div className="relative w-5 h-5 bg-white dark:bg-slate-900 rounded-full border-3 border-teal-500 shadow-lg">
                                            <div className="absolute inset-1 bg-teal-500 rounded-full"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Timeline Card */}
                                <div className={`w-full max-w-xl ${index % 2 === 0 ? 'pr-12' : 'pl-12'
                                    }`}>
                                    <Card className="group relative bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-800 hover:border-teal-500/50 shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 rounded-2xl overflow-hidden hover:-translate-y-1">
                                        {/* Subtle gradient overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-600/0 group-hover:from-teal-500/5 group-hover:to-teal-600/5 transition-all duration-500"></div>

                                        {/* Header */}
                                        <CardHeader className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white p-6">

                                            <div className="relative z-10 space-y-3">
                                                {/* Company Name */}
                                                <CardTitle className="text-xl md:text-2xl font-bold group-hover:scale-105 transition-transform duration-300 origin-left pr-16">
                                                    {exp.nama}
                                                </CardTitle>
                                                {/* Year Badge - Desktop Positioned */}
                                                <div className="">
                                                    <Badge className="bg-white text-teal-500 px-4 py-1.5 text-sm font-bold shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                                                        {exp.tahun}
                                                    </Badge>
                                                </div>

                                                {/* Position */}
                                                <div className="flex items-center gap-2">
                                                    <div className="p-1.5 bg-white/20 rounded-lg group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                                                        <Briefcase className="w-4 h-4" />
                                                    </div>
                                                    <CardDescription className="text-sm md:text-base text-white/90 font-semibold">
                                                        {exp.jabatan}
                                                    </CardDescription>
                                                </div>

                                                {/* Contract Type */}
                                                <div className="flex items-center gap-2">
                                                    <div className="p-1.5 bg-white/20 rounded-lg group-hover:bg-white/30 group-hover:scale-110 transition-all duration-300">
                                                        <Building2 className="w-4 h-4" />
                                                    </div>
                                                    <Badge className="bg-white/20 hover:bg-white/30 text-white px-3 py-1 text-xs font-semibold border-0 transition-all duration-300">
                                                        {exp.kontrak}
                                                    </Badge>
                                                </div>
                                            </div>
                                        </CardHeader>

                                        {/* Content */}
                                        <CardContent className="relative p-6 space-y-4">
                                            <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                                <div className="w-1 h-4 bg-teal-500 rounded-full"></div>
                                                Key Responsibilities
                                            </h4>

                                            <ul className="space-y-3">
                                                {exp.deskripsi.map((item, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="group/item flex items-start gap-3 p-2 rounded-lg hover:bg-teal-50 dark:hover:bg-teal-900/10 transition-all duration-300"
                                                    >
                                                        <CheckCircle2 className="flex-shrink-0 w-4 h-4 text-teal-500 mt-0.5 group-hover/item:scale-125 transition-transform duration-300" />
                                                        <span className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors duration-300">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>

                                        {/* Corner decoration */}
                                        <div className="absolute bottom-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-teal-500/20 rounded-br-2xl"></div>
                                        </div>
                                    </Card>
                                </div>

                                {/* Connection Arrow */}
                                <div className={`absolute top-1/2 ${index % 2 === 0 ? 'right-1/2 mr-6' : 'left-1/2 ml-6'
                                    } transform -translate-y-1/2 z-10`}>
                                    <div className={`w-0 h-0 border-[6px] ${index % 2 === 0
                                        ? 'border-l-gray-200 dark:border-l-slate-800 border-t-transparent border-b-transparent border-r-transparent'
                                        : 'border-r-gray-200 dark:border-r-slate-800 border-t-transparent border-b-transparent border-l-transparent'
                                        } group-hover:scale-125 transition-transform duration-300`}></div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Timeline End Marker */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 z-20">
                        <div className="w-3 h-3 bg-teal-500 rounded-full shadow-lg animate-pulse"></div>
                    </div>
                </div>

                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden space-y-8 md:space-y-10">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <Card className="group relative bg-white dark:bg-slate-900 border-2 border-gray-100 dark:border-slate-800 hover:border-teal-500/50 shadow-lg hover:shadow-2xl hover:shadow-teal-500/10 transition-all duration-500 rounded-2xl overflow-hidden">
                                {/* Subtle gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/0 to-teal-600/0 group-hover:from-teal-500/5 group-hover:to-teal-600/5 transition-all duration-500"></div>

                                {/* Header */}
                                <CardHeader className="relative bg-gradient-to-r from-teal-500 to-teal-600 text-white p-5 md:p-6">
                                    {/* Decorative elements */}
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -translate-y-12 translate-x-12"></div>

                                    <div className="relative z-10 space-y-3">
                                        {/* Company Name */}
                                        <CardTitle className="text-lg md:text-xl font-bold pr-16">
                                            {exp.nama}
                                        </CardTitle>

                                        {/* Year Badge - Mobile */}
                                        <div>
                                            <Badge className="bg-white text-teal-500 px-3 py-1 text-xs font-bold shadow-lg">
                                                {exp.tahun}
                                            </Badge>
                                        </div>

                                        {/* Position */}
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 bg-white/20 rounded-lg">
                                                <Briefcase className="w-4 h-4" />
                                            </div>
                                            <CardDescription className="text-sm md:text-base text-white/90 font-semibold">
                                                {exp.jabatan}
                                            </CardDescription>
                                        </div>

                                        {/* Contract Type */}
                                        <div className="flex items-center gap-2">
                                            <div className="p-1.5 bg-white/20 rounded-lg">
                                                <Building2 className="w-4 h-4" />
                                            </div>
                                            <Badge className="bg-white/20 text-white px-3 py-1 text-xs font-semibold border-0">
                                                {exp.kontrak}
                                            </Badge>
                                        </div>
                                    </div>
                                </CardHeader>

                                {/* Content */}
                                <CardContent className="relative p-5 md:p-6 space-y-4">
                                    <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                                        <div className="w-1 h-4 bg-teal-500 rounded-full"></div>
                                        Key Responsibilities
                                    </h4>

                                    <ul className="space-y-3">
                                        {exp.deskripsi.map((item, itemIndex) => (
                                            <li
                                                key={itemIndex}
                                                className="flex items-start gap-3 p-2 rounded-lg"
                                            >
                                                <CheckCircle2 className="flex-shrink-0 w-4 h-4 text-teal-500 mt-0.5" />
                                                <span className="text-sm md:text-base text-gray-600 dark:text-gray-400 leading-relaxed">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>

                            {/* Mobile Timeline Connector */}
                            {index < experiences.length - 1 && (
                                <div className="flex justify-center my-6">
                                    <div className="w-0.5 h-8 bg-gradient-to-b from-teal-500/50 to-teal-500/20"></div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExperiencesSection