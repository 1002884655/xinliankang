import { fetch } from '@/utils/request'
import {
  API_ACTIVITY_LIST,
  API_ACTIVITY_DETAIL,
  API_ACTIVITY_SIGNUP,
  API_ACTIVITY_FAVOR,
  API_ACTIVITY_SAVE,
  API_ACTIVITY_UV,
  API_ACTIVITY_SHARE,
  API_HELP_SHARE,
  API_GROUP_SHARE,
  API_HFIVE_SHARE,
  API_ACTNEW_LIST,
  API_HELP_DETAIL,
  API_HELP_CREATE,
  API_HELP_FRIEND,
  API_HELP_LIST,
  API_GROUP_LIST,
  API_GROUP_DETAIL,
  API_GROUP_JOIN,
  API_GROUP_CREATE,
} from '@/constants/api'

/**
 * 项目uv埋点
 * @param {*} id  项目id
 */
export const addActivityUv = id => fetch({ url: `${API_ACTIVITY_UV}/${id}`, method: 'POST' })


/**
 * 普通活动分享埋点
 * @param {*} id  名片id
 */
export const addActivityShareNum = id => fetch({ url: `${API_ACTIVITY_SHARE}/${id}`, method: 'POST' })
/**
 * 助力分享埋点
 * @param {*} id  名片id
 */
export const addHelpShareNum = id => fetch({ url: `${API_HELP_SHARE}/${id}`, method: 'POST' })
/**
 * 拼团分享埋点
 * @param {*} id  名片id
 */
export const addGroupShareNum = id => fetch({ url: `${API_GROUP_SHARE}/${id}`, method: 'POST' })
/**
 * h5分享埋点
 * @param {*} id  名片id
 */
export const addHFiveShareNum = id => fetch({ url: `${API_HFIVE_SHARE}/${id}`, method: 'POST' })

/**
 * 获取活动列表
 * @param {*} payload
 */
export const queryActivityList = payload => fetch({ url: API_ACTIVITY_LIST, payload })
/**
 * 获取拼团列表
 * @param {*} payload
 */
export const queryGroupList = payload => fetch({ url: API_GROUP_LIST, payload })
/**
 * 获取助力列表
 * @param {*} payload
 */
export const queryHelpList = payload => fetch({ url: API_HELP_LIST, payload })

/**
 * 已收藏活动列表
 * @param {*} payload
 */
export const buildingDynamiceList = payload => fetch({ url: API_ACTIVITY_SAVE, payload })

/**
 * 获取活动详情 
 * @param {*} id
 */
export const queryActivityDetail = (id, payload, header) => fetch({ url: `${API_ACTIVITY_DETAIL}/${id}`, payload, header })

/**
 * 活动报名
 * @param {*} payload 
 */
export const signupActivity = payload => fetch({ url: API_ACTIVITY_SIGNUP, payload, method: 'POST' })


/**
 * 活动收藏
 * @param {*} payload 
 */
export const favorActivity = id => fetch({ url: `${API_ACTIVITY_FAVOR}/${id}`, method: 'POST' })


/**
 * 取消活动收藏
 * @param {*} payload 
 */
export const cancelFavorActivity = id => fetch({ url: `${API_ACTIVITY_FAVOR}/${id}`, method: 'DELETE' })

/**
 * 获取活动列表
 * @param {*} payload 
 */
export const getActNewList = payload => fetch({ url: API_ACTNEW_LIST, payload })

export const getHelpDetail = (id, initiateId, payload, header) => fetch({ url: `${API_HELP_DETAIL}/${id}${initiateId ? '?initiateId=' + initiateId : ''}`, payload, method: 'GET', header })
export const createHelpActivity = payload => fetch({ url: API_HELP_CREATE, method: 'POST', payload })
export const giveFriendHelp = payload => fetch({ url: API_HELP_FRIEND, method: 'POST', payload })

export const getGroupDetail = (id, recordId, payload, header) => fetch({ url: `${API_GROUP_DETAIL}/${id}${recordId ? '?recordId=' + recordId : ''}`, payload, method: 'GET', header })
export const createGroupActivity = payload => fetch({ url: API_GROUP_CREATE, method: 'POST', payload })
export const joinGroupBuy = payload => fetch({ url: API_GROUP_JOIN, method: 'POST', payload })
