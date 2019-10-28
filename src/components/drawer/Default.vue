<template>
  <v-navigation-drawer
    v-model="drawer"
    temporary
    app
  >
    <v-expansion-panels
      multiple
      accordion
    >
      <v-btn
        text
        large
        class="mb-5"
        @click="openLink('/')"
      >
        {{ title }}
      </v-btn>

      <v-expansion-panel
        v-for="(next, i) in catalog.home"
        :key="i"
      >
        <v-expansion-panel-header
          expand-icon="mdi-menu-down"
        >
          {{ next.nome }}
        </v-expansion-panel-header>

        <v-expansion-panel-content
          class="v-expansion-panel-content-modify"
        >
          <v-list
            class="pl-2 grey lighten-3"
          >
            <v-list-item-group>
              <v-list-item
                v-for="(item, k) in getList(catalog.categoria, next)"
                :key="k"
                @click="openLink(next.categoria, item)"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item" />
                </v-list-item-content>

                <v-list-item-icon>
                  <v-icon size="12">
                    fas fa-greater-than
                  </v-icon>
                </v-list-item-icon>
              </v-list-item>
            </v-list-item-group>
          </v-list>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-navigation-drawer>
</template>

<style lang="stylus">
  .v-expansion-panel-content-modify
    .v-expansion-panel-content__wrap
      padding 0 !important
</style>

<script>
  import { mapState, mapActions } from 'vuex'

  export default {
    computed: {
      ...mapState('Document', [ 'title', 'toggle' ]),
      ...mapState('Search', [ 'catalog' ]),

      drawer: {
        get () {
          return this.toggle.drawer
        },
        set (value) {
          this.actionToggle({ key: 'drawer', value: value })
        }
      }
    },

    methods: {
      ...mapActions('Document', [ 'actionToggle' ]),

      openLink (param, item) {
        if (param === '/') {
          this.$router.push('/')
          return
        }

        if (item) {
          this.$router.push(`/item/${param}/${item.replace(/ /g, '').toLowerCase()}`)
        } else {
          this.$router.push(`/categoria/${param}`)
        }
      },

      getList (itens, next) {
        if (itens[next.categoria.split('/')[0]]) {
          return itens[next.categoria.split('/')[0]][next.categoria.split('/')[1]].descricao
        }
      }
    }
  }
</script>
