'use client'

import React, { useEffect, useRef, useState } from 'react'
import { ClipDiv } from '@/components/ui/skiper-ui/skiper66'
import { TextScroll } from '@/components/ui/skiper-ui/text-scroll'




const Agence = () => {
  const heroRef = useRef<HTMLDivElement | null>(null)
  const narrativeRef = useRef<HTMLElement | null>(null)
  const integratedRef = useRef<HTMLElement | null>(null)
  const servicesRef = useRef<HTMLElement | null>(null)
  const stickyCardsRef = useRef<HTMLDivElement | null>(null)

  const [pageDark, setPageDark] = useState(false)

  useEffect(() => {
    const sections: Array<{ el: Element | null; theme: 'light' | 'dark' }> = [
      { el: heroRef.current, theme: 'light' },
      { el: narrativeRef.current, theme: 'light' },
      { el: integratedRef.current, theme: 'light' },
      { el: servicesRef.current, theme: 'dark' },
      { el: stickyCardsRef.current, theme: 'dark' },
    ]

    const io = new IntersectionObserver(
      (entries) => {
        // Pick the entry with maximum intersectionRatio
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
        if (!visible) return
        const idx = sections.findIndex(s => s.el === visible.target)
        if (idx === -1) return
        const theme = sections[idx].theme
        setPageDark(theme === 'dark')
      },
      {
        // More aggressive thresholds for better detection
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
        rootMargin: '0px 0px -10% 0px'
      }
    )

    sections.forEach(s => s.el && io.observe(s.el))

    // Set initial state based on which section is visible
    const checkInitialState = () => {
      const viewportHeight = window.innerHeight
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section.el) {
          const rect = (section.el as HTMLElement).getBoundingClientRect()
          // If section is in viewport
          if (rect.top < viewportHeight && rect.bottom > 0) {
            setPageDark(section.theme === 'dark')
            return
          }
        }
      }
      // Default to light if nothing found
      setPageDark(false)
    }

    checkInitialState()

    // Also check on resize to handle responsiveness tab
    window.addEventListener('resize', checkInitialState)
    window.addEventListener('scroll', checkInitialState)

    return () => {
      io.disconnect()
      window.removeEventListener('resize', checkInitialState)
      window.removeEventListener('scroll', checkInitialState)
    }
  }, [])

  return (
    <div className="relative w-full">
      {/* Page background layer that transitions color */}
      <div 
        className="fixed inset-0 -z-10 transition-colors duration-700 ease-in-out"
        style={{ backgroundColor: pageDark ? '#000000' : '#FFFFFF' }}
      />

      {/* HERO */}
      <div ref={heroRef} data-theme="light" className="relative h-screen w-full">
        <ClipDiv imgSrc="/gorilla1.png" full>
          <h1 className="text-[16vw] xs:text-[14vw] sm:text-[12vw] md:text-[10vw] lg:text-[8vw] xl:text-[7vw] 2xl:text-[6vw] font-black uppercase tracking-tight text-white leading-none text-center">MSK EDITORS</h1>
        </ClipDiv>
      </div>

      {/* Next Section: narratives under the hero (light) */}
      <section ref={narrativeRef} data-theme="light" className="w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12 xl:px-16 py-10 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-6">
              <h2 
                className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight transition-colors duration-700 ease-in-out"
                style={{ fontFamily: 'font2', color: pageDark ? '#FFFFEB' : '#000000' }}
              >
                Our Playground
              </h2>
            </div>
            <div className="lg:col-span-6 space-y-4 sm:space-y-5">
              <p 
                className="text-base sm:text-lg md:text-xl leading-relaxed md:leading-[1.7] transition-colors duration-700 ease-in-out"
                style={{ color: pageDark ? 'rgba(255, 255, 235, 0.9)' : 'rgba(0, 0, 0, 0.9)' }}
              >
                The internet is our wild west — chaotic, limitless, and ours to explore. It's where we learned to create,
                experiment, and carve out space for ideas that actually matter.
              </p>
              <p 
                className="text-sm sm:text-base md:text-lg leading-relaxed md:leading-[1.7] transition-colors duration-700 ease-in-out"
                style={{ color: pageDark ? 'rgba(255, 255, 235, 0.8)' : 'rgba(0, 0, 0, 0.8)' }}
              >
                The digital world is our playground — fast, unpredictable, and full of opportunity. It's where we
                experiment, innovate, and build experiences that leave a mark.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Integrated Team section (follows theme) */}
      <section ref={integratedRef} data-theme="light" className="w-full">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 sm:py-16 md:py-20">
          <div className="max-w-5xl">
            <h2 
              className="uppercase font-medium tracking-tight text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] transition-colors duration-700 ease-in-out"
              style={{ fontFamily: 'font2', color: pageDark ? '#FFFFEB' : '#000000' }}
            >
              AN INTEGRATED TEAM<br />
              BUILT TO<br />
              SOLVE FOR<br />
              TOMORROW'S CHALLENGES<br />
              TODAY.
            </h2>
          </div>
        </div>
      </section>

      {/* Services: 3 items horizontally with scroll-triggered page bg change (dark) */}
      <section
        ref={servicesRef}
        data-theme="dark"
        className="w-full min-h-screen"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pt-12 sm:pt-16 md:pt-20 lg:pt-24 pb-4 sm:pb-6 md:pb-8 lg:pb-10">
          <div 
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-3 md:gap-4 lg:gap-6 xl:gap-8 transition-colors duration-700 ease-in-out"
            style={{ color: pageDark ? '#FFFFEB' : '#000000' }}
          >
            {/* 01 Branding */}
            <div className="text-center sm:text-left">
              <div className="text-xs md:text-sm opacity-70" style={{ fontFamily: 'font2' }}>01</div>
              <h3 className="mt-1 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold" style={{ fontFamily: 'font2' }}>BRANDING</h3>
              <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
                <li>Go-To-Market Strategy</li>
                <li>Brand Strategy</li>
                <li>Visual Identities</li>
                <li>Brand Guidelines</li>
                <li>Logo Creation</li>
                <li>Value Propositions</li>
              </ul>
            </div>

            {/* 02 Web & Apps */}
            <div className="text-center sm:text-left">
              <div className="text-xs md:text-sm opacity-70" style={{ fontFamily: 'font2' }}>02</div>
              <h3 className="mt-1 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold" style={{ fontFamily: 'font2' }}>WEB & APPS</h3>
              <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
                <li>UX/UI Design</li>
                <li>CMS Implementation</li>
                <li>Web Design</li>
                <li>Development</li>
                <li>Webflow</li>
              </ul>
            </div>

            {/* 03 Marketing */}
            <div className="text-center sm:text-left sm:col-span-2 md:col-span-1">
              <div className="text-xs md:text-sm opacity-70" style={{ fontFamily: 'font2' }}>03</div>
              <h3 className="mt-1 text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold" style={{ fontFamily: 'font2' }}>MARKETING</h3>
              <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-sm sm:text-base md:text-base lg:text-lg leading-relaxed">
                <li>Content</li>
                <li>Social</li>
                <li>Paid Media</li>
                <li>Campaigns</li>
                <li>SEO</li>
                <li>Marketing Ops</li>
                <li>Analytics</li>
              </ul>
            </div>
          </div>
        </div>
        
      </section>

      <TextScroll text='MSK EDITORS' default_velocity={4} className='text-bold-500 text-white text-6xl '  > </TextScroll>

 
    </div>
  )
}

export default Agence


