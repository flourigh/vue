const categorias = (state) => (location, find) => {
  return state.catalog[location].map(o => o[find])
}

export {
  categorias
}
