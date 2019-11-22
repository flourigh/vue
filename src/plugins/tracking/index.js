let Axios = require('axios')

let Traking = new Promise((resolve, reject) => {
  Axios.get('https://ipapi.co/json')
    .then((response) => {
      if (!response.data.ip) reject()

      resolve(response.data)
    })
  })

module.exports = {
  Traking
}
