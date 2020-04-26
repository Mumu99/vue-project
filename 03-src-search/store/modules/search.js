// 引入接口
import {
  reqProductList
} from '@/api'
const state = {
  productList: {} // 保存搜索到的商品数据的列表对象
}

const mutations = {
  // 修改用户数据
  RECEIVE_PRODUCT_LIST(state, productList) {
    state.productList = productList
  }
}

const actions = {
  async getProductList({
    commit
  }, productParams) {
    const result = await reqProductList(productParams)
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
  // 品牌的列表数据
  trademarkList(state) {
    return state.productList.trademarkList
  },
  // 属性列表数据
  attrsList(state) {
    return state.productList.attrsList
  },
  // 商品列表数据
  goodsList(state) {
    return state.productList.goodsList
  }
}
export default {
  state,
  mutations,
  actions,
  getters
}