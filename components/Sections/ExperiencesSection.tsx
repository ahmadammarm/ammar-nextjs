import { experiences } from '@/constants/experiences'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Calendar, Building2, MapPin } from 'lucide-react'

const ExperiencesSection = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-gray-700 dark:text-gray-400 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                        Here are some of my work experiences that I have gained.
                    </p>
                </div>

                {/* Timeline Container */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline Line */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-teal-400 via-blue-500 to-purple-600 rounded-full shadow-lg"></div>

                    {/* Timeline Items */}
                    <div className="space-y-16">
                        {experiences.map((exp, index) => (
                            <div
                                key={index}
                                className={`relative flex items-center ${
                                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                                }`}
                                style={{
                                    animationDelay: `${index * 300}ms`,
                                    animation: 'fadeInScale 0.8s ease-out forwards'
                                }}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
                                    <div className="w-6 h-6 bg-white dark:bg-gray-800 rounded-full border-4 border-teal-500 shadow-lg">
                                        <div className="w-full h-full bg-gradient-to-r from-teal-400 to-blue-500 rounded-full animate-pulse"></div>
                                    </div>
                                    {/* Timeline Year Badge */}
                                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-3 py-1 text-xs font-bold shadow-lg">
                                            {exp.tahun}
                                        </Badge>
                                    </div>
                                </div>

                                {/* Timeline Card */}
                                <div className={`w-full max-w-md ${
                                    index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'
                                }`}>
                                    <Card className="group overflow-hidden bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-500 ease-out relative">
                                        {/* Hover Gradient Border */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-teal-500 via-blue-500 to-purple-500 p-[2px] rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            <div className="bg-white dark:bg-gray-800 rounded-xl h-full w-full"></div>
                                        </div>

                                        <CardHeader className="bg-gradient-to-r from-teal-600 to-blue-600 text-white p-6 relative overflow-hidden">
                                            {/* Background Decorations */}
                                            <div className="absolute top-0 right-0 w-24 h-24 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
                                            <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/5 rounded-full translate-y-8 -translate-x-8"></div>

                                            <CardTitle className="text-xl font-bold mb-2 relative z-10 group-hover:text-yellow-200 transition-colors duration-300">
                                                {exp.nama}
                                            </CardTitle>
                                            <div className="flex items-center space-x-2 relative z-10 mb-2">
                                                <div className="p-1.5 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                                                    <Briefcase className="w-4 h-4" />
                                                </div>
                                                <CardDescription className="text-sm text-gray-100 font-medium">
                                                    {exp.jabatan}
                                                </CardDescription>
                                            </div>
                                            <div className="flex items-center space-x-2 relative z-10">
                                                <div className="p-1.5 bg-white/20 rounded-full">
                                                    <Building2 className="w-4 h-4" />
                                                </div>
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-white/20 text-white px-2 py-1 text-xs font-semibold"
                                                >
                                                    {exp.kontrak}
                                                </Badge>
                                            </div>
                                        </CardHeader>

                                        <CardContent className="p-6 relative">
                                            <div className="space-y-4">
                                                <div className="border-b border-gray-200 dark:border-gray-600 pb-4">
                                                    <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400 mb-3 flex items-center">
                                                        <MapPin className="w-4 h-4 mr-2 text-teal-500" />
                                                        Key Responsibilities
                                                    </h4>
                                                </div>

                                                <ul className="space-y-2">
                                                    {exp.deskripsi.map((item, itemIndex) => (
                                                        <li
                                                            key={itemIndex}
                                                            className="flex items-start space-x-3 group/item hover:bg-teal-50 dark:hover:bg-teal-900/20 p-2 rounded-lg transition-all duration-300"
                                                        >
                                                            <div className="flex-shrink-0 w-1.5 h-1.5 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mt-2 group-hover/item:scale-150 transition-transform duration-300"></div>
                                                            <span className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors duration-300">
                                                                {item}
                                                            </span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>

                                {/* Timeline Connector Arrow */}
                                <div className={`absolute top-1/2 ${
                                    index % 2 === 0 ? 'right-1/2 mr-3' : 'left-1/2 ml-3'
                                } transform -translate-y-1/2 z-10`}>
                                    <div className={`w-0 h-0 border-8 ${
                                        index % 2 === 0
                                            ? 'border-l-teal-500 border-t-transparent border-b-transparent border-r-transparent'
                                            : 'border-r-teal-500 border-t-transparent border-b-transparent border-l-transparent'
                                    } group-hover:scale-110 transition-transform duration-300`}></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Timeline End */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-20">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-lg animate-pulse"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeInScale {
                    from {
                        opacity: 0;
                        transform: scale(0.8) translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: scale(1) translateY(0);
                    }
                }

                .bg-grid-pattern {
                    background-image: radial-gradient(circle, #6366f1 1px, transparent 1px);
                    background-size: 50px 50px;
                }

                /* Mobile Responsive Timeline */
                @media (max-width: 768px) {
                    .timeline-mobile {
                        display: block;
                    }

                    .timeline-desktop {
                        display: none;
                    }
                }
            `}</style>
        </section>
    )
}

export default ExperiencesSection