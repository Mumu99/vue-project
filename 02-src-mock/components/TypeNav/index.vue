<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="isShowHomeCategoryListFirst=true" @mouseleave="firstShow">
        <h2 class="all">全部商品分类</h2>
        <div
          class="sort"
          @mouseleave="currentIndex=-2"
          @click="toSearch"
          v-show="isShowHomeCategoryListFirst"
        >
          <div class="all-sort-list2">
            <div
              class="item bo"
              v-for="(c1,index) in baseCategoryList"
              :key="c1.categoryId"
              :class="{item_on:currentIndex===index}"
              @mouseenter="mouseenterCategory(index)"
            >
              <h3>
                <a
                  href
                  @click.prevent
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                >{{c1.categoryName}}</a>
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                    <dt>
                      <a
                        href
                        @click.prevent
                        :data-categoryName="c2.categoryName"
                        :data-category2Id="c2.categoryId"
                      >{{c2.categoryName}}</a>
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a
                          href
                          @click.prevent
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                        >{{c3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>
<script>
// 辅助函数
import { mapState } from 'vuex'
// 按需引入lodash
import _ from 'lodash/throttle'
export default {
  name: 'TypeNav',
  data () {
    return {
      currentIndex: -2, // 默认存储的索引值, 用来存储鼠标进入菜单后的当前索引值
      isShowHomeCategoryListFirst: true // 通知一级分类列表是否显示
    }
  },
  methods: {
    mouseenterCategory: _(function (index) {
      this.currentIndex = index
    }, 300),
    toSearch (e) {
      console.log(e.target.dataset);
      const { categoryname, category1id, category2id, category3id } = e.target.dataset
      const query = {
        categoryName: categoryname
      }
      const id = category1id ? 1 : category2id ? 2 : category3id ? 3 : ''
      query[`category${id}Id`] = category1id || category2id || category3id
      this.$router.push({ path: 'search', query })
    },
    firstShow () {
      // 重新设置索引值 -2 
      // this.currentIndex = -2
      // 判断是不是 / 
      if (this.$route.path !== '/') this.isShowHomeCategoryListFirst = false
    }
  },
  computed: {
    ...mapState({
      baseCategoryList: state => state.home.baseCategoryList
    })
  },
  mounted () {
    this.$store.dispatch('getBaseCategoryList')
    // 判断当前是不是 / 
    if (this.$route.path !== '/') this.isShowHomeCategoryListFirst = false
  }
}
</script>

<style lang='less' rel='stylesheet/less' scoped>
.type-nav {
  border-bottom: 2px solid #ff9194;
  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;
    .all {
      width: 210px;
      height: 45px;
      background-color: #ff9194;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }
    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }
    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;
      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;
            a {
              color: #333;
            }
          }
          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;
            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;
              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;
                &.fore {
                  border-top: 0;
                }
                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }
                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;
                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }
          &.item_on {
            background-color: #ff9194;
            .item-list {
              display: block;
            }
          }
        }
      }
    }
  }
}
</style>
