import {
  CITY_LIST,
  CITY_SELECTED
} from '@/constants/city'

import {
  API_CITY_LIST
} from '@/constants/api'

import { createAction, createActionNormal } from '@/utils/redux'

/**
 * 获取城市列表
 * @param {*} payload 
 */
export const dispatchCityList = payload => createAction({
  url: API_CITY_LIST,
  type: CITY_LIST,
  payload
})

/**
 * 获取城市列表
 * @param {*} payload 
 */
export const dispatchCitySelected = payload => createActionNormal({
  type: CITY_SELECTED,
  payload
})

