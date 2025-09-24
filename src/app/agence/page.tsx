'use client'

import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import { useRef } from 'react'

const Agence = () => {

  gsap.registerPlugin(ScrollTrigger)

  const imageDivRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLImageElement>(null)

  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]

  useGSAP(function () {

    gsap.to(imageDivRef.current, {
      scrollTrigger: {
        trigger: imageDivRef.current as Element,
        // markers: true,
        start: 'top 28%',
        end: 'top -70%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex: number
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArray.length)
          } else {
            imageIndex = imageArray.length - 1
          }
          if (imageRef.current) {
            imageRef.current.src = imageArray[imageIndex]
          }
        }
      }
    })
  })


  return (
    <div className='parent'>
      <div id='page1' className='py-1'>
        <div ref={imageDivRef} className='absolute overflow-hidden xl:h-[20vw] lg:h-[22vw] sm:h-[25vw] h-[30vw] xl:rounded-3xl lg:rounded-2xl sm:rounded-2xl rounded-xl xl:w-[15vw] lg:w-[18vw] sm:w-[20vw] w-[25vw] xl:top-96 lg:top-80 sm:top-80 top-60 xl:left-[30vw] lg:left-[50%] left-[50%] transform xl:transform-none lg:-translate-x-1/2 -translate-x-1/2'>
          <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg" alt="" />
        </div>
        <div className='relative font-[font2] px-4 sm:px-6 lg:px-6 xl:px-0'>
          <div className='xl:mt-[55vh] lg:mt-[40vh] sm:mt-[40vh] mt-[35vh]'>
            <h1 className='xl:text-[20vw] lg:text-[22vw] sm:text-[24vw] text-[28vw] text-center uppercase xl:leading-[18vw] lg:leading-[20vw] sm:leading-[22vw] leading-[26vw]'>Soixan7t <br />
              Twelve</h1>
          </div>
          <div className='xl:pl-[40%] lg:pl-0 xl:mt-20 lg:mt-8 sm:mt-8 mt-6 xl:pr-0 lg:pr-6 sm:pr-4 pr-2'>
            <p className='xl:text-6xl lg:text-2xl sm:text-2xl text-lg leading-tight xl:text-left lg:text-center text-center xl:pl-8 pl-0'>
            Our curiosity fuels our creativity. We remain humble and say no to big egos, even yours. A brand is alive. She has values, a personality, a history. If we forget that, we can make good numbers in the short term, but we kill it in the long term. This is why we are committed to giving perspective, to building influential brands.
            </p>
          </div>
        </div>
      </div>
      <div id='page2' className=" h-screen">

      </div>
    </div>
  )
}

export default Agence
