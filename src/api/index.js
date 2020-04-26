// 用来写接口函数的
// 引入二次封装的axios文件
import ajax from './ajax'
// 引入二次封装的axios文件mock版
import mockAjax from './mockAjax'
// 获取三级分类数据信息列表
export const reqBaseCategoryList = () => ajax('product/getBaseCategoryList')
export const reqLogin = (mobile, password) => ajax.post('user/passport/login', {
  mobile,
  password
})
// mockAjax相关的操作
export const reqBanners = () => mockAjax.get('/banners')
export const reqFloors = () => mockAjax.get('/floors')
// 获取商品的接口
export const reqProductList = (params) => ajax.post('/list', params)