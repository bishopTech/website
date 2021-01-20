export default {
  name: 'series',
  type: 'document',
  title: 'Series',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'text',
      title: 'Description'
    },
    {
      name: 'mainImage',
      type: 'mainImage',
      title: 'Main image'
    }
  ]
}
