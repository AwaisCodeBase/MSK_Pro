import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
    return (
        <div className='font-[font1] mt-32 sm:mt-48 md:mt-64 lg:mt-0 pt-5 text-center px-4'>
            <div className='lg:text-[9.5vw] md:text-[10vw] sm:text-[11vw] text-[14vw] justify-center flex items-center uppercase lg:leading-[8vw] md:leading-[9vw] sm:leading-[10vw] leading-[12vw]'>
                THE SPARK
            </div>
            <div className='lg:text-[9.5vw] md:text-[10vw] sm:text-[11vw] text-[14vw] justify-center flex items-start uppercase lg:leading-[8vw] md:leading-[9vw] sm:leading-[10vw] leading-[12vw]'>
                WHO
                <div className='h-[7vw] w-[16vw] sm:h-[6vw] sm:w-[14vw] md:h-[5.5vw] md:w-[13vw] lg:h-[7vw] lg:w-[16vw] rounded-full -mt-3 overflow-hidden '>
                    <Video />
                </div>
                GENERATES
            </div>
            <div className='lg:text-[9.5vw] md:text-[10vw] sm:text-[11vw] text-[14vw] justify-center flex items-center uppercase lg:leading-[8vw] md:leading-[9vw] sm:leading-[10vw] leading-[12vw]'>
                CREATIVITY
            </div>
        </div>
    )
}

export default HomeHeroText
