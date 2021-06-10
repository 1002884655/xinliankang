import {
  PROJECT_DETAIL,
  PROJECT_LIST,
  PROJECT_SCREEN
} from '@/constants/project'

import {
  API_ITEMS_DETAIL,
  API_ITEMS_LIST,
  API_BANNER_LIST,
  API_INDEX_PROJECTS,
} from '@/constants/api'

import { createAction } from '@/utils/redux'
import { toQueryString } from '@/utils/tools'

/**
 * 获取楼盘列表
 * @param {*} payload 
 */
export const dispatchProjectList = payload => createAction({
  url: `${API_ITEMS_LIST}`,
  type: PROJECT_LIST,
  payload
})

/**
 * 获取楼盘列表
 * @param {*} payload 
 */
export const dispatchIndexProjects = payload => createAction({
  url: `${API_INDEX_PROJECTS}`,
  type: PROJECT_LIST,
  payload
})


/**
 * 获取项目信息
 * @param {*} id 
 */
export const dispatchProjectDetail = (id, params, options) => createAction({
  url: `${API_ITEMS_DETAIL}/${id}?${toQueryString(params)}`,
  type: PROJECT_DETAIL,
  fetchOptions: options || {}
})

/**
 * 获取开屏广告
 *  @param {*} payload 
 * 
*/
export const dispatchProjectScreen = (payload) => createAction({ url: `${API_BANNER_LIST}/screen`, payload, type: PROJECT_SCREEN })
