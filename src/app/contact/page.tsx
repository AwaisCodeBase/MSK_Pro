'use client'

import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Main centered text section */}
        <div className='relative flex items-center justify-center min-h-screen px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20'>
        <div className='text-center max-w-7xl mx-auto'>
          <h1 className='text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-medium uppercase leading-tight tracking-tight' style={{ fontFamily: 'font2' }}>
            FOR<br />
            TALK ABOUT<br />
            YOUR<br />
            PROJECT
        </h1>
        </div>
        
        {/* Left bottom text - desktop/tablet */}
        <div className='hidden sm:block absolute bottom-4 md:bottom-8 lg:bottom-12 left-2 md:left-4 lg:left-8 text-xs sm:text-sm md:text-base lg:text-lg text-white opacity-80' style={{ fontFamily: 'font2' }}>
          <div className='leading-relaxed'>
            Let's make<br />
            your business<br />
            <span className='font-bold'>A BRAND</span>
          </div>
        </div>
        
        {/* Right bottom text - desktop/tablet */}
        <div className='hidden sm:block absolute bottom-4 md:bottom-8 lg:bottom-12 right-2 md:right-4 lg:right-8 text-xs sm:text-sm md:text-base lg:text-lg text-white opacity-80 text-right' style={{ fontFamily: 'font2' }}>
          <div className='leading-relaxed'>
            In a screen or desktop.<br />
            At your place. At our place.<br />
            Everywhere
          </div>
        </div>

        {/* Stacked left/right text - mobile */}
        <div className='sm:hidden absolute bottom-2 left-0 right-0 flex flex-col items-center gap-2 text-xs text-white opacity-80 px-2' style={{ fontFamily: 'font2' }}>
          <div className='leading-relaxed text-center'>
            Let's make<br />
            your business<br />
            <span className='font-bold'>A BRAND</span>
          </div>
          <div className='leading-relaxed text-center'>
            In a screen or desktop.<br />
            At your place. At our place.<br />
            Everywhere
          </div>
        </div>
      </div>

      {/* Sliding text animation */}
      <div className='relative py-2 sm:py-3 md:py-4 lg:py-6 xl:py-8'>
         <div className='link relative border-t border-white block w-full overflow-hidden' style={{ minHeight: '120px' }}>
           <h1 className='font-[font2] text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center lg:leading-[0.8] sm:leading-[0.9] leading-[1] xl:pt-12 lg:pt-10 sm:pt-6 pt-4 uppercase tracking-tight'>BONJOUR MSKEDITORS</h1>
           <div className='moveLink absolute text-black flex top-0 bg-[#0095CD] w-full h-full overflow-hidden md:hover:bg-white transition-colors duration-300'>
              <div className='moveX flex items-center h-full whitespace-nowrap' style={{ 
                animation: 'moveX 10s linear infinite',
                pointerEvents: 'none'
              }}>
              {/* First set */}
               <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase px-4 sm:px-5 md:px-6 select-none'>BONJOUR MSKEDITORS</h2>
              <img className='h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 rounded-md shrink-0 object-cover mx-3 sm:mx-4 md:mx-5' src="/img1.png" alt="" />
               <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase px-4 sm:px-5 md:px-6 select-none'>BONJOUR MSKEDITORS</h2>
              <img className='h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 rounded-md shrink-0 object-cover mx-3 sm:mx-4 md:mx-5' src="/img2.jpg" alt="" />
              <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase px-4 sm:px-5 md:px-6 select-none'>BONJOUR MSKEDITORS</h2>
              <img className='h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 rounded-md shrink-0 object-cover mx-3 sm:mx-4 md:mx-5' src="/img3.jpg" alt="" />
              <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase px-4 sm:px-5 md:px-6 select-none'>BONJOUR MSKEDITORS</h2>
              <img className='h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 rounded-md shrink-0 object-cover mx-3 sm:mx-4 md:mx-5' src="/img4.jpg" alt="" />
              
              {/* Duplicate set for seamless loop */}
              <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase px-4 sm:px-5 md:px-6 select-none'>BONJOUR MSKEDITORS</h2>
              <img className='h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 rounded-md shrink-0 object-cover mx-3 sm:mx-4 md:mx-5' src="/img1.png" alt="" />
              <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase px-4 sm:px-5 md:px-6 select-none'>BONJOUR MSKEDITORS</h2>
              <img className='h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 rounded-md shrink-0 object-cover mx-3 sm:mx-4 md:mx-5' src="/img2.jpg" alt="" />
              <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase px-4 sm:px-5 md:px-6 select-none'>BONJOUR MSKEDITORS</h2>
              <img className='h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 rounded-md shrink-0 object-cover mx-3 sm:mx-4 md:mx-5' src="/img3.jpg" alt="" />
              <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase px-4 sm:px-5 md:px-6 select-none'>BONJOUR MSKEDITORS</h2>
              <img className='h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 rounded-md shrink-0 object-cover mx-3 sm:mx-4 md:mx-5' src="/img4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Social media buttons */}
      <div className='w-full flex justify-center px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 mt-3 sm:mt-4 md:mt-6'>
        <h3 className='font-[font2] text-white/90 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide uppercase mb-3 sm:mb-4'>FOLLOW US</h3>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center space-y-2 xs:space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8 w-full max-w-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 pb-4 sm:pb-6 md:pb-8'>
        <a 
          href="https://www.facebook.com/share/19tPnJW6dh/" 
          target="_blank" 
          rel="noopener noreferrer"
          className='group relative bg-white text-black px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 py-2 xs:py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl w-full sm:w-auto min-w-[120px] xs:min-w-[130px] sm:min-w-[140px] md:min-w-[150px] flex items-center justify-center text-center'
          style={{ fontFamily: 'font2' }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
          <span className='relative z-10 group-hover:text-white transition-colors duration-300'>FB</span>
        </a>
        <a 
          href="https://www.instagram.com/awais_farooq.11/" 
          target="_blank" 
          rel="noopener noreferrer"
          className='group relative bg-white text-black px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 py-2 xs:py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl w-full sm:w-auto min-w-[120px] xs:min-w-[130px] sm:min-w-[140px] md:min-w-[150px] flex items-center justify-center text-center'
          style={{ fontFamily: 'font2' }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
          <span className='relative z-10 group-hover:text-white transition-colors duration-300'>IG</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/dev-awaisali/" 
          target="_blank" 
          rel="noopener noreferrer"
          className='group relative bg-white text-black px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 py-2 xs:py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl w-full sm:w-auto min-w-[120px] xs:min-w-[130px] sm:min-w-[140px] md:min-w-[150px] flex items-center justify-center text-center'
          style={{ fontFamily: 'font2' }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
          <span className='relative z-10 group-hover:text-white transition-colors duration-300'>IN</span>
        </a>
      </div>




      {/* BRAND */}

      <div className='relative flex items-center justify-center min-h-screen px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 py-8 sm:py-12 md:py-16 lg:py-20'>
        <div className='text-center max-w-7xl mx-auto'>
          <h1 className='text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] 2xl:text-[12rem] font-medium uppercase leading-tight tracking-tight' style={{ fontFamily: 'font2' }}>
            FOR<br />
            TALK ABOUT<br />
            YOUR<br />
            BRAND
        </h1>
        </div>
        
        {/* Left bottom text - desktop/tablet */}
        <div className='hidden sm:block absolute bottom-4 md:bottom-8 lg:bottom-12 left-2 md:left-4 lg:left-8 text-xs sm:text-sm md:text-base lg:text-lg text-white opacity-80' style={{ fontFamily: 'font2' }}>
          <div className='leading-relaxed'>
            Let's make<br />
            your business<br />
            <span className='font-bold'>A BRAND</span>
          </div>
        </div>
        
        {/* Right bottom text - desktop/tablet */}
        <div className='hidden sm:block absolute bottom-4 md:bottom-8 lg:bottom-12 right-2 md:right-4 lg:right-8 text-xs sm:text-sm md:text-base lg:text-lg text-white opacity-80 text-right' style={{ fontFamily: 'font2' }}>
          <div className='leading-relaxed'>
            In a screen or desktop.<br />
            At your place. At our place.<br />
            Everywhere
          </div>
        </div>

        {/* Stacked left/right text - mobile */}
        <div className='sm:hidden absolute bottom-2 left-0 right-0 flex flex-col items-center gap-2 text-xs text-white opacity-80 px-2' style={{ fontFamily: 'font2' }}>
          <div className='leading-relaxed text-center'>
            Let's make<br />
            your business<br />
            <span className='font-bold'>A BRAND</span>
          </div>
          <div className='leading-relaxed text-center'>
            In a screen or desktop.<br />
            At your place. At our place.<br />
            Everywhere
          </div>
        </div>
      </div>

      {/* Sliding text animation */}
      <div className='relative py-2 sm:py-3 md:py-4 lg:py-6 xl:py-8'>
         <div className='link relative border-t border-white block w-full overflow-hidden' style={{ minHeight: '120px' }}>
           <h1 className='font-[font2] text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-center lg:leading-[0.8] sm:leading-[0.9] leading-[1] xl:pt-12 lg:pt-10 sm:pt-6 pt-4 uppercase tracking-tight'>BONJOUR MSKEDITORS</h1>
           <div className='moveLink absolute text-black flex top-0 bg-[#0095CD] w-full h-full overflow-hidden md:hover:bg-white transition-colors duration-300'>
              <div className='moveX flex items-center h-full whitespace-nowrap' style={{ 
                animation: 'moveX 10s linear infinite',
                pointerEvents: 'none'
              }}>
              {/* First set */}
               <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase px-4 sm:px-5 md:px-6 select-none'>BONJOUR MSKEDITORS</h2>
              <img className='h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 rounded-md shrink-0 object-cover mx-3 sm:mx-4 md:mx-5' src="/img1.png" alt="" />
               <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase px-4 sm:px-5 md:px-6 select-none'>BONJOUR MSKEDITORS</h2>
              <img className='h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 rounded-md shrink-0 object-cover mx-3 sm:mx-4 md:mx-5' src="/img2.jpg" alt="" />
              <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase px-4 sm:px-5 md:px-6 select-none'>BONJOUR MSKEDITORS</h2>
              <img className='h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 rounded-md shrink-0 object-cover mx-3 sm:mx-4 md:mx-5' src="/img3.jpg" alt="" />
              <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase px-4 sm:px-5 md:px-6 select-none'>BONJOUR MSKEDITORS</h2>
              <img className='h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 rounded-md shrink-0 object-cover mx-3 sm:mx-4 md:mx-5' src="/img4.jpg" alt="" />
              
              {/* Duplicate set for seamless loop */}
              <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase px-4 sm:px-5 md:px-6 select-none'>BONJOUR MSKEDITORS</h2>
              <img className='h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 rounded-md shrink-0 object-cover mx-3 sm:mx-4 md:mx-5' src="/img1.png" alt="" />
              <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase px-4 sm:px-5 md:px-6 select-none'>BONJOUR MSKEDITORS</h2>
              <img className='h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 rounded-md shrink-0 object-cover mx-3 sm:mx-4 md:mx-5' src="/img2.jpg" alt="" />
              <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase px-4 sm:px-5 md:px-6 select-none'>BONJOUR MSKEDITORS</h2>
              <img className='h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 rounded-md shrink-0 object-cover mx-3 sm:mx-4 md:mx-5' src="/img3.jpg" alt="" />
              <h2 className='whitespace-nowrap font-[font2] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl uppercase px-4 sm:px-5 md:px-6 select-none'>BONJOUR MSKEDITORS</h2>
              <img className='h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 2xl:h-24 w-14 sm:w-16 md:w-20 lg:w-24 xl:w-28 2xl:w-32 rounded-md shrink-0 object-cover mx-3 sm:mx-4 md:mx-5' src="/img4.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>

      {/* Social media buttons */}
      <div className='w-full flex justify-center px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 mt-3 sm:mt-4 md:mt-6'>
        <h3 className='font-[font2] text-white/90 text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl tracking-wide uppercase mb-3 sm:mb-4'>FOLLOW US</h3>
      </div>
      <div className='flex flex-col sm:flex-row justify-center items-center space-y-2 xs:space-y-3 sm:space-y-0 sm:space-x-3 md:space-x-4 lg:space-x-6 xl:space-x-8 w-full max-w-2xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 xl:px-12 pb-4 sm:pb-6 md:pb-8'>
        <a 
          href="https://www.facebook.com/share/19tPnJW6dh/" 
          target="_blank" 
          rel="noopener noreferrer"
          className='group relative bg-white text-black px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 py-2 xs:py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl w-full sm:w-auto min-w-[120px] xs:min-w-[130px] sm:min-w-[140px] md:min-w-[150px] flex items-center justify-center text-center'
          style={{ fontFamily: 'font2' }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
          <span className='relative z-10 group-hover:text-white transition-colors duration-300'>FB</span>
        </a>
        <a 
          href="https://www.instagram.com/awais_farooq.11/" 
          target="_blank" 
          rel="noopener noreferrer"
          className='group relative bg-white text-black px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 py-2 xs:py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl w-full sm:w-auto min-w-[120px] xs:min-w-[130px] sm:min-w-[140px] md:min-w-[150px] flex items-center justify-center text-center'
          style={{ fontFamily: 'font2' }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-pink-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
          <span className='relative z-10 group-hover:text-white transition-colors duration-300'>IG</span>
        </a>
        <a 
          href="https://www.linkedin.com/in/dev-awaisali/" 
          target="_blank" 
          rel="noopener noreferrer"
          className='group relative bg-white text-black px-4 xs:px-5 sm:px-6 md:px-7 lg:px-8 py-2 xs:py-2.5 sm:py-3 md:py-3.5 lg:py-4 text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl font-bold uppercase overflow-hidden transition-all duration-500 hover:scale-105 hover:shadow-2xl w-full sm:w-auto min-w-[120px] xs:min-w-[130px] sm:min-w-[140px] md:min-w-[150px] flex items-center justify-center text-center'
          style={{ fontFamily: 'font2' }}
        >
          <div className='absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left'></div>
          <span className='relative z-10 group-hover:text-white transition-colors duration-300'>IN</span>
        </a>
      </div>
      

      <style jsx>{`
        @keyframes moveX {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .moveX {
          animation: moveX 20s linear infinite;
        }
      `}</style>
    </div>
  )
}

export default Contact