import { fetch } from '@/utils/request'
import Qs from 'qs'
import {
  API_USER_LOGIN
} from '@/constants/api'


/**
 * 获取用户openid等信息
 * @param {*} payload 
 */
export const wxLogin = (payload, showToast) => {
  return fetch({ url: `${API_USER_LOGIN}?${Qs.stringify(payload)}`, method: 'POST', showToast })
}
