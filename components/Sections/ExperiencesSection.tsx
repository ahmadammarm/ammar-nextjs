import { experiences } from '@/constants/experiences'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Calendar, Building2} from 'lucide-react'

const ExperiencesSection = () => {
    return (
        <section className="py-20 bg-gradient-to-br relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="absolute top-10 left-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
            
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-16">
                    <p className="text-gray-700 dark:text-gray-400 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                        Here are some of the companies where I have worked
                    </p>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
                    {experiences.map((exp, index) => (
                        <div 
                            key={index} 
                            className="group transform hover:scale-105 transition-all duration-500 ease-out"
                            style={{
                                animationDelay: `${index * 200}ms`,
                                animation: 'fadeInUp 0.8s ease-out forwards'
                            }}
                        >
                            <Card className="overflow-hidden bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border-0 shadow-2xl hover:shadow-3xl transition-all duration-500 ease-out group-hover:shadow-teal-200/50 dark:group-hover:shadow-teal-900/30 relative">
                                <div className="absolute inset-0 bg-teal-500 p-[1px] rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                    <div className="bg-white dark:bg-gray-800 rounded-lg h-full w-full"></div>
                                </div>
                                
                                <CardHeader className="bg-teal-600 text-white p-8 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                                    
                                    <CardTitle className="text-2xl md:text-3xl font-bold mb-3 relative z-10 group-hover:text-yellow-200 transition-colors duration-300">
                                        {exp.nama}
                                    </CardTitle>
                                    <div className="flex items-center space-x-3 relative z-10">
                                        <div className="p-2 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-300">
                                            <Briefcase className="w-5 h-5" />
                                        </div>
                                        <CardDescription className="text-base text-gray-100 font-medium">
                                            {exp.jabatan}
                                        </CardDescription>
                                    </div>
                                </CardHeader>
                                
                                <CardContent className="p-8 relative">
                                    <div className="space-y-6">
                                        <div className="flex items-center justify-between flex-wrap gap-4">
                                            <div className="flex items-center space-x-3">
                                                <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-full">
                                                    <Calendar className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                                                </div>
                                                <span className="text-gray-700 dark:text-gray-300 font-semibold">
                                                    {exp.tahun}
                                                </span>
                                            </div>
                                            <div className="flex items-center space-x-3">
                                                <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-full">
                                                    <Building2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                                                </div>
                                                <Badge 
                                                    variant="secondary" 
                                                    className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-4 py-2 text-sm font-semibold shadow-lg hover:shadow-xl transition-shadow duration-300"
                                                >
                                                    {exp.kontrak}
                                                </Badge>
                                            </div>
                                        </div>
                                        
                                        <div className="border-t border-gray-200 dark:border-gray-600 pt-6">
                                            <ul className="space-y-3">
                                                {exp.deskripsi.map((item, itemIndex) => (
                                                    <li 
                                                        key={itemIndex} 
                                                        className="flex items-start space-x-3 group/item hover:bg-teal-50 dark:hover:bg-teal-900/20 p-3 rounded-lg transition-colors duration-300"
                                                    >
                                                        <div className="flex-shrink-0 w-2 h-2 bg-gradient-to-r from-teal-400 to-blue-500 rounded-full mt-2 group-hover/item:scale-125 transition-transform duration-300"></div>
                                                        <span className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm group-hover/item:text-gray-800 dark:group-hover/item:text-gray-200 transition-colors duration-300">
                                                            {item}
                                                        </span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
            
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                
                .bg-grid-pattern {
                    background-image: radial-gradient(circle, #6366f1 1px, transparent 1px);
                    background-size: 50px 50px;
                }
            `}</style>
        </section>
    )
}

export default ExperiencesSection