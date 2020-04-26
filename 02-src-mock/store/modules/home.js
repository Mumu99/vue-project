// 包含多个间接修改状态数据的方法的对象
import {
  reqBaseCategoryList,
  reqBanners,
  reqFloors
} from '02-src-mock/store/modules/@/api'

const state = {
  baseCategoryList: [], // 三级分类的信息数据的数组
  banners: [], // 用来保存大轮播图的数据的数组
  floors: [] // 用来保存楼层数据的数组
}

const mutations = {
  // 直接修改三级分类的信息数据
  RECEIVE_BASE_CATEGORY_LIST(state, baseCategoryList) {
    // 因为页面显示的数据行超出,所以就剪切两个
    state.baseCategoryList = baseCategoryList.splice(0, baseCategoryList.length - 2)
  },
  RECEIVE_BANNERS(state, banners) {
    state.banners = banners
  },
  RECEIVE_FLOORS(state, floors) {
    state.floors = floors
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
  },
  // 发送请求, 轮播图和楼层的数据
  async getBanners({
    commit
  }) {
    const result = await reqBanners()
    const {
      code,
      data
    } = result
    if (code === 200) {
      commit('RECEIVE_BANNERS', data)
    }
  },
  // 发送请求, 轮播图和楼层的数据
  async getFloors({
    commit
  }) {
    const result = await reqFloors()
    const {
      code,
      data
    } = result
    if (code === 200) {
      commit('RECEIVE_FLOORS', data)
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