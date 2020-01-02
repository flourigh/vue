const SIGN = (state, payload) => {
  console.log(payload)

  state.login.status = true
  state.login.user.name = payload.user.displayName
  state.login.user.avatar = payload.user.photoURL
  state.login.user.email = payload.user.email
}

const LOGOUT = (state) => {
  state.login.status = false
  state.login.user.avatar = 'mdi-account-circle'
}

const LOADING = (state, value) => {
  state.login.loading = value
}

export {
  SIGN,
  LOGOUT,
  LOADING
}
