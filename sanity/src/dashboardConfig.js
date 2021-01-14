export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fe87387d3fff98964fec252',
                  title: 'Sanity Studio',
                  name: "bishopstudio",
                  apiId: 'b2c28f4e-426f-45f8-b7d6-5607bf16c97c'
                },
                {
                  buildHookId: '5fe87387a33d908e47e21490',
                  title: 'Gatsby Website',
                  name: 'bishoptech',
                  apiId: '8925d01a-e8ce-419e-869e-2dd524c048f0'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bishopTech/website',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://bishop.tech', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
