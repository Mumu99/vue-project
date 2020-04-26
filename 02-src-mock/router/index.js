import Vue from '02-src-mock/router/vue'
import VueRouter from '02-src-mock/router/vue-router'
import routes from './routes'

// 因为编程式路由时, 重复点击会报错(search), 重写push和replace方法
const originPush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function (location, onComplete = () => {}, onAbort) {
  return originPush.call(this, location, onComplete, onAbort)
}
VueRouter.prototype.replace = function (location, onComplete = () => {}, onAbort) {
  return originReplace.call(this, location, onComplete, onAbort)
}

//声明使用路由
Vue.use(VueRouter)
// 实例化路由器对象, 并暴露
export default new VueRouter({
  mode: 'history', // 设置路由地址的模式, hash--> #
  routes // 路由组件注册的数组
})