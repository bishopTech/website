import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faInstagram} from '@fortawesome/free-brands-svg-icons'

function InstagramIcon (props) {
  return (
    <>
      <a href='https://www.instagram.com/bishop.tech/' target='_blank' rel='noopener noreferrer' className='text-white hover:bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 rounded-md py-0.5 px-1'>
        <FontAwesomeIcon icon={faInstagram} size={'6xl'} className='text-4xl' />
      </a>
    </>
  )
}

export default InstagramIcon
