import React from 'react'

interface ProjectCardProps {
  image1: string
  image2: string
}

const ProjectCard = (props: ProjectCardProps) => {
    return (
        <>
            <div className='lg:w-1/2 w-full group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full'>
                <img className='h-full w-full object-cover' src={props.image1} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase text-lg sm:text-2xl md:text-4xl lg:text-6xl font-[font1] border-2 sm:border-3 lg:border-4 pt-2 sm:pt-3 lg:pt-4 px-4 sm:px-6 lg:px-8 text-white border-white rounded-full'>See the project</h2>
                </div>
            </div>
            <div className='lg:w-1/2 w-full group transition-all relative rounded-none hover:rounded-[70px] overflow-hidden h-full'>
                <img className='h-full w-full object-cover' src={props.image2} alt="" />
                <div className='opacity-0 transition-opacity group-hover:opacity-100 absolute top-0 flex items-center justify-center left-0 h-full w-full bg-black/15'>
                    <h2 className='uppercase text-lg sm:text-2xl md:text-4xl lg:text-6xl font-[font1] border-2 sm:border-3 lg:border-4 pt-2 sm:pt-3 lg:pt-4 px-4 sm:px-6 lg:px-8 text-white border-white rounded-full'>see the project</h2>
                </div>
            </div>
        </>
    )
}

export default ProjectCard
