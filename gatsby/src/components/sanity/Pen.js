import React from 'react'

export default ({node}) => {
  if (!node || !node.code) {
    return null
  }
  const {code} = node
  return <div dangerouslySetInnerHTML={{__html: code}} />
}
