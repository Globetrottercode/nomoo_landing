import React from 'react'

const AllInOneSection = () => {
  return (
    <section className='w-full flex flex-col items-center py-8 sm:py-14 bg-white px-2 sm:px-0'>
      <div className='max-w-6xl w-full bg-[#014421] rounded-2xl flex flex-col md:flex-row items-center justify-between px-4 sm:px-10 py-8 sm:py-12 gap-8 mx-auto'>
        {/* Left: Text and Buttons */}
        <div className='flex-1 flex flex-col items-start justify-center text-white max-w-lg'>
          <div className='text-base mb-2 opacity-80'>All in One</div>
          <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-2 leading-tight'>
            One App. All Your Plant-Based
            <br className='hidden sm:block' /> Living Needs.
          </h2>
          <p className='text-white text-sm sm:text-base mb-6 opacity-90'>
            NoMoo unites dining, delivery, and impact tracking into a single
            seamless experience—designed for conscious eaters and curious
            explorers alike.
          </p>
          <div className='flex gap-3 w-full flex-wrap'>
            <a
              href='#'
              className='flex items-center bg-white text-[#014421] font-semibold rounded-md px-5 py-2 text-sm shadow hover:bg-gray-100 transition'
            >
              <svg
                width='20'
                height='20'
                fill='none'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2'
              >
                <path
                  d='M16 10.5c0-2.485-2.015-4.5-4.5-4.5S7 8.015 7 10.5c0 2.485 2.015 4.5 4.5 4.5s4.5-2.015 4.5-4.5z'
                  fill='#222'
                />
                <path
                  d='M10 2v2M10 16v2M4.222 4.222l1.414 1.414M14.364 14.364l1.414 1.414M2 10h2M16 10h2M4.222 15.778l1.414-1.414M14.364 5.636l1.414-1.414'
                  stroke='#222'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                />
              </svg>
              Download on the App Store
            </a>
            <a
              href='#'
              className='flex items-center bg-[#00C853] text-white font-semibold rounded-md px-5 py-2 text-sm shadow hover:bg-[#009e3a] transition'
            >
              <svg
                width='20'
                height='20'
                fill='none'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
                className='mr-2'
              >
                <path
                  d='M3 17l9-7-9-7v14zm13.5-7c0-1.38-1.12-2.5-2.5-2.5-.28 0-.53.06-.77.15l-1.73 1.35 1.73 1.35c.24.09.49.15.77.15 1.38 0 2.5-1.12 2.5-2.5z'
                  fill='#fff'
                />
              </svg>
              Get it on Google Play
            </a>
          </div>
        </div>
        {/* Right: Phone Images */}
        <div className='flex-1 flex items-center justify-center w-full relative min-w-[220px]'>
          <div className='relative w-[180px] sm:w-[240px] md:w-[280px] h-[340px] sm:h-[400px] md:h-[440px] z-10'>
            <img
              src='/heroSection/heroPhone.svg'
              alt='App preview'
              className='w-full h-full object-contain rounded-xl shadow-lg'
            />
          </div>
          <div className='absolute right-0 bottom-0 w-[120px] sm:w-[160px] md:w-[180px] h-[220px] sm:h-[260px] md:h-[300px] z-0 hidden sm:block'>
            <img
              src='/heroSection/heroPhone.svg'
              alt='App preview 2'
              className='w-full h-full object-contain rounded-xl opacity-80'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllInOneSection
