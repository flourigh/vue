import Home from '@/views/Home'

import {
  treeImport
} from '@/plugins/router/common/treeImport'

const wildcard = {
  path: '*',
  redirect: '/'
}

const home = {
  path: '/',
  name: 'home',
  components: {
    default: Home
  },
  meta: {
    function: [
      'share'
    ]
  }
}

export {
  treeImport,
  wildcard,
  home
}
