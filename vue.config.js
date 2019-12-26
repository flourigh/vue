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
    appleMobileWebAppStatusBarStyle: 'black',
    assetsVersion: Version,
    manifestOptions: {
      version: Version,
      manifest_version: 2,
      short_name: Prefix,
      start_url: `./?home=${Version}`,
      display: 'standalone',
      browser_action: {
        default_popup: 'index.html',
        default_title: Title,
        default_icon: {
          128: './img/icons/favicon-128x128.png',
          32: './img/icons/favicon-32x32.png',
          16: './img/icons/favicon-16x16.png'
        }
      }
    },
    workboxPluginMode: 'GenerateSW'
  }
}
