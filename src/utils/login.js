import Taro from '@tarojs/taro';
import store from "@/store";
import { dispatchCitySelected } from '@/actions/city'
import { USER_INFO, ASSIGN_UNREADNUM } from '@/constants/user'
import { ifNull } from '@/utils/tools'
import { wxLogin } from '@/services/login'
import { queryUserInfo } from '@/services/user'

export default (payload) => {
  return new Promise((resolve, reject) => {
    const { path, scene, ...params } = payload
  
    // 获取 code
    Taro.login({
      success: ({ code }) => {
        params.code = code
  
        // 转换 undefined 为 ''
        const loginParams = Object.keys(params).reduce((acc, k) => ({ ...acc, [`${k}`]: ifNull(params[k], '') }), {})
  
        // 远程登录获取人员
        wxLogin(loginParams, false).then(data => {
  
          const { extraInfo, miniApp, person, city } = data
          const { token, sessionKey } = miniApp
          const { dispatch, getState } = store
  
          Taro.setStorageSync('token', token)
          Taro.setStorageSync('sessionKey', sessionKey)
  
          dispatch({ type: USER_INFO, payload: { extraInfo, person, miniApp } })
          const { city: { curCity } } = getState()
  
          if (!curCity || Object.keys(curCity).length == 0) {
            if (city) {
              dispatchCitySelected(city)(dispatch)
            }
          }

          // 获取人员详细信息
          queryUserInfo(person.personId).then(info => {
            const { unReadNum } = info
            dispatch({ type: ASSIGN_UNREADNUM, payload: { unReadNum } });
            resolve(data)
          }).catch(reject)
        }).catch(reject)
      }
    })
  })
}
