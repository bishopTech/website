import React from 'react'
import {faJs, faVuejs, faReact, faNodeJs} from '@fortawesome/free-brands-svg-icons'
import {faGem, faTint, faCode, faTerminal} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Category ({category}) {
  let icon
  let bg
  let txtColor
  switch (category.title) {
    case 'Javascript':
      icon = faJs
      bg = 'bg-yellow-200'
      break
    case 'Ruby':
      icon = faGem
      break
    default:
      icon = faTerminal
      bg = 'bg-white border border-black'
      txtColor = 'text-black'
  }

  return (
    <div className={`${bg} px-2 py-1 flex items-center justify-center rounded`} >
      <FontAwesomeIcon icon={icon} size={'lg'} className='mr-2' />
      {category.title}
    </div>
  )
}

export default Category
