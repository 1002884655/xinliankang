import {
  USER_INFO,
  // USER_QUERY_INFO,
  USER_SIGNIN,
  USER_GOODS,
  UPDATE_USER_INFO
} from '@/constants/user'

import {
  API_USER_INFO,
  // API_QUERY_USER_INFO,
  API_USER_SIGNIN,
  API_QUERY_CUSTOMER_INFO,
  API_QUERY_MYREPORT,
  API_QUERY_USERINFO_BYID,
  API_QUERY_DOCUMENTVERIFY
} from '@/constants/api'

import { createAction,createActionNormal } from '@/utils/redux'

/**
 * 获取用户信息
 * @param {*} payload
 */
export const dispatchUpdateUserInfo = payload => createAction({
  url: API_USER_INFO,
  type: USER_INFO,
  payload,
  method: 'POST'
})

// export const dispatchQueryUserInfo = payload => createAction({
//   url: API_QUERY_USER_INFO,
//   type: USER_QUERY_INFO,
//   payload
// })

export const dispatchUpdateUserInfoNew = id => createAction({
  url: `${API_QUERY_USERINFO_BYID}/${id}`,
  type: UPDATE_USER_INFO
})



/**
 * 个人签到
 * @param {*} payload
 */
export const dispatchUserSignin = payload => createAction({
  url: API_USER_SIGNIN,
  type: USER_SIGNIN,
  payload,
  method: 'POST'
})


/**
 * 更新我的商品兑换记录
 * @param {*} payload
 */
export const dispatchUserGoods = payload => {
  return dispatch => dispatch({ type: USER_GOODS, payload })
}

/**
 * 我的客户列表
 * @param {*} payload
 */
export const dispatchCustomerInfo = payload => createAction({
  url: API_QUERY_CUSTOMER_INFO,
  type: '',
  payload,
  method: 'GET'
})

/**
 * 我报备的客户列表
 * @param {*} payload
 */
export const dispatchMyReport = payload =>createAction({
  url: API_QUERY_MYREPORT,
  type: '',
  payload,
  method: 'GET'
})

