// let Tracking = require('@/plugins/tracking')

const Version = process.env.npm_package_version
const Title = 'Social Coments'
const Name = 'Social Coments - Crie uma página e fique a vontade'
const Prefix = 'SocialComents'
const Description = 'Páginas de comentários livres'
const Subject = 'Você pode criar páginas livremente para comentar sobre qualquer coisa não Ilicita'
const Terms = 'Qualquer conteúdo presente nas páginas é de responsábilidade do autor do conteúdo estando o programador, izento de qualquer texto publicado'
const Color = '#121212'

const Canonical = 'https://socialcoments.web.app/'

const BaseURL = process.env.BASE_URL
  ? process.env.BASE_URL
  : '/'

const VerificationToken = {
  Google: 'google-site-verification'
}

const GeoTag = {
  DcTitle: 'Rio de Janeiro',
  GeoRegion: 'BR-RJ',
  GeoPlacename: 'Rio de Janeiro',
  GeoPosition: '-22.911014;-43.209373',
  Icbm: '-22.911014, -43.209373'
}

// Tracking.then((resolve) => {
//   console.log(resolve)
// })

module.exports = {
  Version,
  Name,
  Title,
  Prefix,
  Description,
  Subject,
  Terms,
  Color,
  Canonical,
  BaseURL,
  VerificationToken,
  GeoTag
}
