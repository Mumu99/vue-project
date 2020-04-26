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
import components from './homeModules'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components,
  mounted () {
    // 获取大轮播图的数据
    this.$store.dispatch('getBanners')
    // 获取楼层数据
    this.$store.dispatch('getFloors')
  },
  computed: {
    ...mapState({
      floors: state => state.home.floors
    })
  }
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
</style>
