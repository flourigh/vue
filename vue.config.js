const {
  Name,
  Description,
  Color,
  Version,
  BaseURL,
  Canonical,
  VerificationToken,
  GeoTag,
  Subject
} = require('./page')

/** @Todo
  application-name
*/

module.exports = {
  'transpileDependencies': [
    'vuetify'
  ],

  pages: {
    index: {
      title: Name,
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
    name: Name,
    themeColor: Color,
    msTileColor: Color,
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black-translucent',
    assetsVersion: Version,
    manifestOptions: {
      short_name: 'Catalogo',
      start_url: `./index.html?home=${Version}`,
      display: 'fullscreen'
    }
  }
}
