import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full bg-gradient-to-b from-[#F5FFF5] to-white border-t border-[#E6F6E6] pt-8 pb-4 px-2 sm:px-0'>
      <div className='max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-start gap-8'>
        {/* Left: Logo and Description */}
        <div className='flex-1 min-w-[200px] flex flex-col gap-3'>
          <div className='flex items-center gap-2 mb-1'>
            <img src='/headerLogo.svg' alt='NoMoo Logo' className='w-8 h-8' />
            <span className='text-[#00C853] font-bold text-lg'>NoMoo</span>
          </div>
          <div className='text-[#444] text-xs sm:text-sm max-w-xs mb-2'>
            Your all-in-one app to discover, order, and book plant-powered meals
            while making a real impact on the planet.
          </div>
          <div className='flex gap-2 mt-1'>
            <a href='#' className='hover:opacity-80' aria-label='LinkedIn'>
              <svg width='22' height='22' fill='none' viewBox='0 0 22 22'>
                <rect width='22' height='22' rx='4' fill='#00C853' />
                <path
                  d='M7.5 9.5v5M7.5 7.5v.01M11 14.5v-3a1.5 1.5 0 013 0v3M5.5 5.5h11a2 2 0 012 2v7a2 2 0 01-2 2h-11a2 2 0 01-2-2v-7a2 2 0 012-2z'
                  stroke='#fff'
                  strokeWidth='1.2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </a>
            <span className='opacity-40'>
              <svg width='22' height='22' fill='none' viewBox='0 0 22 22'>
                <circle cx='11' cy='11' r='11' fill='#E0E0E0' />
              </svg>
            </span>
            <span className='opacity-40'>
              <svg width='22' height='22' fill='none' viewBox='0 0 22 22'>
                <circle cx='11' cy='11' r='11' fill='#E0E0E0' />
              </svg>
            </span>
          </div>
        </div>
        {/* Center: Quick Links */}
        <div className='flex-1 min-w-[160px] flex flex-col gap-2'>
          <div className='font-semibold text-[#222] mb-2'>Quick links</div>
          <a href='#' className='text-[#444] text-sm hover:text-[#00C853]'>
            Home
          </a>
          <a href='#' className='text-[#444] text-sm hover:text-[#00C853]'>
            How it works?
          </a>
          <a href='#' className='text-[#444] text-sm hover:text-[#00C853]'>
            Key features
          </a>
          <a href='#' className='text-[#444] text-sm hover:text-[#00C853]'>
            FAQs
          </a>
        </div>
        {/* Right: Newsletter */}
        <div className='flex-1 min-w-[220px] flex flex-col gap-2'>
          <div className='font-semibold text-[#222] mb-2'>
            Subscribe to our newsletter
          </div>
          <form className='flex gap-2 w-full mb-2'>
            <input
              type='email'
              placeholder='Enter your email'
              className='flex-1 rounded-md border border-[#E6F6E6] px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#00C853]'
            />
            <button
              type='submit'
              className='bg-[#00C853] text-white font-semibold rounded-md px-4 py-2 text-sm hover:bg-[#009e3a] transition'
            >
              Subscribe
            </button>
          </form>
          <div className='text-[#888] text-xs max-w-xs'>
            Informative insights and practical knowledge to align your values
            team effectively. No jargon. No clutter. No corporate jumble. Just a
            friendly newsletter, delivered bi-monthly.
          </div>
        </div>
      </div>
      <div className='max-w-7xl mx-auto w-full flex flex-col sm:flex-row justify-between items-center gap-2 mt-8 border-t border-[#E6F6E6] pt-4 text-xs text-[#888]'>
        <div className='flex gap-4 mb-2 sm:mb-0'>
          <a href='#' className='hover:text-[#00C853]'>
            Terms &amp; Conditions
          </a>
          <a href='#' className='hover:text-[#00C853]'>
            Privacy Policy
          </a>
        </div>
        <div>
          © 2025 <span className='text-[#00C853] font-semibold'>NoMoo</span>.
          All Rights Reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
