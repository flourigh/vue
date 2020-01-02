const sign = ({ commit }, object) => {
  commit('Login/SIGN',
    object
  , { root: true })
}

const logout = ({ commit }) => {
  commit('Login/LOGOUT', {}, { root: true })
}

const google = ({ commit, dispatch }, firebase) => {
  function loading (value) {
    dispatch('Login/loading',
      value
    , { root: true })
  }

  function save (value) {
    dispatch('Login/sign',
      value
    , { root: true })
    loading(false)
  }

  function cancel () {
    loading(false)
  }

  const provider = new firebase.auth.GoogleAuthProvider()

  return new Promise(() => {
    loading(true)

    firebase.auth().signInWithPopup(provider)
      .then(response => {
        save(response)
      }).catch(error => {
        cancel(error)
      })
  })
}

const loading = ({ commit }, value) => {
  commit('Login/LOADING',
    value
  , { root: true })
}

export {
  sign,
  logout,
  google,
  loading
}
