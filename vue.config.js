const {
  GeoTag
} = require('./src/plugins/tracking/index.js')

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
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    assetsVersion: Version,
    manifestOptions: {
      short_name: Prefix,
      start_url: `./index.html?home=${Version}`,
      display: 'fullscreen'
    },
    workboxPluginMode: 'GenerateSW'
  }
}
