// 包含多个间接修改状态数据的方法的对象
import {
  reqBaseCategoryList,
  reqBanners,
  reqFloors
} from '@/api'

const state = {
  baseCategoryList: [], // 三级分类的信息数据的数组
  banners: [], // 用来存储大轮播图数据的数组
  floors: [] // 用来存储楼层数据的数组
}

const mutations = {
  // 直接修改三级分类的信息数据
  RECEIVE_BASE_CATEGORY_LIST(state, baseCategoryList) {
    // 因为页面显示的数据行超出,所以就剪切两个
    state.baseCategoryList = baseCategoryList.splice(0, baseCategoryList.length - 2)
  },
  // 直接修改大轮播图数据
  RECEIVE_BANNERS(state, banners) {
    state.banners = banners
  },
  // 直接修改楼层数据
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