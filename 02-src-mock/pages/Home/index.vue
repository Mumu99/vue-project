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
    <Floor />
    <!--楼层-->
    <Floor />
    <!--商标-->
    <Brand />
  </div>
</template>

<script>
import components from './homeModules'
export default {
  name: 'Home',
  components,
  // 页面加载后获取轮播图和楼层的数据
  mounted () {
    // 获取轮播图的数据
    this.$store.dispatch('getBanners')
    // 获取楼层的数据
    this.$store.dispatch('getFloors')
  }
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
</style>
