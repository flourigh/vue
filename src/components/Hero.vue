<template>
  <div>
    <catalog
      v-if="true"
    />

    <categorias-baixo-fender
      v-if="false"
    />
  </div>
</template>

<script>
  import Catalog from '@/views/Catalog'
  import CategoriasBaixoFender from '@/views/categoria/baixo/Fender.vue'

  export default {
    components: {
      Catalog,
      CategoriasBaixoFender
    }
  }
</script>
