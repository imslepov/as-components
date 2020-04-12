const marked = require('marked')
const hljs = require('highlight.js/lib/highlight')

const renderer = new marked.Renderer()

renderer.code = (code, language) => {
  const attrs = {
    class: `hljs ${language} code-example__pre`,
    translate: 'no'
  }

  hljs.getLanguage(language)

  const highlighted = hljs.highlight(language, code).value

  const attrsMarkup = Object.keys(attrs).reduce(
    (markup, attr) => `${markup}${markup ? ' ' : ''}${attr}="${attrs[attr]}"`,
    ''
  )

  return `<div class="code-example"><pre ${attrsMarkup}>${highlighted}</pre></div>`
}

renderer.table = (header, body) => {
  return `
    <table class="as-table">
      <thead class="as-table-thead">${header}</thead>
      <tbody class="as-table-tbody">${body}</tbody>
    </table>
  `
}

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [
    { src: '@/assets/scss/index.scss', lang: 'scss' },
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/components' },
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
    '@/modules/nav',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      config.resolve.alias.vue = 'vue/dist/vue.common'

      config.module.rules.push({
        test: /\.md$/,
        use: [
          {
            loader: 'marked-loader',
            options: {
              renderer,
              // `headerIds` must always be true, since search and
              // table of contents rely on the IDs
              headerIds: true,
              // Handle GitHub flavoured markdown
              gfm: true
            }
          }
        ]
      })
    }
  }
}
