// 引入Vue
import Vue from 'vue'
// 引入App
import App from './App.vue'
// 引入路由
import router from './router'

// 引入vuex中的store
import store from './store'

// 引入mock
import './mock/mockSerer'
// import style
import 'swiper/css/swiper.css'
// 商品分类导航
import TypeNav from './components/TypeNav'
// 列表
import ListContainer from './pages/Home/ListContainer'
// 今日推荐
import TodayRecommend from './pages/Home/TodayRecommend'
// 商品排行
import Rank from './pages/Home/Rank'
// 猜你喜欢
import Like from './pages/Home/Like'
// 楼层
import Floor from './pages/Home/Floor'
// 商标
import Brand from './pages/Home/Brand'
// 引入Carouser
import Carouser from './components/Carouser'

// 注册成全局的组件
Vue.component('TypeNav', TypeNav)
Vue.component('ListContainer', ListContainer)
Vue.component('TodayRecommend', TodayRecommend)
Vue.component('Rank', Rank)
Vue.component('Like', Like)
Vue.component('Floor', Floor)
Vue.component('Brand', Brand)
Vue.component('Carouser', Carouser)
// 设置浏览器的控制台中是否显示默认提示信息
Vue.config.productionTip = false
// 创建Vue实例
new Vue({
  render: h => h(App),
  // 注册路由
  router,
  // 注册仓库
  store
}).$mount('#app')