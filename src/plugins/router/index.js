import router from '@/plugins/router/document'

export default () => {
  return router
}

router.beforeEach((to, from, next) => {
  next()
})
