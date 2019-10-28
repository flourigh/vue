const categoria = (state) => (categoria, find) => {
  return state.catalog[categoria].map(o => o[find])
}

const item = (state) => (item, key) => {
  return state.catalog.categoria[item.categoria][item.marca][key][state.catalog.categoria[item.categoria][item.marca].descricao.map(o => o.replace(/ /g, '').toLowerCase()).indexOf(item.nome)]
}

export {
  categoria,
  item
}
