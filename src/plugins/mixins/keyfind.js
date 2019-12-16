export default {
  methods: {
    keyFind (
      param,
      find
    ) {
      const tempArray = []
      const mountReturn = []
      let tempObject

      function isObject (mixedVar) {
        if (mixedVar instanceof Array) {
          return false
        } else {
          return (mixedVar !== null) && (typeof (mixedVar) === 'object')
        }
      }

      function object (obj) {
        for (const key in obj) {
          tempObject = obj[key]

          if (isObject(obj[key])) {
            tempObject = object(obj[key])
          }

          tempArray.push(tempObject)
          mountReturn.push(key)
        }

        return mountReturn.includes(find)
      }

      if (param.constructor === String) {
        return param.search(find) >= 0
      }

      if (param.constructor === Array) {
        return param.includes(find)
      }

      return object(param)
    }
  }
}
