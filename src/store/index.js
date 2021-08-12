import Vuex from 'vuex'
import storeAPI from "../plugins/storeAPI";

const store = new Vuex.Store({
    plugins: [storeAPI],
    state: {
        count: 0,
    },
    mutations: {
        increment (state) {
            state.count++
        }
    },
    actions: {
        incrementAction ({commit}){
            commit('increment')
        }
    }
})

export default store