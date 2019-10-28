import router from '@/plugins/router/document'
import categoria from '@/plugins/router/categoria'
import item from '@/plugins/router/item'

import keyFind from '@/plugins/mixins/keyfind'

export default () => {
  let routes

  if (keyFind.methods.keyFind(location.pathname, 'categoria')) {
    routes = categoria
  } else if (keyFind.methods.keyFind(location.pathname, 'item')) {
    routes = item
  } else {
    routes = router
  }

  return routes
}
