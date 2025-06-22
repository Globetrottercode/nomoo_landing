import React, { useState } from 'react'

const faqs = [
  {
    q: 'Convallis metus nisi habitasse sit?',
    a: 'Sed ut sociis luctus purus felis quam vehicula urna facilisis. Nibh aliquam suspendisse est vitae magna quis rhoncus aliquet. Ut elit dictum hendrerit vulputate mauris egestas. Et sit tristique vulputate enim mattis turpis mi nulla. At malesuada velit id quis pellentesque. Purus turpis enim eu eleifend facilisis magna lacus mattis iaculis risus.',
  },
  {
    q: 'Proin bibendum vivamus in viverra ante. Aliquam malesuada tortor nec mauris aliquam vel.',
    a: '',
  },
  {
    q: 'Sodales velit lacus ut nulla et posuere. Turpis nec tempus diam mauris.',
    a: '',
  },
  {
    q: 'Lectus risus neque neque enim. Risus lobortis proin consequat consequat faucibus ornare.',
    a: '',
  },
  {
    q: 'Mattis feugiat elementum bibendum vel morbi arcu. Tristique proin malesuada enim eget commodo.',
    a: '',
  },
  {
    q: 'Lacus interdum egestas consectetur nec sit. Vestibulum facilisis nunc non morbi donec ut tristique sit.',
    a: '',
  },
  {
    q: 'Lacus bibendum enim amet lacinia ornare risus justo. Tellus at gravida sem commodo posuere tortor.',
    a: '',
  },
]

const PlusIcon = () => (
  <svg
    width='20'
    height='20'
    fill='none'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M10 4v12M4 10h12'
      stroke='#00C853'
      strokeWidth='2'
      strokeLinecap='round'
    />
  </svg>
)
const MinusIcon = () => (
  <svg
    width='20'
    height='20'
    fill='none'
    viewBox='0 0 20 20'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M4 10h12' stroke='#00C853' strokeWidth='2' strokeLinecap='round' />
  </svg>
)

const FAQSection = () => {
  const [open, setOpen] = useState(0)
  return (
    <section className='w-full flex flex-col items-center py-10 sm:py-20 bg-white px-2 sm:px-0'>
      <div className='max-w-5xl w-full mx-auto text-center mb-8'>
        <div className='text-[#00C853] font-semibold text-base mb-2'>FAQs</div>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-2'>
          Answers to some of your questions
        </h2>
        <p className='text-[#888] text-sm sm:text-base'>
          Don&apos;t find the answers you were looking for? Contact us at{' '}
          <a
            href='mailto:nomoo@gmail.com'
            className='text-[#00C853] font-semibold'
          >
            nomoo@gmail.com
          </a>
        </p>
      </div>
      <div className='max-w-5xl w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
        {faqs.map((faq, i) => (
          <div
            key={i}
            className='bg-white border border-gray-200 rounded-lg p-4 flex flex-col cursor-pointer transition hover:shadow'
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <div className='flex items-center justify-between'>
              <span className='font-semibold text-sm sm:text-base text-black'>
                {faq.q}
              </span>
              <span>{open === i ? <MinusIcon /> : <PlusIcon />}</span>
            </div>
            {faq.a && open === i && (
              <div className='text-gray-500 text-xs sm:text-sm mt-2 text-left'>
                {faq.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default FAQSection
