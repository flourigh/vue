const actionToggle = ({ commit }, param) => {
  commit('Document/TOGGLE',
    {
      key: param.key,
      value: param.value
    },
    {
      root: true
    }
  )
}

export {
  actionToggle
}
