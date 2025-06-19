const GreenChoicesSection = () => {
  return (
    <section className='w-full bg-white flex justify-center py-20 px-4'>
      <div className='max-w-7xl w-full flex flex-col md:flex-row items-center gap-12'>
        {/* Left: Text and Options */}
        <div className='flex-1 flex flex-col gap-6 min-w-[340px]'>
          <span className='text-[#0AAD0B] font-semibold text-lg'>
            Green Choices
          </span>
          <h2 className='text-3xl md:text-4xl font-bold leading-tight mb-2  text-black'>
            Discover Your Plant-
            <br />
            Based Choices
          </h2>
          <p className='text-[#888] text-base max-w-md'>
            Look for <b>the leaf icon</b> on restaurant cards to easily spot
            100% plant-based dishes or options that can be customized to be
            plant-based to fit your dietary preferences.
          </p>
          <div className='flex gap-6 mt-6'>
            {/* Plant-based options card */}
            <div className='bg-white rounded-xl shadow-lg p-5 min-w-[160px] flex flex-col gap-2 border border-[#E6F6E6]'>
              <div className='flex items-center gap-2 mb-1'>
                <span className='bg-[#0AAD0B] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold'>
                  🍃
                </span>
                <span className='text-[#0AAD0B] font-bold text-lg'>6</span>
                <span className='text-xs text-[#0AAD0B]'>Options</span>
              </div>
              <div className='flex flex-col gap-1 text-sm'>
                <div className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    checked
                    readOnly
                    className='accent-[#0AAD0B]'
                  />
                  <span>Sofritas</span>
                </div>
                <div className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    checked
                    readOnly
                    className='accent-[#0AAD0B]'
                  />
                  <span>Tofu</span>
                </div>
                <div className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    checked
                    readOnly
                    className='accent-[#0AAD0B]'
                  />
                  <span>Tempeh</span>
                </div>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' className='accent-[#0AAD0B]' />
                  <span>Beans</span>
                </div>
                <div className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    checked
                    readOnly
                    className='accent-[#0AAD0B]'
                  />
                  <span>Rice</span>
                </div>
              </div>
              <button className='mt-3 bg-[#0AAD0B] text-white rounded-md px-3 py-1 text-xs font-semibold'>
                Customize your dish
              </button>
            </div>
            {/* Non-vegan options card */}
            <div className='bg-white rounded-xl shadow-lg p-5 min-w-[160px] flex flex-col gap-2 border border-[#FFEEDB] relative'>
              <div className='flex items-center gap-2 mb-1'>
                <span className='bg-[#FF9900] text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold'>
                  🍃
                </span>
                <span className='text-[#FF9900] font-bold text-lg'>4</span>
                <span className='text-xs text-[#FF9900]'>Options</span>
              </div>
              <div className='flex flex-col gap-1 text-sm'>
                <div className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    checked
                    readOnly
                    className='accent-[#FF9900]'
                  />
                  <span>Chicken</span>
                </div>
                <div className='flex items-center gap-2'>
                  <input
                    type='checkbox'
                    checked
                    readOnly
                    className='accent-[#FF9900]'
                  />
                  <span>Shiitake</span>
                </div>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' className='accent-[#FF9900]' />
                  <span>Portobello</span>
                </div>
                <div className='flex items-center gap-2'>
                  <input type='checkbox' className='accent-[#FF9900]' />
                  <span>Seitan</span>
                </div>
              </div>
              <button className='mt-3 bg-[#FF9900] text-white rounded-md px-3 py-1 text-xs font-semibold'>
                Customize your dish
              </button>
              <span className='absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-[#0AAD0B] whitespace-nowrap'>
                Remove &quot;Chicken&quot; to make your dish Vegan/Vegetarian.
              </span>
            </div>
          </div>
        </div>
        {/* Right: Phone and Restaurant Cards */}
        <div className='flex-1 flex flex-col items-center gap-8 min-w-[340px]'>
          {/* Phone mockup */}
          <div className='relative w-[320px] h-[420px] flex items-center justify-center'>
            <div className='absolute -top-6 left-1/2 -translate-x-1/2 text-xs text-[#0AAD0B] whitespace-nowrap'>
              Vegan/Vegetarian restaurants near me
            </div>
            <div className='absolute w-full h-full bg-[#F5FFF5] rounded-3xl z-0' />
            <div className='relative z-10 w-[90%] h-[90%] bg-[#F8F8F8] rounded-3xl border border-[#E6F6E6] flex items-center justify-center'>
              {/* Placeholder for phone UI */}
              <span className='text-[#bbb] text-lg'>[App UI Image]</span>
            </div>
          </div>
          {/* Restaurant cards */}
          <div className='flex gap-4 w-full justify-center flex-wrap'>
            {/* Card 1 */}
            <div className='bg-white rounded-xl shadow-md p-3 min-w-[180px] max-w-[200px] flex flex-col gap-2 border border-[#E6F6E6]'>
              <div className='flex gap-2 items-center text-xs mb-1'>
                <span className='bg-[#0AAD0B] text-white rounded-full w-5 h-5 flex items-center justify-center'>
                  🍃
                </span>
                <span className='text-[#0AAD0B] font-bold'>12 Options</span>
                <span className='bg-[#FF9900] text-white rounded-full w-5 h-5 flex items-center justify-center ml-2'>
                  🍃
                </span>
                <span className='text-[#FF9900] font-bold'>6 Options</span>
                <span className='ml-2 text-[#FF9900] font-semibold'>Vegan</span>
              </div>
              <div className='w-full h-20 bg-[#F5FFF5] rounded-md flex items-center justify-center text-[#bbb]'>
                [Image]
              </div>
              <div className='font-semibold text-sm mt-1'>
                Fleming&apos;s Prime Steakhouse & Wine Bar
              </div>
            </div>
            {/* Card 2 */}
            <div className='bg-white rounded-xl shadow-md p-3 min-w-[180px] max-w-[200px] flex flex-col gap-2 border border-[#E6F6E6]'>
              <div className='flex gap-2 items-center text-xs mb-1'>
                <span className='bg-[#0AAD0B] text-white rounded-full w-5 h-5 flex items-center justify-center'>
                  🍃
                </span>
                <span className='text-[#0AAD0B] font-bold'>10 Options</span>
                <span className='bg-[#FF9900] text-white rounded-full w-5 h-5 flex items-center justify-center ml-2'>
                  🍃
                </span>
                <span className='text-[#FF9900] font-bold'>5 Options</span>
                <span className='ml-2 text-[#FF9900] font-semibold'>Vegan</span>
              </div>
              <div className='w-full h-20 bg-[#F5FFF5] rounded-md flex items-center justify-center text-[#bbb]'>
                [Image]
              </div>
              <div className='font-semibold text-sm mt-1'>Yard House</div>
            </div>
            {/* Card 3 */}
            <div className='bg-white rounded-xl shadow-md p-3 min-w-[180px] max-w-[200px] flex flex-col gap-2 border border-[#E6F6E6]'>
              <div className='flex gap-2 items-center text-xs mb-1'>
                <span className='bg-[#0AAD0B] text-white rounded-full w-5 h-5 flex items-center justify-center'>
                  🍃
                </span>
                <span className='text-[#0AAD0B] font-bold'>5 Options</span>
                <span className='bg-[#FF9900] text-white rounded-full w-5 h-5 flex items-center justify-center ml-2'>
                  🍃
                </span>
                <span className='text-[#FF9900] font-bold'>5 Options</span>
                <span className='ml-2 text-[#FF9900] font-semibold'>Vegan</span>
              </div>
              <div className='w-full h-20 bg-[#F5FFF5] rounded-md flex items-center justify-center text-[#bbb]'>
                [Image]
              </div>
              <div className='font-semibold text-sm mt-1'>Cara Cara</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default GreenChoicesSection
