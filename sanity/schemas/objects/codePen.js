import {FaCodepen} from 'react-icons/fa'

export default {
  name: 'codePen',
  type: 'object',
  title: 'Code Pen',
  icon: FaCodepen,
  fields: [
    {
      name: 'code',
      type: 'text',
      title: 'Code Pen Code',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      code: 'code'
    },
    prepare (select) {
      const {code} = select
      return {
        code: code
      }
    }
  }
}
