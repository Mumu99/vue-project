<template>
  <div class="container">
    <Header />
    <router-view></router-view>
    <Footer v-show="!$route.meta.isShowFooter" />
  </div>
</template>

<script>
// 引入Header组件, Footer组件
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  // 页面加载完成之后的回调
  mounted () {
    this.$store.dispatch('getBaseCategoryList')
    console.log(this.$store)
  }
}
</script>

<style scoped lang="less" rel="stylesheet/less">
</style>
