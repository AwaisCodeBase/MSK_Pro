import React from 'react'
import Link from 'next/link'

const HomeBottomText = () => {

  return (
    <div className='font-[font2] flex flex-col xl:flex-row items-center justify-center gap-4 xl:gap-2 px-4 xl:px-0'>
      <p className='xl:absolute xl:w-[17vw] w-full max-w-md xl:max-w-none xl:right-20 xl:right-0 xl:bottom-28 xl:bottom-72 font-[font1] xl:text-lg text-sm sm:text-base xl:leading-relaxed leading-relaxed xl:text-right text-center'>
      K72 is an agency that thinks about every action to nourish the brand. Tomorrow, in 5 months and in 5 years. We look for the friction that creates the spark to generate emotion. To ensure an honest relationship, we are without filter, we say what needs to be said, we do what needs to be done.
      </p>
      <div className='xl:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] xl:h-44 h-16 sm:h-20 flex items-center px-4 sm:px-6 xl:px-14 border-white rounded-full uppercase transition-all duration-300'>
        <Link className='text-[8vw] sm:text-[7vw] xl:text-[6vw] xl:mt-6' href='/projects'>PROJECTS</Link>
      </div>
      <div className='xl:border-3 border-2 hover:border-[#D3FD50] hover:text-[#D3FD50] xl:h-44 h-16 sm:h-20 flex items-center px-4 sm:px-6 xl:px-14 border-white rounded-full uppercase transition-all duration-300'>
        <Link className='text-[8vw] sm:text-[7vw] xl:text-[6vw] xl:mt-6' href='/agence'>AGENCY</Link>
      </div>
    </div>
  )
}

export default HomeBottomText
