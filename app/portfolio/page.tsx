import { fullPortfolio } from '@/constants/portfolio'
import React from 'react'
import { FaEye } from 'react-icons/fa'

function page() {
  return (
    <div className="w-full py-28">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-5 mt-8">Portfolio</h2>
        <p className="text-gray-700 dark:text-gray-500">
          Here are all the projects I created while I was learning about website development. 🧑🏻‍💻.
        </p>
      </div> 

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8">
        {fullPortfolio.map((port, index) => (
          <div key={index} className="shadow-xl p-5 rounded-md dark:bg-slate-900">
            <div className="w-full mb-4">
              <img src={port.gambar} alt={port.nama} className="w-full h-full rounded-md object-cover" />
            </div>
            <div className="w-full p-5">
              <h3 className="text-2xl font-semibold text-teal-500 mb-3">{port.nama}</h3>
              <div className="flex flex-row mb-3">
                {port.teknologi.map((tekno, index) => (
                  <img key={index} src={tekno} alt={port.nama} className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] m-2" />
                ))}
              </div>
              <p className='text-gray-700 dark:text-gray-400'>{port.deskripsi}</p>
              <div className='flex gap-4 mt-4'>
                <a href={port.link} target='_blank' rel='noreferrer' className='bg-teal-500 text-white px-4 py-2 rounded-md hover:bg-teal-600 transition-all duration-300 flex flex-row'><FaEye className='mt-1 mr-2' /> Demo</a>
                {/* <a href={port.source} target='_blank' rel='noreferrer' className='bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-all duration-300 flex flex-row'><FaGithub className='mt-1 mr-2' /> Source</a> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Portfolio Before Button */}
      {/* <div className="text-center mt-10">
        <a href="/#portfolio" className="bg-teal-500 text-white px-6 py-3 rounded-md hover:bg-teal-600 transition-all duration-300">View Some Projects</a>
      </div> */}
    </div>
  )
}

export default page
