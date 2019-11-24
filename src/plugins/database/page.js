const Version = process.env.npm_package_version
const Title = 'Social Comments'
const Name = 'Social Comments - Crie uma página e fique a vontade'
const Prefix = 'SocialComments'
const Description = 'Páginas de comentários livres'
const Subject = 'Você pode criar páginas livremente para comentar sobre qualquer coisa não Ilicita'
const Terms = 'Qualquer conteúdo presente nas páginas é de responsábilidade do autor do conteúdo estando o programador, izento de qualquer texto publicado'
const Color = '#121212'

const Canonical = 'https://socialcomments.web.app/'

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
