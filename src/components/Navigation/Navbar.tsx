'use client'

import React, { useContext, useEffect, useRef, useState } from 'react'
import { NavbarColorContext, NavbarContext } from '../../context/NavContext'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {

    const navGreenRef = useRef<HTMLDivElement>(null)
    const [navOpen,setNavOpen] = useContext(NavbarContext)
    const [navColor, setNavColor] = useContext(NavbarColorContext)
    const [isAtTop, setIsAtTop] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            setIsAtTop(window.scrollY === 0)
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className='z-[100] flex fixed top-0 w-full items-start justify-between'>
            <div className='xl:p-6 lg:p-5 p-3 sm:p-4'>
                <div className='xl:w-48 lg:w-44 sm:w-36 w-28'>
                    <Link href='/' aria-label='Home'>
                        <Image src="/logo.png" alt="Logo" width={180} height={76} className='w-full h-auto' priority />
                    </Link>
                </div>
            </div>
            <div onClick={()=>{
                setNavOpen(true)
            }} onMouseEnter={() => {
                if (navGreenRef.current) {
                    navGreenRef.current.style.height = '100%'
                }
            }}
                onMouseLeave={() => {
                    if (navGreenRef.current) {
                        navGreenRef.current.style.height = '0%'
                    }
                }}
                className='xl:h-18 lg:h-16 sm:h-12 h-10 bg-black relative xl:w-[18vw] lg:w-[16vw] sm:w-40 w-32 cursor-pointer'>
                <div ref={navGreenRef} className='bg-[#0095CD] transition-all absolute top-0 h-0 w-full'></div>
                <div className={`absolute left-2 bottom-1 z-10 text-white uppercase tracking-widest font-bold ${isAtTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-1'} transition-all duration-300 ease-out text-[11px] sm:text-sm lg:text-base`}>
                    Menu
                </div>
                <div className='relative h-full xl:px-14 lg:px-12 sm:px-10 px-6 flex flex-col justify-center items-end xl:gap-2 lg:gap-1.5 sm:gap-1 gap-0.5'>
                    <div className="xl:w-20 lg:w-18 sm:w-14 w-10 h-0.5 bg-white"></div>
                    <div className="xl:w-12 lg:w-10 sm:w-8 w-5 h-0.5 bg-white"></div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
