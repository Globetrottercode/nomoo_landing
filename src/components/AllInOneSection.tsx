import React from 'react'
import Image from "next/image";
import AppStore from "../../public/heroSection/appStore.svg";
import Gplay from "../../public/heroSection/google_play.png";

const AppStoreImage = AppStore;
const GplayImage = Gplay;


const AllInOneSection = () => {
  return (
    <section className='w-full hidden bg-green-200 lg:flex flex-col items-center py-8 sm:py-14 bg-white px-2 sm:px-0'>
      <div className=' w-[85%] bg-[#014421] rounded-2xl flex flex-col md:flex-row items-center justify-between overflow-hidden md:py-0 pl-10  '>
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
            href="#"
            className="bg-[#0AAD0B] hover:bg-[#09990a] transition text-white font-semibold rounded-md px-7 py-2 flex justify-center  items-center gap-3 shadow"
          >
            <Image
              width={20}
              height={20}
              alt="App Store"
              src={AppStoreImage}
              className="w-7 h-7"
            />
            <span className="flex md:flex-col flex leading-tight">
              <span className="text-xs mr-1 md:mr-0 md:text-[10px] md:font-extralight">
                Download on the
              </span>
              <span className="text-xs md:text-sm">App Store</span>
            </span>
          </a>
          <a
            href="#"
            className="bg-[#0AAD0B] hover:bg-[#09990a] transition text-white font-semibold rounded-md px-7 py-2 flex justify-center items-center gap-3 shadow"
          >
            <Image
              width={20}
              height={20}
              alt="Google Play"
              src={GplayImage}
              className="w-7 h-7"
            />
            <span className="flex md:flex-col leading-tight">
              <span className="text-xs mr-1 md:mr-0 md:text-[10px] md:font-extralight">
                Get it on
              </span>
              <span className="text-xs md:text-sm">Google Play</span>
            </span>
          </a>
          </div>
        </div>
        {/* Right: Phone Images */}
        <div className='flex-1 flex px-6 items-center justify-center w-full  relative min-w-[220px]'>

          <img
              src='/inOneSection/oneSection.svg'
              alt='App preview 2'
              className='w-[100%] h-[100%] object-contain rounded-xl opacity-80'
            />

          <div className='absolute right-0 bottom-0 w-[120px] sm:w-[160px] md:w-[180px] h-[220px] sm:h-[260px] md:h-[300px] z-0 hidden sm:block'>
          
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllInOneSection
