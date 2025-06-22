import Image from 'next/image'
import React from 'react'

const features = [
  'Live availability and instant booking',
  'Verified plant-based menus',
  'Smart filters based on your values',
  'Curated vegan & vegetarian delivery',
  'AI-powered meal ratings',
  'CO₂ score for each dish',
]

const ArrowIcon = () => (
  <svg
    width='20'
    height='20'
    fill='none'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
    className='inline-block align-middle mr-2'
  >
    <path
      d='M4 10h12M12 6l4 4-4 4'
      stroke='#00C853'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
)

const KeyFeaturesSection = () => {
  return (
    <section className='w-full flex flex-col items-center py-10 sm:py-20 bg-white px-2 sm:px-0'>
      <div className='max-w-7xl w-full flex flex-col md:flex-row items-center gap-10 mx-auto'>
        {/* Left: Phone and Map Image */}
        <div className='flex-1 flex justify-center items-center w-full mb-8 md:mb-0'>
          {/* Replace with your own image if available */}
          <div className='relative w-[360px] h-[520px] flex items-center justify-center'>
            <Image
              src='/tracking.png'
              alt='App preview'
              className='w-full h-auto z-10 rounded-2xl shadow-xl'
              width={360}
              height={520}
            />
            {/* Map overlay (placeholder) */}
            <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[220px] h-[180px] bg-white rounded-xl shadow border border-gray-100 z-0 flex items-center justify-center'>
              <svg
                width='180'
                height='120'
                viewBox='0 0 180 120'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
              >
                <rect width='180' height='120' rx='16' fill='#F8FFF8' />
                <path
                  d='M30 100 Q90 40 150 100'
                  stroke='#00C853'
                  strokeWidth='3'
                  fill='none'
                  strokeDasharray='8 6'
                />
                <circle cx='30' cy='100' r='8' fill='#00C853' />
                <circle cx='150' cy='100' r='8' fill='#00C853' />
                <circle cx='90' cy='60' r='6' fill='#FFD600' />
              </svg>
              {/* User marker */}
              <div className='absolute left-[18px] top-[90px] bg-white rounded-full px-2 py-1 text-xs text-[#222] shadow border border-gray-200'>
                Martins kelly
                <br />
                <span className='text-gray-400'>10km from you</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Text and Features */}
        <div className='flex-1 flex flex-col items-start justify-center w-full max-w-xl'>
          <div className='text-[#00C853] font-semibold text-base mb-2'>
            Key Features
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2 leading-tight'>
            Delivery That&apos;s Better for You and the Planet
          </h2>
          <p className='text-[#888] text-sm sm:text-base mb-6'>
            Craving comfort food without the carbon guilt? NoMoo connects you
            with plant-based delivery options near you, complete with our
            sustainability scores.
          </p>
          <ul className='mb-6 space-y-3 w-full'>
            {features.map((f, i) => (
              <li
                key={i}
                className='flex items-center text-base sm:text-lg text-black'
              >
                <ArrowIcon />
                {f}
              </li>
            ))}
          </ul>
          <a
            href='#'
            className='inline-flex items-center px-6 py-2 bg-[#00C853] text-white font-semibold rounded-md hover:bg-[#009e3a] transition text-sm'
          >
            Experience it now
            <svg
              className='ml-2'
              width='16'
              height='16'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                d='M5 12h14M13 6l6 6-6 6'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default KeyFeaturesSection
