import {
  ACTIVITY_SIGNIN
} from '@/constants/activity'

import {
  API_ACTIVITY_SIGNIN
} from '@/constants/api'

import { createAction } from '@/utils/redux'

/**
 * 个人签到
 * @param {*} id 
 */
export const dispatchSignin = id => createAction({
  url: `${API_ACTIVITY_SIGNIN}/${id}`,
  type: ACTIVITY_SIGNIN,
  method: 'POST'
})

/**
 * 判断是否签到
 * @param {*} id 
 */
export const dispatchSigninCheck = id => createAction({
  url: `${API_ACTIVITY_SIGNIN}/${id}/isChecked`,
  type: ACTIVITY_SIGNIN
})


