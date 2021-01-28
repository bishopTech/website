import React from 'react'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {xonokai} from 'react-syntax-highlighter/src/styles/prism'

export default ({node}) => {
  if (!node || !node.code) {
    return null
  }
  const {fileName, lang, code} = node
  return (
    <div>
      file name = {fileName} <br />
      language = {lang}

      <SyntaxHighlighter
        showLineNumbers
        showInlineNumbers
        wrapLines
        wrapLongLines
        language={lang || 'text'}
        style={xonokai}
        codeTagProps={{style: {fontFamily: 'Source Code Pro'}}}
        customStyle={{borderRadius: '0.75rem'}}
        className='rounded-xl'
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}
