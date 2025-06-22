import React from 'react'

const features = [
  {
    icon: (
      <svg
        width='36'
        height='36'
        fill='none'
        viewBox='0 0 36 36'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect x='6' y='6' width='24' height='24' rx='6' fill='#00C853' />
        <rect x='11' y='11' width='14' height='14' rx='3' fill='white' />
        <rect x='15' y='15' width='6' height='6' rx='1' fill='#00C853' />
      </svg>
    ),
    title: 'Ingredient Scanner',
    desc: 'It quickly identifies and analyzes product ingredients using a camera or barcode, providing information like allergens or nutrition.',
  },
  {
    icon: (
      <svg
        width='36'
        height='36'
        fill='none'
        viewBox='0 0 36 36'
        xmlns='http://www.w3.org/2000/svg'
      >
        <rect x='6' y='6' width='24' height='24' rx='6' fill='#00C853' />
        <rect x='13' y='13' width='10' height='10' rx='2' fill='white' />
        <rect x='16' y='10' width='4' height='4' rx='1' fill='#00C853' />
      </svg>
    ),
    title: 'Real-time Menu Analyzer',
    desc: 'It instantly evaluates menu items, often in a restaurant setting, to provide immediate insights on factors like nutritional content, allergens, or pricing.',
  },
  {
    icon: (
      <svg
        width='36'
        height='36'
        fill='none'
        viewBox='0 0 36 36'
        xmlns='http://www.w3.org/2000/svg'
      >
        <ellipse cx='18' cy='18' rx='12' ry='12' fill='#00C853' />
        <rect x='15' y='10' width='6' height='12' rx='2' fill='white' />
        <rect x='17' y='24' width='2' height='2' rx='1' fill='#00C853' />
      </svg>
    ),
    title: 'Smart Substitution Suggestions',
    desc: 'It automatically recommends alternative items or ingredients based on various factors like availability, dietary needs, or preferences.',
  },
]

const HowItWorksSection = () => {
  return (
    <section className='w-full flex flex-col items-center py-10 sm:py-20 bg-white px-2 sm:px-0'>
      <div className='max-w-7xl w-full flex flex-col md:flex-row justify-between items-start gap-8 mx-auto'>
        {/* Left: Title and Subtitle */}
        <div className='flex-1 min-w-0'>
          <div className='text-[#00C853] font-semibold text-base mb-2'>
            How It Works?
          </div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-4 leading-tight'>
            AI That Knows What&apos;s on
            <br className='hidden sm:block' /> Your Plate
          </h2>
        </div>
        {/* Right: Description and Button */}
        <div className='flex-1 min-w-0 flex flex-col items-start md:items-end'>
          <p className='text-[#444] text-sm sm:text-base max-w-xl mb-4 md:text-right'>
            Our proprietary AI scans ingredients, recipes, and menus to
            determine if dishes are vegan, vegetarian, or can easily become so.
            Whether you&apos;re ordering in or dining out, we help you make
            informed, ethical food choices.
          </p>
          <a
            href='#'
            className='inline-flex items-center px-5 py-2 border border-[#00C853] text-[#00C853] font-semibold rounded-md hover:bg-[#00C853] hover:text-white transition text-sm'
          >
            Join 8900+ users on the waitlist
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
      {/* Features */}
      <div className='max-w-5xl w-full flex flex-col sm:flex-row justify-between items-center gap-8 mt-10 mx-auto'>
        {features.map((f, i) => (
          <div
            key={i}
            className='flex flex-col items-center text-center flex-1 min-w-[200px] max-w-xs'
          >
            <div className='mb-3'>{f.icon}</div>
            <div className='font-bold text-base sm:text-lg mb-1 text-black'>
              {f.title}
            </div>
            <div className='text-gray-500 text-xs sm:text-sm'>{f.desc}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowItWorksSection
