import Firebase from 'firebase/app'
import 'firebase/auth'

const sign = ({ commit }, object) => {
  commit('Login/SIGN',
    object
  , { root: true })
}

const status = ({ dispatch }) => {
  return new Promise(() => {
    Firebase.auth().onAuthStateChanged(() => {
      if (Firebase.auth().currentUser) {
        dispatch('Login/sign',
          {
            user: Firebase.auth().currentUser
          }
        , { root: true })
      }
    })
  })
}

const logout = ({ commit }) => {
  commit('Login/LOGOUT', {}, { root: true })

  Firebase.auth().signOut()
}

const google = ({ commit, dispatch }) => {
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

  const provider = new Firebase.auth.GoogleAuthProvider()

  return new Promise(() => {
    loading(true)

    Firebase.auth().signInWithPopup(provider)
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
  status,
  logout,
  google,
  loading
}
