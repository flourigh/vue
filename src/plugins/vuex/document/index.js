import state from '@/plugins/vuex/document/state'

import * as getters from '@/plugins/vuex/document/getters'
import * as mutations from '@/plugins/vuex/document/mutations'
import * as actions from '@/plugins/vuex/document/actions'

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
