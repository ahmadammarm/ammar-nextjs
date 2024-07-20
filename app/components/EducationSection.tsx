import { Card, CardHeader, CardDescription } from '@/components/ui/card'
import { education } from '@/constants/education'
import { organization } from '@/constants/organization'
import React from 'react'

function EducationSection(): React.ReactElement {

    return (
        <div id="educations" className="py-20">
            <div className="container mx-auto">
                <h2 className="text-5xl font-bold text-center mb-[5rem] mt-[5rem]">Educations</h2>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                    {education.map((edu, index) => (
                        <Card key={index} className="flex flex-col items-center p-4 mb-5 hover:shadow-teal-500 shadow-md transition-all ease-in-out duration-300">
                            <img src={edu.logo} alt={edu.nama} className="w-24 h-20 mb-4" />
                            <CardHeader className="text-lg font-semibold mb-2 text-teal-500">{edu.nama}</CardHeader>
                            <CardDescription className="text-sm text-gray-700 dark:text-gray-400">{edu.jurusan}</CardDescription>
                            <CardDescription className="text-sm text-gray-700 dark:text-gray-400">{edu.tahun}</CardDescription>
                        </Card>
                    ))}
                </div>
                {/* Organizations */}
                <h2 className="text-3xl font-bold text-center mb-[2rem] mt-[5rem]">Organizations</h2>
                <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
                    {organization.map((org, index) => (
                        <Card key={index} className="flex flex-col items-center p-4 mb-5 hover:shadow-teal-500 shadow-md transition-all ease-in-out duration-300">
                            <img src={org.logo} alt={org.nama} className="w-24 h-20 mb-4" />
                            <CardHeader className="text-lg font-semibold mb-2 text-teal-500">{org.nama}</CardHeader>
                            <CardDescription className="text-sm text-gray-700 dark:text-gray-400">{org.jabatan}</CardDescription>
                            <CardDescription className="text-sm text-gray-700 dark:text-gray-400">{org.tahun}</CardDescription>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default EducationSection