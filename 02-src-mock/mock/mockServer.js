// 引入mock
import Mock from '02-src-mock/mock/mockjs'
// 引入banners --> bigBanner
import banners from './banners.json'
// 引入floors--> 楼层数据
import floors from './floors.json'
// 使用mock的相关方法, 进行接口的拦截和返回数据操作
// 自己设定banners数据的接口地址--> /mock/banners 和fllors数据的接口地址--> /mock/floors
// 参数1: 要让拦截的接口地址, 参数2: 返回的数据
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