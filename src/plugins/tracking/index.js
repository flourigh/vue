const Axios = require('axios')

async function getTraking () {
  try {
    const response = await Axios.get('https://ipapi.co/json')
    if (!response.data.ip) throw new Error()

    // DcTitle: response.city,
    // GeoRegion: `${response.country}-${response.region_code}`,
    // GeoPlacename: response.region,
    // GeoPosition: `${response.latitude};${response.longitude}`,
    // Icbm: `${response.latitude}, ${response.longitude}`

    return response.data
  } catch (error) {
    return error.message
  }
}

const GeoTag = {
  DcTitle: 'Rio de Janeiro',
  GeoRegion: 'BR-RJ',
  GeoPlacename: 'Rio de Janeiro',
  GeoPosition: '-22.911014;-43.209373',
  Icbm: '-22.911014, -43.209373'
}

module.exports = {
  getTraking,
  GeoTag
}
