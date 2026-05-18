import { experiences } from '@/constants/experiences'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Calendar, Building2, CheckCircle2 } from 'lucide-react'
import { motion } from 'framer-motion'

const ExperiencesSection = () => {
    return (
        <section className="relative py-16 md:py-20 lg:py-24 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 md:mb-16 lg:mb-20"
                >
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-5 text-foreground">
                        Work Experiences
                    </h2>
                    <p className="text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
                        Here are some of my work experiences that I have gained
                    </p>
                </motion.div>

                {/* Timeline Container - Desktop */}
                <div className="hidden lg:block relative max-w-6xl mx-auto">
                    {/* Timeline Vertical Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-black dark:bg-white"></div>

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
                                    <div className="w-6 h-6 bg-brand-blue border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark rounded-full"></div>
                                </div>

                                {/* Timeline Card */}
                                <div className={`w-full max-w-xl ${index % 2 === 0 ? 'pr-12' : 'pl-12'
                                    }`}>
                                    <Card className="group relative bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark transition-all duration-300 rounded-md overflow-hidden">
                                        {/* Header */}
                                        <CardHeader className="relative bg-brand-blue text-black p-6 border-b-2 border-black dark:border-white">
                                            <div className="relative z-10 space-y-3">
                                                {/* Company Name */}
                                                <CardTitle className="text-xl md:text-2xl font-bold pr-16">
                                                    {exp.nama}
                                                </CardTitle>
                                                {/* Year Badge */}
                                                <div className="">
                                                    <Badge className="bg-white text-black border-2 border-black px-4 py-1.5 text-sm font-bold shadow-neo">
                                                        {exp.tahun}
                                                    </Badge>
                                                </div>

                                                {/* Position */}
                                                <div className="flex items-center gap-2">
                                                    <Briefcase className="w-4 h-4" />
                                                    <CardDescription className="text-sm md:text-base text-black font-bold">
                                                        {exp.jabatan}
                                                    </CardDescription>
                                                </div>
                                            </div>
                                        </CardHeader>

                                        {/* Content */}
                                        <CardContent className="relative p-6 space-y-4">
                                            <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                                                <div className="w-1 h-4 bg-brand-blue border border-black rounded-full"></div>
                                                Key Responsibilities
                                            </h4>

                                            <ul className="space-y-3">
                                                {exp.deskripsi.map((item, itemIndex) => (
                                                    <li
                                                        key={itemIndex}
                                                        className="group/item flex items-start gap-3 p-2 rounded-md hover:bg-brand-blue/10 transition-all duration-300"
                                                    >
                                                        <CheckCircle2 className="flex-shrink-0 w-4 h-4 text-brand-blue mt-0.5" />
                                                        <span className="text-sm md:text-base text-foreground font-medium leading-relaxed">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                                </motion.div>
                                ))}
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
                                <Card className="group relative bg-background border-2 border-black dark:border-white shadow-neo dark:shadow-neo-dark transition-all duration-300 rounded-md overflow-hidden">
                                {/* Header */}
                                <CardHeader className="relative bg-brand-blue text-black p-5 md:p-6 border-b-2 border-black dark:border-white">
                                    <div className="relative z-10 space-y-3">
                                        <CardTitle className="text-lg md:text-xl font-bold pr-16">
                                            {exp.nama}
                                        </CardTitle>

                                        <div>
                                            <Badge className="bg-white text-black border-2 border-black px-3 py-1 text-xs font-bold shadow-neo">
                                                {exp.tahun}
                                            </Badge>
                                        </div>

                                        <div className="flex items-center gap-2">
                                            <Briefcase className="w-4 h-4" />
                                            <CardDescription className="text-sm md:text-base text-black font-bold">
                                                {exp.jabatan}
                                            </CardDescription>
                                        </div>
                                    </div>
                                </CardHeader>

                                {/* Content */}
                                <CardContent className="relative p-5 md:p-6 space-y-4">
                                    <h4 className="text-sm font-bold text-foreground flex items-center gap-2">
                                        <div className="w-1 h-4 bg-brand-blue border border-black rounded-full"></div>
                                        Key Responsibilities
                                    </h4>

                                    <ul className="space-y-3">
                                        {exp.deskripsi.map((item, itemIndex) => (
                                            <li
                                                key={itemIndex}
                                                className="flex items-start gap-3 p-2 rounded-md"
                                            >
                                                <CheckCircle2 className="flex-shrink-0 w-4 h-4 text-brand-blue mt-0.5" />
                                                <span className="text-sm md:text-base text-foreground font-bold leading-relaxed">
                                                    {item}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                                </Card>
                                </motion.div>
                                ))}
                                </div>            </div>
        </section>
    )
}

export default ExperiencesSection