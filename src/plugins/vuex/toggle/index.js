import state from '@/plugins/vuex/toggle/state'

import * as getters from '@/plugins/vuex/toggle/getters'
import * as mutations from '@/plugins/vuex/toggle/mutations'
import * as actions from '@/plugins/vuex/toggle/actions'

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions
}
