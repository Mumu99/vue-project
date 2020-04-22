const state = {
  userInfo: {} // 用户的信息对象
}

const mutations = {
  // 修改用户数据
  RECEIVE_USERINFO(state, userInfo) {
    state.userInfo = userInfo
  }
}

const actions = {}

const getters = {}
export default {
  state,
  mutations,
  actions,
  getters
}