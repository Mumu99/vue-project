// 引入mock
import Mock from 'mockjs'
// 引入banners--> 大的轮播图
import banners from './banners.json'
// 引入floors--> 楼层
import floors from './floors.json'
// 使用mock的相关方法, 进行的接口的拦截和返回数据操作
Mock.mock('/mock/banners', {
  code: 200,
  message: '成功',
  data: banners
})
Mock.mock('/mock/floors', {
  code: 200,
  message: '成功',
  data: floors
})