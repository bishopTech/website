import React from 'react'
import Figure from './Figure'
import Code from './Code'
import Pen from './Pen'

const serializers = {
  types: {
    authorReference: ({node}) => <span>{node.author.name}</span>,
    mainImage: Figure,
    code: Code,
    codePen: Pen
  }
}

export default serializers
