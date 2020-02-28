const Axios = require('axios')

let GeoTag = {
  DcTitle: 'Rio de Janeiro',
  GeoRegion: 'BR-RJ',
  GeoPlacename: 'Rio de Janeiro',
  GeoPosition: '-22.911014;-43.209373',
  Icbm: '-22.911014, -43.209373'
}

function SaveTraking (obj) {
  GeoTag = { ...obj }
}

async function getTraking () {
  try {
    const response = await Axios.get('https://ipapi.co/json')
    if (!response.data.ip) throw new Error()

    SaveTraking(response.data)

    return GeoTag
  } catch (error) {
    return error.message
  }
}

module.exports = {
  GeoTag: getTraking().then(response => { return { ...response } })
}
