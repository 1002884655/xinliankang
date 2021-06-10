import { createAction, createActionNormal } from '@/utils/redux'
import { API_CARDS_LIST, API_PRESELECTION_RECORD } from '@/constants/api'
import {
  ADD_CART,
  SUB_CART,
  FLUSH_TO_CART,
  ADD_CONSULTANT,
  CHOOSE_CONSULTANT,
  MY_PRESELECT_RECORD,
  SET_ONLINE_PROTOCOL,
} from '@/constants/house'

// 加入临时车
export const dispatchAddCart = payload => createActionNormal({ type: ADD_CART, payload })
// 删减临时车
export const dispatchSubCart = payload => createActionNormal({ type: SUB_CART, payload })
// 全部进入临时车
export const dispatchFlush2Cart = payload => createActionNormal({ type: FLUSH_TO_CART, payload })
// 获取置业顾问
export const dispatchGetConsultants = payload => createAction({
  type: ADD_CONSULTANT,
  url: API_CARDS_LIST,
  payload
})

// 临时选择置业
export const dispatchChooseConsultant = payload => createActionNormal({ type: CHOOSE_CONSULTANT, payload })

// 获取预选记录
export const dispatchGetMySelection = payload => createAction({
  type: MY_PRESELECT_RECORD,
  url: API_PRESELECTION_RECORD,
  payload,
})

export const dispatchSetOnlineProtocol = payload => createActionNormal({ type: SET_ONLINE_PROTOCOL, payload })
