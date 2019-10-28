import {
  threeImport
} from '@/plugins/router/common'

import Item from '@/views/item/Index'

const item = {
  path: '/item/:categoria/:marca/:nome',
  name: 'item',
  components: {
    drawer: threeImport.Drawer,
    toolbar: threeImport.Toolbar,
    default: Item,
    footer: threeImport.Footer
  },
  meta: {
    toolbar: {
      logo: require('@/assets/img/categoria/logo-sommexe-categoria.png'),
      background: require('@/assets/img/categoria/pessoas-pulando-em-show-categoria.png')
    }
  }
}

export {
  item
}
