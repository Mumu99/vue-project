<template>
  <!-- 商品分类导航 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseenter="isShowHomeFirst=true" @mouseleave="firstHide">
        <h2 class="all">全部商品分类</h2>
        <div class="sort" @mouseleave="currentIndex=-2" @click="toSearch" v-show="isShowHomeFirst">
          <div class="all-sort-list2">
            <div
              class="item"
              v-for="(c1,index) in baseCategoryList"
              :key="c1.categoryId"
              :class="{item_on:currentIndex===index}"
              @mouseenter="showCategoryList(index)"
            >
              <h3>
                <a
                  href
                  @click.prevent
                  :data-categoryName="c1.categoryName"
                  :data-category1Id="c1.categoryId"
                >{{c1.categoryName}}</a>
                <!-- <router-link
                :to="{path:'search',query:{categoryName:c1.categoryName, category1Id:c1.categoryId}}"
                >{{c1.categoryName}}</router-link>-->
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
                      <!-- <router-link
                      :to="{path:'search',query:{categoryName:c2.categoryName, category2Id:c2.categoryId}}"
                      >{{c2.categoryName}}</router-link>-->
                    </dt>
                    <dd>
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a
                          href
                          @click.prevent
                          :data-categoryName="c3.categoryName"
                          :data-category3Id="c3.categoryId"
                        >{{c3.categoryName}}</a>
                        <!-- <router-link
                        :to="{path:'search',query:{categoryName:c3.categoryName, category3Id:c3.categoryId}}"
                        >{{c3.categoryName}}</router-link>-->
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
// lodash工具对象
import throttle from 'lodash/throttle'
export default {
  name: 'TypeNav',
  data () {
    return {
      currentIndex: -2, // 默认存储的索引值, 用来存储鼠标进入菜单后的当前索引值
      isShowHomeFirst: true
    }
  },
  methods: {
    // 所有的一级分类菜单, 鼠标进入事件的节流操作
    showCategoryList: throttle(function (index) {
      this.currentIndex = index
    }, 50),
    // 通过事件委托的方式, 实现编程式路由跳转, 同时携带对应的参数数据
    toSearch (e) {
      // 可以得到触发改事件的事件源对象的标签名
      // console.log(e.target.tagName);
      if (e.target.tagName === 'A') {
        const { categoryname, category1id, category2id, category3id } = e.target.dataset
        /**
         * 获取当前点击a标签的自定义属性中的数据值
         */
        const query = {
          categoryName: categoryname
        }
        // 判断对应的参数中是否有数据(第一种写法)
        // if (category1id) {
        //   query.category1Id = category1id
        // } else if (category2id) {
        //   query.category2Id = category2id
        // } else if (category3id) {
        //   query.category3Id = category3id
        // }
        // 判断对应的参数中是否有数据(第二种写法)
        const id = category1id ? 1 : category2id ? 2 : category3id ? 3 : ''
        query[`category${id}Id`] = category1id || category2id || category3id

        // 标签上是有一个属性 data-
        this.$router.push({
          path: 'search',
          query
        })
      }
    },
    // 鼠标离开分类列表, 就隐藏
    firstHide () {
      // 重新设置索引值为-2
      // this.currentIndex = -2
      if (this.$route.path !== '/') this.isShowHomeFirst = false

    }
    // 控制一级分类列表只在首页显示(/ --> home), 其他页面隐藏
    // 在search内部引入当前组件
    // 必须要判断当前的路由地址(地址栏上的地址是不是 / )再决定是否显示
    // 在mounted中判断路径是否是 / 
    // 如何控制一级列表显示/隐藏, 通过v-if / v-show 显示

    // 当鼠标进入到分类列表之后, 展示一级分类列表, 离开就隐藏
    // 鼠标进入和离开事件
  },
  computed: {
    ...mapState({
      baseCategoryList: state => state.home.baseCategoryList
    })
  },
  mounted () {
    this.$store.dispatch('getBaseCategoryList')
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
