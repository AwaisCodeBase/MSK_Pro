'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useEffect, useRef } from 'react'
import Link from 'next/link'
import { NavbarContext } from '../../context/NavContext'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const FullScreenNav = () => {
    const fullNavLinksRef = useRef<HTMLDivElement>(null)
    const fullScreenRef = useRef<HTMLDivElement>(null)
    const pathname = usePathname()

    const [navOpen, setNavOpen] = useContext(NavbarContext)

    // Auto close navigation when location changes
    useEffect(() => {
        setNavOpen(false)
    }, [pathname, setNavOpen])

    const handleNavClick = () => {
        setNavOpen(false)
    }

    // Prevent body scroll when nav is open
    useEffect(() => {
        if (navOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [navOpen])

    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', { display: 'block' })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: { amount: -0.3 }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: { amount: 0.3 }
        })
        tl.to('.navlink', { opacity: 1 })
    }

    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: { amount: 0.1 }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: { amount: 0.1 }
        })
        tl.to('.navlink', { opacity: 0 })
        tl.to('.fullscreennav', { display: 'none' })
    }

    useGSAP(function () {
        if (navOpen) {
            gsapAnimation()
        } else {
            gsapAnimationReverse()
        }
    }, [navOpen])

    return (
        <div
            ref={fullScreenRef}
            id='fullscreennav'
            className='fullscreennav hidden text-white overflow-hidden h-screen w-full z-[9999] fixed top-0 left-0'
            style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: 9999 }}
        >
            <div className='h-screen w-full fixed top-0 left-0'>
                <div className='h-full w-full flex'>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                    <div className='stairing h-0 w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinksRef} className='relative h-full overflow-y-auto'>
                <div className="navlink opacity-0 flex w-full justify-between xl:p-6 lg:p-5 sm:p-4 p-3 items-start">
                    <div className=''>
                        <div className='xl:w-56 lg:w-48 sm:w-36 w-28'>
                            <Link href='/' aria-label='Home'>
                                <Image src="/logo.png" alt="Logo" width={200} height={84} className='w-full h-auto' priority />
                            </Link>
                        </div>
                    </div>
                    <div onClick={() => { setNavOpen(false) }} className='xl:h-36 lg:h-32 sm:h-24 h-16 xl:w-36 sm:w-24 w-16 lg:w-32 relative cursor-pointer'>
                        <div className='xl:h-48 lg:h-44 sm:h-32 h-20 xl:w-1.5 lg:w-1 sm:w-0.5 w-0.5 -rotate-45 origin-top absolute bg-[#0095CD]'></div>
                        <div className='xl:h-48 lg:h-44 sm:h-32 h-20 xl:w-1.5 lg:w-1 sm:w-0.5 w-0.5 right-0 rotate-45 origin-top absolute bg-[#0095CD]'></div>
                    </div>
                </div>
                <div className='xl:py-40 lg:py-36 sm:py-32 py-28'>
                    <Link href='/projects' onClick={handleNavClick} className='link opacity-0 origin-top relative border-t-1 border-white block cursor-pointer' style={{ transform: 'rotateX(90deg)' }}>
                        <h1 className='font-[font2] text-3xl sm:text-4xl md:text-5xl lg:text-[8vw] xl:text-[7vw] text-center lg:leading-[0.8] sm:leading-[0.9] leading-[1] xl:pt-12 lg:pt-10 sm:pt-6 pt-4 uppercase'>Projets</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#0095CD] w-full h-full overflow-hidden'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] xl:text-[7vw] lg:text-[8vw] text-3xl sm:text-4xl md:text-5xl text-center lg:leading-[0.8] xl:pt-12 lg:pt-10 pt-4 uppercase'>to see everything</h2>
                                <img className='xl:h-40 lg:h-36 sm:h-20 h-14 rounded-full shrink-0 xl:w-[28rem] lg:w-96 sm:w-40 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] xl:text-[7vw] lg:text-[8vw] text-3xl sm:text-4xl md:text-5xl text-center lg:leading-[0.8] xl:pt-12 lg:pt-10 pt-4 uppercase'>to see everything</h2>
                                <img className='xl:h-40 lg:h-36 sm:h-20 h-14 rounded-full shrink-0 xl:w-[28rem] lg:w-96 sm:w-40 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] xl:text-[7vw] lg:text-[8vw] text-3xl sm:text-4xl md:text-5xl text-center lg:leading-[0.8] xl:pt-12 lg:pt-10 pt-4 uppercase'>to see everything</h2>
                                <img className='xl:h-40 lg:h-36 sm:h-20 h-14 rounded-full shrink-0 xl:w-[28rem] lg:w-96 sm:w-40 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] xl:text-[7vw] lg:text-[8vw] text-3xl sm:text-4xl md:text-5xl text-center lg:leading-[0.8] xl:pt-12 lg:pt-10 pt-4 uppercase'>to see everything</h2>
                                <img className='xl:h-40 lg:h-36 sm:h-20 h-14 rounded-full shrink-0 xl:w-[28rem] lg:w-96 sm:w-40 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </Link>
                    <Link href='/agence' onClick={handleNavClick} className='link opacity-0 origin-top relative border-t-1 border-white block cursor-pointer' style={{ transform: 'rotateX(90deg)' }}>
                        <h1 className='font-[font2] text-3xl sm:text-4xl md:text-5xl lg:text-[8vw] xl:text-[7vw] text-center lg:leading-[0.8] sm:leading-[0.9] leading-[1] xl:pt-12 lg:pt-10 sm:pt-6 pt-4 uppercase'>Agency</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#0095CD] w-full h-full overflow-hidden'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] xl:text-[7vw] lg:text-[8vw] text-3xl sm:text-4xl md:text-5xl text-center lg:leading-[0.8] xl:pt-12 lg:pt-10 pt-4 uppercase'>to see everything</h2>
                                <img className='xl:h-40 lg:h-36 sm:h-20 h-14 rounded-full shrink-0 xl:w-[28rem] lg:w-96 sm:w-40 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] xl:text-[7vw] lg:text-[8vw] text-3xl sm:text-4xl md:text-5xl text-center lg:leading-[0.8] xl:pt-12 lg:pt-10 pt-4 uppercase'>to see everything</h2>
                                <img className='xl:h-40 lg:h-36 sm:h-20 h-14 rounded-full shrink-0 xl:w-[28rem] lg:w-96 sm:w-40 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] xl:text-[7vw] lg:text-[8vw] text-3xl sm:text-4xl md:text-5xl text-center lg:leading-[0.8] xl:pt-12 lg:pt-10 pt-4 uppercase'>to see everything</h2>
                                <img className='xl:h-40 lg:h-36 sm:h-20 h-14 rounded-full shrink-0 xl:w-[28rem] lg:w-96 sm:w-40 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] xl:text-[7vw] lg:text-[8vw] text-3xl sm:text-4xl md:text-5xl text-center lg:leading-[0.8] xl:pt-12 lg:pt-10 pt-4 uppercase'>to see everything</h2>
                                <img className='xl:h-40 lg:h-36 sm:h-20 h-14 rounded-full shrink-0 xl:w-[28rem] lg:w-96 sm:w-40 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </Link>
                    <Link href='/contact' onClick={handleNavClick} className='link opacity-0 origin-top relative border-t-1 border-white block cursor-pointer' style={{ transform: 'rotateX(90deg)' }}>
                        <h1 className='font-[font2] text-3xl sm:text-4xl md:text-5xl lg:text-[8vw] xl:text-[7vw] text-center lg:leading-[0.8] sm:leading-[0.9] leading-[1] xl:pt-12 lg:pt-10 sm:pt-6 pt-4 uppercase'>Contact</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#0095CD] w-full h-full overflow-hidden'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] xl:text-[7vw] lg:text-[8vw] text-3xl sm:text-4xl md:text-5xl text-center lg:leading-[0.8] xl:pt-12 lg:pt-10 pt-4 uppercase'>to see everything</h2>
                                <img className='xl:h-40 lg:h-36 sm:h-20 h-14 rounded-full shrink-0 xl:w-[28rem] lg:w-96 sm:w-40 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] xl:text-[7vw] lg:text-[8vw] text-3xl sm:text-4xl md:text-5xl text-center lg:leading-[0.8] xl:pt-12 lg:pt-10 pt-4 uppercase'>to see everything</h2>
                                <img className='xl:h-40 lg:h-36 sm:h-20 h-14 rounded-full shrink-0 xl:w-[28rem] lg:w-96 sm:w-40 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] xl:text-[7vw] lg:text-[8vw] text-3xl sm:text-4xl md:text-5xl text-center lg:leading-[0.8] xl:pt-12 lg:pt-10 pt-4 uppercase'>to see everything</h2>
                                <img className='xl:h-40 lg:h-36 sm:h-20 h-14 rounded-full shrink-0 xl:w-[28rem] lg:w-96 sm:w-40 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] xl:text-[7vw] lg:text-[8vw] text-3xl sm:text-4xl md:text-5xl text-center lg:leading-[0.8] xl:pt-12 lg:pt-10 pt-4 uppercase'>to see everything</h2>
                                <img className='xl:h-40 lg:h-36 sm:h-20 h-14 rounded-full shrink-0 xl:w-[28rem] lg:w-96 sm:w-40 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </Link>
                    <Link href='/' onClick={handleNavClick} className='link opacity-0 origin-top relative border-y-1 border-white block cursor-pointer' style={{ transform: 'rotateX(90deg)' }}>
                        <h1 className='font-[font2] text-3xl sm:text-4xl md:text-5xl lg:text-[8vw] xl:text-[7vw] text-center lg:leading-[0.8] sm:leading-[0.9] leading-[1] xl:pt-12 lg:pt-10 sm:pt-6 pt-4 uppercase'>Blogs</h1>
                        <div className='moveLink absolute text-black flex top-0 bg-[#0095CD] w-full h-full overflow-hidden'>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] xl:text-[7vw] lg:text-[8vw] text-3xl sm:text-4xl md:text-5xl text-center lg:leading-[0.8] xl:pt-12 lg:pt-10 pt-4 uppercase'>to see everything</h2>
                                <img className='xl:h-40 lg:h-36 sm:h-20 h-14 rounded-full shrink-0 xl:w-[28rem] lg:w-96 sm:w-40 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] xl:text-[7vw] lg:text-[8vw] text-3xl sm:text-4xl md:text-5xl text-center lg:leading-[0.8] xl:pt-12 lg:pt-10 pt-4 uppercase'>to see everything</h2>
                                <img className='xl:h-40 lg:h-36 sm:h-20 h-14 rounded-full shrink-0 xl:w-[28rem] lg:w-96 sm:w-40 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                            <div className='moveX flex items-center'>
                                <h2 className='whitespace-nowrap font-[font2] xl:text-[7vw] lg:text-[8vw] text-3xl sm:text-4xl md:text-5xl text-center lg:leading-[0.8] xl:pt-12 lg:pt-10 pt-4 uppercase'>to see everything</h2>
                                <img className='xl:h-40 lg:h-36 sm:h-20 h-14 rounded-full shrink-0 xl:w-[28rem] lg:w-96 sm:w-40 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---MenuThumbnail-640x290.jpg" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] xl:text-[7vw] lg:text-[8vw] text-3xl sm:text-4xl md:text-5xl text-center lg:leading-[0.8] xl:pt-12 lg:pt-10 pt-4 uppercase'>to see everything</h2>
                                <img className='xl:h-40 lg:h-36 sm:h-20 h-14 rounded-full shrink-0 xl:w-[28rem] lg:w-96 sm:w-40 w-32 object-cover' src="https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290-640x290.jpg" alt="" />
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FullScreenNav
