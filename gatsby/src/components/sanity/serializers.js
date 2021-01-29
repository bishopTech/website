import React from 'react'
import Figure from './Figure'
import CodeBlock from './CodeBlock'
import Pen from './Pen'

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    codeBlock: CodeBlock,
    codePen: Pen
  }
}

export default serializers
