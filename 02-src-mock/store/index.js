// 引入vue
import Vue from '02-src-mock/store/vue'
// 引入vuex
import Vuex from '02-src-mock/store/vuex'
// 声明使用Vuex
Vue.use(Vuex)
// 引入state, mutations, actions, getters
// import state from './state'
// import mutations from './mutations'
// import actions from './actions'
// import getters from './getters'
import modules from './modules'
// 实例化Vuex的仓库对象, 并暴露出去
export default new Vuex.Store({
  // state,
  // mutations,
  // actions,
  // getters
  modules
})