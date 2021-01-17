import React from 'react'

export default ({node}) => {
  if (!node || !node.code) {
    return null
  }
  const {fileName, lang, code} = node
  return (
    <div>
      file name = {fileName} <br />
      language = {lang}
      <pre lang='javascript'>
        {code}
      </pre>
    </div>
  )
}
