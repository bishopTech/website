import React from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {xonokai} from 'react-syntax-highlighter/src/styles/prism'

// Font Awesome
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faJsSquare, faReact, faVuejs} from '@fortawesome/free-brands-svg-icons'
import {faGem, faTint, faCode} from '@fortawesome/free-solid-svg-icons'

export default ({node}) => {
  if (!node || !node.code) {
    return null
  }
  const {fileName, lang, code} = node

  // Swtich statement for icons
  let icon, color
  switch (lang) {
    case 'javascript':
      icon = faJsSquare
      color = 'text-yellow-300'
      break
    case 'elixir':
      icon = faTint
      color = 'text-purple-300'
      break
    case 'ruby':
      icon = faGem
      color = 'text-red-500'
      break

    default:
      icon = faCode
      color = 'text-white'
  }

  // If file exists
  let title
  if (fileName) {
    title = (
      <>
        <FontAwesomeIcon icon={icon} size={'6xl'} className={`text-2xl mr-3 ${color}`} />
        {fileName}
      </>
    )
  } else {
    title = (
      <>

      </>
    )
  }

  return (
    <div className='rounded-xl' style={{background: 'rgb(42, 42, 42) none repeat scroll 0% 0%'}}>
      <div className='flex items-center px-6 pt-3 pb-0 mb-0 text-lg text-white'>
        {title}
      </div>

      <SyntaxHighlighter
        showLineNumbers
        showInlineNumbers
        wrapLines
        wrapLongLines
        language={lang || 'text'}
        style={xonokai}
        codeTagProps={{style: {fontFamily: 'Dank Mono'}}}
        customStyle={{borderRadius: '0.75rem', border: 'none', marginTop: 0, paddingTop: 0, paddingBottom: 5}}
        className='m-0 rounded-xl'
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
