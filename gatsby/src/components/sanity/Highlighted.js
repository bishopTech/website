import React from 'react'

export default (props) => {
  if (!props || !props.children) {
    return null
  }

  return (
    <span className='text-white px-1 rounded bg-darker-blue'>
      {props.children}
    </span>
  )
}
