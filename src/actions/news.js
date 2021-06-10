import {
  NEWS_LIST
} from '@/constants/news'

import {
  API_NEWS_LIST,

} from '@/constants/api'

import { createAction } from '@/utils/redux'


/**
 * 资讯列表
 * @param {*} payload 
 */
export const dispatchNewsList = payload => createAction({
  url: API_NEWS_LIST,
  type: NEWS_LIST,
  payload
})


/**
 * 资讯详情
 * @param {*} id 
 */
export const dispatchNewsDetail = id => createAction({
  url: `${API_NEWS_LIST}/${id}`,
  type: NEWS_DETAIL,
  payload
})
