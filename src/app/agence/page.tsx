'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Agence = () => {
  return (
    <div className='w-full bg-[#DBE9DB] min-h-screen flex'>
      {/* Left Section - Text Content */}
      <div className='w-1/2 flex items-center justify-center px-8 lg:px-12 xl:px-16'>
        <div className='max-w-2xl'>
          {/* Main Heading - Smaller and positioned below navbar */}
          <div className='mb-8 pt-20'>
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-black'>
              Creative by Design.
            </h1>
            <h1 className='font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight text-black'>
              Strategic by Nature.
            </h1>
          </div>

          {/* Paragraph */}
          <div className='mb-12'>
            <p className='text-lg sm:text-xl md:text-2xl leading-relaxed text-black'>
              MSK Editros is a team of digital natives raised by the internet and shaped by the culture it created. The web isn't just where we work — it's where we grew up.
            </p>
          </div>

          {/* Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 sm:gap-6'>
            <Link 
              href='/contact' 
              className='bg-[#E49724] hover:bg-[#D4851A] text-white font-bold py-4 px-8 text-lg rounded-lg transition-all duration-300 transform hover:scale-105'
            >
              Start Project
            </Link>
            <Link 
              href='/projects' 
              className='bg-transparent border-2 border-black text-black hover:bg-black hover:text-white font-bold py-4 px-8 text-lg rounded-lg transition-all duration-300 transform hover:scale-105'
            >
              View Works
            </Link>
          </div>

          {/* Statistics */}
        </div>
      </div>

      {/* Right Section - Image covers space naturally */}
      <div className='w-1/2 relative'>
        <Image
          src="/about.webp"
          alt="Team illustration"
          fill
          className='object-cover'
          priority
        />
      </div>
    </div>
  )
}

export default Agence