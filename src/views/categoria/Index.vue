<template>
  <baixo-fender
    :list="catalog.categoria[$route.params.tipo][$route.params.nome]"
  />
</template>

<script>
  import { mapState } from 'vuex'

  import BaixoFender from '@/views/categoria/baixo/Fender'

  import keyFind from '@/plugins/mixins/keyfind'

  export default {
    components: {
      BaixoFender
    },

    mixins: [
      keyFind
    ],

    computed: {
      ...mapState('Search', [ 'catalog' ])
    },

    created () {
      if (
        !this.keyFind(this.catalog.categoria, this.$route.params.tipo) ||
        !this.keyFind(this.catalog.categoria, this.$route.params.nome)
      ) this.$router.push('/')
    }
  }
</script>
