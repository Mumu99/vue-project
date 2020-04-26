<template>
  <div class="swiper-container" ref="bannerRef">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="banner in banners" :key="banner.id">
        <img :src="banner.imgUrl" alt />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination" />

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev" />
    <div class="swiper-button-next" />
  </div>
</template>

<script>
// 引入Swiper
import Swiper from 'swiper'
export default {
  name: 'Carousel',
  props: {
    //注册组件
    banners: Array
  },
  watch: {
    // 该回调将会在侦听开始之后被立即调用
    banners: {
      handler () {
        this.$nextTick(() => {
          if (this.banners.length === 0) return
          new Swiper(this.$refs.bannerRef, {
            loop: true, // 循环模式选项
            autoplay: {
              delay: 3000,
              disableOnInteraction: false
            },
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },

            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }
          })
        })
      },
      immediate: true
    }
  }
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
.swiper-button-prev,
.swiper-button-next {
  color: #ccc;
}
</style>
