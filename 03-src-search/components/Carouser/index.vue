<template>
  <div class="swiper-container" ref="listSwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="item in listBanner" :key="item.id">
        <img :src="item.imgUrl" alt />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
// 引入swiper
import Swiper from 'swiper'
export default {
  name: 'Carouser',
  props: {
    listBanner: Array
  },
  watch: {
    // 回调函数会将在观察(data observer)开始后立即被调用
    listBanner: {
      handler () {
        if (this.listBanner.length === 0) return
        console.log('watch')
        this.$nextTick(() => {
          // 创建实例对象
          // 参数1: 选择器, 参数2: 配置对象
          new Swiper(this.$refs.listSwiper, {
            loop: true, // 循环模式选项
            autoplay: {
              delay: 2000, // 时间
              disableOnInteraction: false // 控制点击后继续播放
            },

            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              clickable: true,
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
  width: 50px;
  height: 75px;
  color: #ccc;
}
.swiper-button-prev {
  left: 0;
}
.swiper-button-next {
  right: 0;
}
.swiper-button-prev:hover,
.swiper-button-next:hover {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
