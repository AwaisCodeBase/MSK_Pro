'use client'

import React from 'react'

const Contact = () => {
  return (
    <div className='min-h-screen bg-black text-white flex items-center justify-center'>
      <div className='text-center max-w-4xl mx-auto px-4'>
        <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 uppercase'>
          Contact Us
        </h1>
        <p className='text-lg sm:text-xl lg:text-2xl mb-12'>
          Get in touch to start your next project
        </p>
        <div className='space-y-4'>
          <p className='text-lg'>Email: contact@mskeditors.com</p>
          <p className='text-lg'>Phone: +1 (555) 123-4567</p>
        </div>
      </div>
    </div>
  )
}

export default Contact
