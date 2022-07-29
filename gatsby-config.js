module.exports = {
  siteMetadata: {
    title: `Юридические услуги в Новороссийске`,
    description: `Владимир Конюхов. Юридические услуги в Краснодарском крае и Новороссийске. Более 20 лет решения сложных юридических вопросов. За это время был накоплен богатый и глубокий опыт в юридической сфере, позволяющий разрешать успешно даже самые сложные судебные дела. Стоит открыть юристу все тонкости ситуации – а он, храня адвокатскую тайну, предложит не одно, а несколько продуктивных решений.`,
    author: `@Kofeinich`,
    siteUrl: `https://advocate-etalon.ru/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        /**
         * @property {boolean} [resetCSS=true]
         * if false, this plugin will not use `<CSSReset />
         */
        resetCSS: true,
        /**
         * @property {boolean} [isUsingColorMode=true]
         * if false, this plugin will not use <ColorModeProvider />
         */
        isUsingColorMode: true,
      },
    },
    {
      resolve: `gatsby-plugin-yandex-metrika`,
      options: {
        // The ID of yandex metrika.
        trackingId: 89714545,
        // Enabled a webvisor. The default value is `false`.
        webvisor: true,
        // Enables tracking a hash in URL. The default value is `false`.
        trackHash: true,
        // Defines where to place the tracking script - `false` means before body (slower loading, more hits)
        // and `true` means after the body (faster loading, less hits). The default value is `false`.
        afterBody: true,
        // Use `defer` attribute of metrika script. If set to `false` - script will be loaded with `async` attribute.
        // Async enables earlier loading of the metrika but it can negatively affect page loading speed. The default value is `false`.
        defer: false,
      },
    },
  ],
}
