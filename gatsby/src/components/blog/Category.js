import React from 'react'
import {faJs, faVuejs, faReact, faNodeJs, faPython} from '@fortawesome/free-brands-svg-icons'
import {faGem, faTint, faTerminal, faBriefcase} from '@fortawesome/free-solid-svg-icons'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function Category ({category}) {
  let icon
  let bg
  let txtColor
  switch (category.title) {
    case 'Javascript':
      icon = faJs
      bg = 'bg-yellow-200'
      txtColor = 'text-black'
      break
    case 'Node.js':
      icon = faNodeJs
      bg = 'bg-green-200'
      txtColor = 'text-black'
      break
    case 'Ruby':
      icon = faGem
      bg = 'bg-yellow-200'
      txtColor = 'text-black'
      break
    case 'Elixir':
      icon = faTint
      bg = 'bg-purple-400'
      txtColor = 'text-white'
      break
    case 'Vue':
      icon = faVuejs
      bg = 'bg-green-400'
      txtColor = 'text-black'
      break
    case 'React':
      icon = faReact
      bg = 'bg-blue-300'
      txtColor = 'text-white'
      break
    case 'Python':
      icon = faPython
      bg = 'bg-blue-500'
      txtColor = 'text-white'
      break
    case 'Career Advice':
      icon = faBriefcase
      bg = 'bg-gray-900'
      txtColor = 'text-white'
      break
    default:
      icon = faTerminal
      bg = 'bg-white border border-black'
      txtColor = 'text-black'
  }

  return (
    <div className={`${bg} ${txtColor} px-2 py-1 flex items-center justify-center rounded`} >
      <FontAwesomeIcon icon={icon} size={'lg'} className='mr-2' />
      {category.title}
    </div>
  )
}

export default Category
