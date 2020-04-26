// 引入mock
import Mock from 'mockjs'
// 引入banners--> 大轮播图
import banners from './banners.json'
// 引入floors--> 楼层数据
import floors from './floors.json'
// 使用mock的相关方法, 进行接口的拦截和返回数据操作, 自动设定banners数据的接口地址--> /mock/banners 和floors数据的接口地址--> /mock/floors, 
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
// 不需要声明使用和暴露, 必须执行一次上述代码