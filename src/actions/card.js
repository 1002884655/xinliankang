import {
  CARD_INFO,
  CARD_LIST,
  CARD_LIKE,
  CARD_UNLIKE
} from '@/constants/card'

import {
  API_CARDS_LIST,
  API_CARDS_LIKE
} from '@/constants/api'

import { createAction } from '@/utils/redux'
import { toQueryString } from '@/utils/tools'

/**
 * 获取卡片信息
 * @param {*} id
 */
export const dispatchCardInfo = (id, params, options) => createAction({
  url: `${API_CARDS_LIST}/${id}?${toQueryString(params)}`,
  type: CARD_INFO,
  fetchOptions: options || {}
})

/**
 * 获取置业顾问列表
 */
export const dispatchCardList = (payload) => createAction({
  url: `${API_CARDS_LIST}`,
  type: CARD_LIST,
  payload
})


/**
 * 卡片点赞
 * @param {*} id 
 */
export const dispatchCardLike = id => createAction({
  url: `${API_CARDS_LIKE}/${id}`,
  type: CARD_LIKE,
  method: 'POST'
})


/**
 * 卡片取消点赞
 * @param {*} id 
 */
export const dispatchCardUnlike = id => createAction({
  url: `${API_CARDS_LIKE}/${id}`,
  type: CARD_UNLIKE,
  method: 'DELETE'
})




