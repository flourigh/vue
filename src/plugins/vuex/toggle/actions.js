const Toggle = ({ commit }, param) => {
  commit('Toggle/ELEMENTTOGGLE', {
    key: param.key,
    value: param.value
  }, {
    root: true
  })
}

export {
  Toggle
}
