import React from 'react'

function WhereToStart (props) {
  return (
    <>
      <div className='py-32 px-16'>
        <h1 className='mb-4 text-5xl text-center text-darkest-blue font-extrabold lg:text-6xl'>
          Where to Start?
        </h1>
        <h2 className='text-center text-lg'>
          If this your first time looking into the world of coding I suggest starting with any of these series:
        </h2>
        <div className='mt-16 flex justify-center'>
          <div className='py-8 px-32 bg-gray-200 group transform transition rounded-full text-center shadow duration-300 hover:scale-110 hover:shadow-xl'>
            <span className='text-3xl group-hover:hidden'>Coming Soon!</span>
            <span className='text-sm hidden transition transition duration-300 group-hover:block text-3xl'>really soon 🤞</span>
          </div>
        </div>
      </div>

    </>
  )
}

export default WhereToStart
