// 用来写接口函数的
// 引入二次封装的axios文件
import ajax from './ajax'
// 引入二次封装的axios文件(mock)
import mockAjax from './mockAjax'
// 获取三级分类数据信息列表
export const reqBaseCategoryList = () => ajax('product/getBaseCategoryList')
export const reqLogin = (mobile, password) => ajax.post('user/passport/login', {
  mobile,
  password
})
// mockAjax的操作
export const reqBanners = () => mockAjax.get('/banners')
export const reqFloors = () => mockAjax.get('/floors')
// search接口
export const reqProductList = (productParams) => ajax.post('/list', productParams)