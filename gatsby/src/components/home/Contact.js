import React from 'react'

function Contact (props) {
  return (
    <>
      <div className='pt-12 bg-darker-blue'>
        <h1 className='text-4xl text-center text-white'>Get in touch!</h1>
        <div className='shadow-xl mt-8 px-8 md:w-full md:flex md:justify-center md:items-center'>
          <form name='contact' method='POST' data-netlify='true' netlify-honeypot='bot-field' className='md:w-3/4 lg:w-3/5 xl:w-1/2 pb-16' >
            <div className='hidden'>
              <label>Fill this out if you are a bot:</label>
              <input name='bot-field' />
            </div>
            <div className='flex items-center bg-dark-blue rounded-t-lg'>
              <label htmlFor='name' className='w-20 text-right mr-8 text-gray-200'>Name</label>
              <input type='text' name='name' required placeholder='First Last'
                className='flex-1 p-4 pl-0 bg-transparent placeholder-gray-300 outline-none border-none text-white' />
            </div>

            <div className='flex items-center bg-dark-blue mb-6 rounded-b-lg'>
              <label htmlFor='email' className='w-20 text-right mr-8 text-gray-200'>Email</label>
              <input type='email' name='email' required placeholder='email@domain.com'
                className='flex-1 p-4 pl-0 bg-transparent placeholder-gray-300 outline-none border-none text-white border-0 outline-0' />
            </div>

            <div className='flex flex-col items-center bg-dark-blue mb-10 rounded-lg'>
              <label htmlFor='email' className='w-full py-3 text-center text-gray-200 border-b-2 border-gray-300'>Message</label>
              <textarea name='message'
                placeholder='Your Message Here'
                style={{resize: 'none'}}
                required
                className='flex-1 w-full py-10 text-center bg-transparent placeholder-gray-300 outline-none border-none text-white '
              />
            </div>

            {/* <div data-netlify-captcha /> */}

            <button type='submit' className='block w-full rounded bg-light-blue py-3 text-white font-bold shadow transform duration-300 hover:scale-105'>
              Submit
            </button>

          </form>
        </div>

      </div>
    </>
  )
}

export default Contact
