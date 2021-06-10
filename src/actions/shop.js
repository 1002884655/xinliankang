import {
  GOODS_LIST,
  GOODS_DETAIL,
  GOODS_EXCHANGE,
  GOODS_EXCHANGE_RECORDS,
  POINTS_RECORDS,
  POINTS_RULE,
  POINTS_ADRESS
} from '@/constants/shop'

import {
  API_GOODS_LIST,
  API_GOODS_EXCHANGE,
  API_GOODS_EXCHANGE_RECORDS,
  API_POINTS_RECORDS,
  API_POINTS_RULE,
  API_POINTS_ADRESS
} from '@/constants/api'

import { createAction } from '@/utils/redux'






/**
 * 商品详情
 * @param {*} id
 */
export const dispatchGoodsDetail = id => createAction({
  url: `${API_GOODS_LIST}/${id}`,
  type: GOODS_DETAIL
})



/**
 * 商品兑换
 * @param {*} id
 */
export const dispatchGoodsExchange = id => createAction({
  url: `${API_GOODS_EXCHANGE}/${id}`,
  type: GOODS_EXCHANGE,
  method: 'POST'
})


/**
 * 商品兑换记录
 * @param {*} payload
 */
export const dispatchGoodsExchangeRecords = payload => createAction({
  url: `${API_GOODS_EXCHANGE_RECORDS}`,
  type: GOODS_EXCHANGE_RECORDS,
  payload
})


/**
 * 积分记录
 * @param {*} payload
 */
export const dispatchPointsRecords = payload => createAction({
  url: API_POINTS_RECORDS,
  type: POINTS_RECORDS,
  payload
})

/**
 * 积分规则
 * @param {*} payload
 */
export const dispatchPointsRule = payload => createAction({
  url: API_POINTS_RULE,
  type: POINTS_RULE,
  payload
})

/**
 * 请求地址
 * @param {*} payload
 */
export const dispatchPointsAddress = payload => createAction({
  url: `${API_POINTS_ADRESS}`,
  type: POINTS_ADRESS,
  payload,
  method: 'PUT'
})