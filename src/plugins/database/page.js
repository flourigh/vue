const Version = process.env.npm_package_version
const Name = 'DuckStack - O mais alto nível de certificação'
const Prefix = 'DuckStack'
const Description = 'Para Programadores que não largam a Idade das Pedras'
const Subject = 'Uma brincadeira baseada no XGH Certification e criada no CodeWalkersDevs Group'
const Color = '#121212'

const Canonical = 'https://beta-duckstack.web.app/'

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
  Prefix,
  Description,
  Subject,
  Color,
  Canonical,
  BaseURL,
  VerificationToken,
  GeoTag
}
