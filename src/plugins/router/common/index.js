import Home from '@/views/Home'
import Comments from '@/views/Comments'

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
    toolbar: treeImport.Toolbar,
    default: Home,
    footer: treeImport.Footer
  }
}

const uri = {
  path: '/:uri',
  name: 'comment',
  components: {
    toolbar: treeImport.Toolbar,
    default: Comments,
    footer: treeImport.Footer
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
  home,
  uri
}
