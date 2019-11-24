import Home from '@/views/Home'
import Coments from '@/views/Coments'

import {
  treeImport
} from '@/plugins/router/common/treeImport'

const wildcard = {
    path: '*',
    redirect: '/'
}

const home = {
  path: '/',
  name: 'index',
  components: {
    toolbar: treeImport.Toolbar,
    default: Home,
    footer: treeImport.Footer
  }
}

const uri = {
  path: '/:uri',
  name: 'coment',
  components: {
    toolbar: treeImport.toolbar,
    default: Coments
  }
}

export {
  treeImport,
  wildcard,
  home,
  uri
}
