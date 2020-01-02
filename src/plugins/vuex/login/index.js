import state from '@/plugins/vuex/login/state'

import * as mutations from '@/plugins/vuex/login/mutations'
import * as actions from '@/plugins/vuex/login/actions'

export default {
    namespaced: true,
    state,
    mutations,
    actions
}
