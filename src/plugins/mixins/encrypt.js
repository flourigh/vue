import CryptoJS from 'crypto-js'

export default {
  methods: {
    analyse (query) {
      function uuidv4 () {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
          const r = Math.random() * 16 | 0; const v = c === 'x' ? r : (r & 0x3 | 0x8)
          return v.toString(16)
        })
      }

      const uuid = uuidv4()

      const encrypt = CryptoJS.AES.encrypt(
        JSON.stringify(query),
        uuid
      )

      const bytes = CryptoJS.AES.decrypt(
        encrypt.toString(),
        uuid
      )

      try {
        query = JSON.parse(bytes.toString(CryptoJS.enc.Utf8))
      } catch {
        query = false
      }

      console.log(query)
    }
  }
}
