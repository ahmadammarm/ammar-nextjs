import { experiences } from '@/constants/experiences'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Briefcase, Calendar, Building2 } from 'lucide-react'
import Image from 'next/image'

const ExperiencesSection = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-5 text-black dark:text-gray-100">
          My Professional Experiences
        </h2>
        <h3 className="text-black dark:text-gray-500 text-md font-semibold mb-20 text-center">
            Here are some of the companies where I have worked
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {experiences.map((exp, index) => (
            <Card key={index} className="overflow-hidden transition-shadow shadow-lg duration-300 ease-in-out">
              <CardHeader className="bg-teal-600 text-white p-6">
                <CardTitle className="text-xl md:text-2xl font-semibold mb-2">{exp.nama}</CardTitle>
                <div className="flex items-center space-x-2">
                  <Briefcase className="w-4 h-4" />
                  <CardDescription className="text-sm text-gray-100">
                    {exp.jabatan}
                  </CardDescription>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Calendar className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-600 dark:text-gray-400">{exp.tahun}</span>
                </div>
                <div className="flex items-center space-x-2 mb-4">
                  <Building2 className="w-4 h-4 text-gray-500" />
                  <Badge variant="secondary">{exp.kontrak}</Badge>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{exp.deskripsi}</p>
                <div className="flex space-x-2">
                  {exp.logo.map((logo, logoIndex) => (
                    <Image
                      key={logoIndex}
                      src={logo}
                      alt={`${exp.nama} technology`}
                      width={24}
                      height={24}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ExperiencesSection

