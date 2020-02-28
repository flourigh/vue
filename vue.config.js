const {
  Title,
  Prefix,
  Description,
  Color,
  Version,
  BaseURL,
  Canonical,
  VerificationToken,
  Subject
} = require('./src/data/page')

const {
  GeoTag
} = require('./src/plugins/tracking/index')

module.exports = {
  transpileDependencies: [
    'vuetify'
  ],

  pages: {
    index: {
      title: Title,
      description: Description,
      subject: Subject,
      base: BaseURL,
      canonical: Canonical,
      google: {
        VerifyToken: VerificationToken.Google
      },
      geotag: GeoTag.then(response => { return { ...response } }),
      entry: './src/main'
    }
  },

  pwa: {
    name: Title,
    themeColor: Color,
    msTileColor: Color,
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    assetsVersion: Version,
    manifestOptions: {
      short_name: Prefix,
      start_url: `./?home=${Version}`,
      display: 'standalone'
    },
    workboxPluginMode: 'GenerateSW'
  }
}
