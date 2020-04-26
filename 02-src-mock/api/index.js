// 用来写接口函数的
// 引入二次封装的axios文件
import ajax from './ajax'
// 引入二次封装的axios文件, mock的
import mockAjax from './mockAjax'
// 获取三级分类数据信息列表
export const reqBaseCategoryList = () => ajax('product/getBaseCategoryList')
// 登录接口
export const reqLogin = (mobile, password) => ajax.post('user/passport/login', {
  mobile,
  password
})
// mock的接口
export const reqBanners = () => mockAjax.get('/banners')
export const reqFloors = () => mockAjax.get('/floors')