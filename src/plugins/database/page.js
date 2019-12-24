const Version = process.env.npm_package_version
const Title = process.env.npm_package_displayName
const Name = process.env.npm_package_name
const Prefix = process.env.npm_package_displayName
const Description = process.env.npm_package_description
const Subject = process.env.npm_package_description
const Terms = 'Nenhum password gerado ficará armazenado em lugar algum'
const Color = '#000000'

const Canonical = process.env.npm_package_homepage

const BaseURL = process.env.BASE_URL
  ? process.env.BASE_URL
  : '/'

const VerificationToken = {
  Google: 'google-site-verification'
}

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
  VerificationToken
}
