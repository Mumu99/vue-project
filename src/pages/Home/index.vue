<template>
  <div class="container">
    <!-- 商品分类导航 -->
    <TypeNav />
    <!--列表-->
    <ListContainer />
    <!--今日推荐-->
    <TodayRecommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--楼层-->
    <Floor v-for="floor in floors" :key="floor.id" :floor="floor" />
    <!--商标-->
    <Brand />
  </div>
</template>

<script>
// 引入辅助函数
import { mapState } from 'vuex'
export default {
  name: 'Home',
  computed: {
    ...mapState({
      floors: state => state.home.floors
    })
  },
  // 页面加载完毕之后, 执行的回调
  mounted () {
    // 发送异步请求
    this.$store.dispatch('getBanners')
    this.$store.dispatch('getFloors')
  }
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
</style>
