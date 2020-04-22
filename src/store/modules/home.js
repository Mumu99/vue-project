// 包含多个间接修改状态数据的方法的对象
import {
  reqBaseCategoryList
} from '@/api'

const state = {
  baseCategoryList: [], // 三级分类的信息数据的数组
}

const mutations = {
  // 直接修改三级分类的信息数据
  RECEIVE_BASE_CATEGORY_LIST(state, baseCategoryList) {
    state.baseCategoryList = baseCategoryList
  }
}

const actions = {
  // 发送请求获取三级分类信息数据
  async getBaseCategoryList({
    commit
  }) {
    // 调用接口发送异步请求
    const result = await reqBaseCategoryList()
    const {
      code,
      data
    } = result
    if (code === 200) {
      // 提交对应的mutations, 并修改状态数据
      commit('RECEIVE_BASE_CATEGORY_LIST', data)
    }
  }
}

const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}