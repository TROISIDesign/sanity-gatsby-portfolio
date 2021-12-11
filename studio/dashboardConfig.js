export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '61b43adf2d6bcc66ce095b8e',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-g8v6z15s',
                  apiId: '5d3b1ad3-87d0-49f0-a7e0-9bfad5a7b079'
                },
                {
                  buildHookId: '61b43adfbd0f9374e92d75f2',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-kk6gvhp4',
                  apiId: '0b5a57f0-02d0-43af-bedd-f67b02d25cee'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TROISIDesign/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-kk6gvhp4.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
