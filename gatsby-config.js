module.exports = {
  plugins: [
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js")
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'gjd2etr', //univia pro
        }
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    },
    'gatsby-plugin-playground',
    'gatsby-transformer-remark'
  ],
}
