// 引入接口
import {
  reqProductList
} from '@/api'
const state = {
  productObj: {} // 搜索商品的列表数据
}
// 直接修改数据的方法
const mutations = {
  RECEIVE_PRODUCT_LIST(state, productObj) {
    state.productObj = productObj
  }
}
// 间接修改数据的方法
const actions = {
  async getProductObj({
    commit
  }, params) {
    const result = await reqProductList(params)
    const {
      code,
      data
    } = result
    if (code === 200) {
      commit('RECEIVE_PRODUCT_LIST', data)
    }
  }
}

const getters = {
  // 品牌的数据列表
  trademarkList(state) {
    return state.productObj.trademarkList
  },
  // 属性列表数据
  attrsList(state) {
    return state.productObj.attrsList
  },
  // 商品列表数据
  goodsList(state) {
    return state.productObj.goodsList
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}