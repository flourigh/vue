const Version = process.env.npm_package_version
const Name = 'Catalogo Mobile'
const Description = 'Apresente seus produtos de forma rápida e simplificada para seus clientes e os mantenha sempre atualizados'
const Subject = 'Catalogo online para sua loja ajudar mais ainda seus clientes'
const Color = '#111111'

const Canonical = 'https://bitbucket.org/flourigh/catalog-mobile'

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

module.exports = {
  Version,
  Name,
  Description,
  Subject,
  Color,
  Canonical,
  BaseURL,
  VerificationToken,
  GeoTag
}
