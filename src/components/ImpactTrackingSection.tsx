import React from 'react'

// SVGs as React components (inline for now, can be moved to separate files if needed)
const SmartphoneIcon = () => (
  <svg
    width='40'
    height='40'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='10' y='5' width='20' height='30' rx='3' fill='#00C853' />
    <rect x='13' y='8' width='14' height='22' rx='2' fill='white' />
    <circle cx='20' cy='32' r='1.5' fill='#00C853' />
  </svg>
)
const BulbIcon = () => (
  <svg
    width='40'
    height='40'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <ellipse cx='20' cy='18' rx='10' ry='12' fill='#00C853' />
    <rect x='16' y='28' width='8' height='6' rx='2' fill='#B2FF59' />
    <rect x='18' y='34' width='4' height='2' rx='1' fill='#00C853' />
  </svg>
)
const CarIcon = () => (
  <svg
    width='40'
    height='40'
    viewBox='0 0 40 40'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <rect x='8' y='20' width='24' height='8' rx='2' fill='#00C853' />
    <rect x='12' y='16' width='16' height='8' rx='2' fill='#B2FF59' />
    <circle cx='14' cy='30' r='3' fill='#00C853' />
    <circle cx='26' cy='30' r='3' fill='#00C853' />
  </svg>
)

const restaurantCards = [
  {
    image:
      'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=400&q=80',
    rating: 4.5,
    distance: '200m',
    name: "Fleming's Prime Steakhouse & Wine Bar",
    options: 12,
    veganOptions: 6,
    vegan: true,
  },
  {
    image:
      'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80',
    rating: 4.0,
    distance: '500m',
    name: 'Yard House',
    options: 10,
    veganOptions: 5,
    vegan: true,
  },
  {
    image:
      'https://images.unsplash.com/photo-1525610553991-2bede1a236e2?auto=format&fit=crop&w=400&q=80',
    rating: 3.9,
    distance: '1.2km',
    name: 'Cara Cara',
    options: 5,
    veganOptions: 5,
    vegan: true,
  },
  {
    image:
      'https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80',
    rating: 3.8,
    distance: '1.2km',
    name: 'Mad Jackie Hibachi & Sushi Catering California',
    options: 5,
    veganOptions: 5,
    vegan: true,
  },
]

const ImpactTrackingSection = () => {
  return (
    <section className='w-full flex flex-col items-center py-16 bg-white'>
      <div className='text-center mb-10'>
        <div className='text-green-600 font-semibold text-sm mb-2'>
          Carbon Footprint Tracking
        </div>
        <h2 className='text-3xl md:text-4xl font-bold mb-2'>
          Track Your Impact. Compete to Save the Planet.
        </h2>
        <p className='text-gray-500 max-w-2xl mx-auto text-base md:text-lg'>
          Our unique carbon calculator measures the CO₂ you save with every
          plant-based choice. Compete with friends and restaurants in fun
          challenges and rankings.
        </p>
      </div>
      <div className='flex flex-col md:flex-row items-center justify-center gap-8 w-full max-w-6xl mb-12'>
        {restaurantCards.slice(0, 2).map((card, i) => (
          <div
            key={i}
            className='bg-white rounded-xl shadow-lg p-4 w-64 flex-shrink-0'
          >
            <div className='relative mb-3'>
              <img
                src={card.image}
                alt={card.name}
                className='rounded-lg w-full h-32 object-cover'
              />
              <div className='absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-bold'>
                {card.rating} ★
              </div>
              <div className='absolute top-2 right-2 bg-white text-green-600 text-xs px-2 py-1 rounded-full font-bold'>
                {card.distance}
              </div>
              <div className='absolute -top-4 right-1'>
                <span className='bg-green-500 text-white text-xs px-2 py-1 rounded-t-lg font-bold shadow'>
                  VEGAN FOOD
                </span>
              </div>
            </div>
            <div className='flex items-center gap-2 mb-1'>
              <span className='text-green-600 font-bold text-sm'>
                {card.options} Options
              </span>
              <span className='text-yellow-500 font-bold text-sm'>
                {card.veganOptions} Options
              </span>
              <span className='bg-gray-200 text-xs px-2 py-0.5 rounded-full'>
                Vegan
              </span>
            </div>
            <div className='font-semibold text-gray-800 text-base leading-tight'>
              {card.name}
            </div>
          </div>
        ))}
        <div className='flex flex-col items-center mx-4'>
          <svg
            width='160'
            height='160'
            viewBox='0 0 160 160'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <circle cx='80' cy='80' r='70' stroke='#E0E0E0' strokeWidth='12' />
            <circle
              cx='80'
              cy='80'
              r='70'
              stroke='#00C853'
              strokeWidth='12'
              strokeDasharray='440'
              strokeDashoffset='110'
            />
            <text
              x='50%'
              y='50%'
              textAnchor='middle'
              dy='.3em'
              fontSize='28'
              fontWeight='bold'
              fill='#222'
            >
              6.1 kg
            </text>
            <text x='50%' y='60%' textAnchor='middle' fontSize='16' fill='#888'>
              SAVED
            </text>
          </svg>
        </div>
        {restaurantCards.slice(2).map((card, i) => (
          <div
            key={i + 2}
            className='bg-white rounded-xl shadow-lg p-4 w-64 flex-shrink-0'
          >
            <div className='relative mb-3'>
              <img
                src={card.image}
                alt={card.name}
                className='rounded-lg w-full h-32 object-cover'
              />
              <div className='absolute top-2 left-2 bg-green-600 text-white text-xs px-2 py-1 rounded-full font-bold'>
                {card.rating} ★
              </div>
              <div className='absolute top-2 right-2 bg-white text-green-600 text-xs px-2 py-1 rounded-full font-bold'>
                {card.distance}
              </div>
              <div className='absolute -top-4 right-1'>
                <span className='bg-green-500 text-white text-xs px-2 py-1 rounded-t-lg font-bold shadow'>
                  VEGAN FOOD
                </span>
              </div>
            </div>
            <div className='flex items-center gap-2 mb-1'>
              <span className='text-green-600 font-bold text-sm'>
                {card.options} Options
              </span>
              <span className='text-yellow-500 font-bold text-sm'>
                {card.veganOptions} Options
              </span>
              <span className='bg-gray-200 text-xs px-2 py-0.5 rounded-full'>
                Vegan
              </span>
            </div>
            <div className='font-semibold text-gray-800 text-base leading-tight'>
              {card.name}
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center w-full'>
        <div className='flex flex-row items-center justify-center gap-16 mb-4'>
          <div className='flex flex-col items-center'>
            <SmartphoneIcon />
            <div className='font-bold text-xl mt-2'>
              754 <span className='font-normal text-base'>times</span>
            </div>
            <div className='text-gray-500 text-sm'>Charging a Smartphone</div>
          </div>
          <div className='flex flex-col items-center'>
            <BulbIcon />
            <div className='font-bold text-xl mt-2'>
              106 <span className='font-normal text-base'>h</span>
            </div>
            <div className='text-gray-500 text-sm'>Using a LED Bulb</div>
          </div>
          <div className='flex flex-col items-center'>
            <CarIcon />
            <div className='font-bold text-xl mt-2'>
              40 <span className='font-normal text-base'>km</span>
            </div>
            <div className='text-gray-500 text-sm'>Driving a Car</div>
          </div>
        </div>
        <div className='w-full flex flex-col items-center mt-2'>
          <svg
            width='320'
            height='24'
            viewBox='0 0 320 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M0 12C80 24 240 0 320 12'
              stroke='#00C853'
              strokeWidth='2'
              fill='none'
            />
          </svg>
          <div className='text-green-600 font-bold text-lg mt-2'>CO₂</div>
          <div className='font-bold text-2xl'>6.1 kg</div>
          <div className='text-gray-500 text-sm'>
            CO₂ saved by eating
            <br />
            Vegan & Vegetarian
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImpactTrackingSection
