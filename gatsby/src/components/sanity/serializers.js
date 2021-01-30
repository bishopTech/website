import React from 'react'
import Figure from './Figure'
import Code from './Code'
import Pen from './Pen'
import Highlighted from './Highlighted'

const serializers = {
  types: {
    mainImage: Figure,
    code: Code,
    codePen: Pen
  },
  marks: {
    highlight: Highlighted
  }
}

export default serializers
