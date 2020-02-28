const {
  GeoTag
} = require('./src/plugins/tracking/index')

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
} = require('./src/plugins/database/page')

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
      geotag: GeoTag,
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
