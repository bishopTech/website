import React from 'react'
import {FaCode} from 'react-icons/fa'

function Preview ({value}) {
  const {fileName, lang} = value
  return (
    <div>
      file: { fileName || 'none' } <br />
      lang: { lang }
      <p>
        const hello = world
      </p>
    </div>
  )
}

export default {
  name: 'code',
  type: 'object',
  title: 'Code Block',
  icon: FaCode,
  fields: [
    {
      name: 'fileName',
      type: 'string',
      title: 'File name'
    },
    {
      name: 'lang',
      type: 'string',
      title: 'Language of Code',
      options: {
        list: [
          {title: 'Javascript', value: 'javascript'},
          {title: 'Vue', value: 'vue'},
          {title: 'React', value: 'jsx'},
          {title: 'JSON', value: 'json'},
          {title: 'HTML', value: 'html'},
          {title: 'Ruby', value: 'ruby'},
          {title: 'Elixir', value: 'elixir'},
          {title: 'bash', value: 'sh'}
        ],
        layout: 'radio'
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'code',
      type: 'text',
      title: 'Code',
      validation: Rule => Rule.required()
    }
  ],
  preview: {
    select: {
      fileName: 'fileName',
      lang: 'lang'
    },
    prepare (select) {
      const {fileName, lang} = select
      return {
        title: fileName,
        subtitle: lang
      }
    }
    // component: Preview
  }
}
