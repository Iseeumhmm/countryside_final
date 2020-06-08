import path from 'path'
import fetchContentfulImages from './src/contentful/fetchContentfulImages'

export default {
  getRoutes: async () => {
    const contentfulImages = await fetchContentfulImages()
    let page = (key) => {
      let pageImages = [[ key, contentfulImages['singles'][key]], [ key, contentfulImages['drilldown'][key] ]]
      return pageImages
    }

    return [
      {
        path: '/',
        getData: () =>  contentfulImages['homePage']
      },
      {
        path: '/about',
        template: 'src/pages/about.js',
        getData: () => contentfulImages['ourStory'].items
      },
      {
        path: '/contact',
        template: 'src/pages/contact.js'
      },
      {
        path: '/warranty',
        template: 'src/pages/warranty.js',
      },
      // {
      //   path: '/pool-installs',
      //   template: 'src/pages/pools.js',
      //   getData: () => contentfulImages['singles']
      // },
      {
        path: '/pool-gallery',
        template: 'src/pages/pool-gallery.js',
        getData: () => page("pools")
      },
      {
        path: '/pools',
        template: 'src/pages/servicesPools.js',
        getData: () => page("pools")
      },
      // {
      //   path: '/stonework',
      //   template: 'src/pages/services.js',
      //   getData: () => page("stonework")
      // },
      // {
      //   path: '/retainingwalls',
      //   template: 'src/pages/services.js',
      //   getData: () => page("retainingwalls")
      // },
      // {
      //   path: '/structures',
      //   template: 'src/pages/services.js',
      //   getData: () => page("structures")
      // },
      // {
      //   path: '/woodworking',
      //   template: 'src/pages/services.js',
      //   getData: () => page("woodworking")
      // },
      // {
      //   path: '/woodworking',
      //   template: 'src/pages/services.js',
      //   getData: () => page("woodworking")
      // }
    ]
  },
  // siteRoot: 'https://countrysidelandscape.ca',
  siteRoot: 'https://testing.countrysidelandscape.ca',
  // webpack: (config, { stage }) => {
  //   if (stage === 'prod') {
  //     config.entry = ['babel-polyfill', config.entry]
  //   } else if (stage === 'dev') {
  //     config.entry = ['babel-polyfill', ...config.entry]
  //   }
  //   return config
  // },
  plugins: [
    [
      require.resolve('react-static-plugin-source-filesystem'),
      {
        location: path.resolve('./src/pages'),
      },
    ],
    require.resolve('react-static-plugin-reach-router'),
    require.resolve('react-static-plugin-sitemap'),
  ],
}
