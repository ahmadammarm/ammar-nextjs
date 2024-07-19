import { Card } from '@/components/ui/card'
import { about } from '@/constants/about';
import React from 'react'

function AboutSection() {

    const { nama, negara, role, CV, deskripsi, foto } = about[0];
  return (
    <div id='about' className=' min-h-screen flex flex-col justify-center items-center p-3 pt-28 lg:pt-16'>
        <h1 className='text-5xl font-bold mb-[5rem] mt-[3rem]'>
            About Me
        </h1>
        <div className=' max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center'>
            <div className=' flex justify-center lg:w-1/2 p-4 mb-8 lg:mb-0'>
                <img src='/images/profile.jpg' alt='Ammar' className=' w-64 h-64 lg:w-80 lg:h-80 rounded-md object-cover border-4 border-teal-500' /> 
            </div>
            <div className='flex flex-col items-center lg:items-start lg:w-1/2 text-center lg:text-left p-4 '>
                <p className=' text-gray-700 dark:text-gray-400 text-3xl font-bold mb-[1.5rem]'>
                    Haloo..👋 saya <span className='text-3xl text-teal-500'>{nama}</span>
                </p>
                <p className='text-gray-700 dark:text-gray-400 text-xl font-bold mb-[4rem] italic'>
                    Seorang <span className='text-2xl text-teal-500'>{role} 🧑🏻‍💻</span> bertempat tinggal di <span className='text-2xl text-teal-500'>{negara} 🌏</span>.
                </p>
                <p className=' text-md lg:text-lg mb-6'>
                    {deskripsi}
                </p>
            </div>
            <Card>

            </Card>
        </div>
    </div>
  )
}

export default AboutSection