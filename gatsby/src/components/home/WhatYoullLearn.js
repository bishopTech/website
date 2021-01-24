import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faJsSquare, faReact, faVuejs} from '@fortawesome/free-brands-svg-icons'
import {faGem, faTint} from '@fortawesome/free-solid-svg-icons'

function WhatYoullLearn (props) {
  return (
    <>
      <div className='bg-darkest-blue'>
        <div className='max-w-7xl mx-auto py-16 px-4 sm:py-20 sm:px-6 lg:px-8'>
          <h2 className='text-3xl font-bold text-white'>
            What you can expect to learn:
          </h2>
          <div className='flow-root mt-8 lg:mt-10'>
            <div className='-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4'>
              <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
                <p className='h-12 text-white hover:text-yellow-300 flex justify-center'>
                  <FontAwesomeIcon icon={faJsSquare} size={'6xl'} className='text-4xl' />
                  <span className='text-3xl ml-3'>Javascript</span>
                </p>
              </div>
              <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
                <p className='h-12 text-white hover:text-blue-300 flex justify-center'>
                  <FontAwesomeIcon icon={faReact} size={'6xl'} className='text-4xl' />
                  <span className='text-3xl ml-3'>React</span>
                </p>
              </div>
              <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
                <p className='h-12 text-white hover:text-green-400 flex justify-center'>
                  <FontAwesomeIcon icon={faVuejs} size={'6xl'} className='text-4xl' />
                  <span className='text-3xl ml-3'>Vue</span>
                </p>
              </div>
              <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
                <p className='h-12 text-white hover:text-red-500 flex justify-center'>
                  <FontAwesomeIcon icon={faGem} size={'6xl'} className='text-4xl' />
                  <span className='text-3xl ml-3'>Ruby</span>
                </p>
              </div>
              <div className='mt-4 ml-8 flex flex-grow flex-shrink-0 lg:flex-grow-0 lg:ml-4'>
                <p className='h-12 text-white hover:text-purple-300 flex justify-center'>
                  <FontAwesomeIcon icon={faTint} size={'6xl'} className='text-4xl' />
                  <span className='text-3xl ml-3'>Elixir</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default WhatYoullLearn
