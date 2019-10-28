import {
  threeImport
} from '@/plugins/router/common'

import Category from '@/views/categoria/Index'

const categoria = {
  path: '/categoria/:tipo/:nome',
  name: 'categoria',
  components: {
    drawer: threeImport.Drawer,
    toolbar: threeImport.Toolbar,
    default: Category,
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
  categoria
}
