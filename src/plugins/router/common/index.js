import Drawer from '@/components/drawer/Default'
import Toolbar from '@/components/toolbar/Default'
import Footer from '@/components/footer/Default'

import Home from '@/views/Home'

const threeImport = {
  Drawer,
  Toolbar,
  Footer
}

const wildcard = {
    path: '*',
    redirect: '/'
}

const home = {
  path: '/',
  name: 'index',
  components: {
    drawer: threeImport.Drawer,
    toolbar: threeImport.Toolbar,
    default: Home,
    footer: threeImport.Footer
  }
}

export {
  threeImport,
  wildcard,
  home
}
