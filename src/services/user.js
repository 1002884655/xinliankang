import { fetch } from '@/utils/request'
import {
  API_USER_INFO,
  API_USER_PHONE,
  API_USER_SIGNIN,
  API_QUERY_USER_INFO,
  API_QUERY_DOCUMENTVERIFY,
  API_QUERY_DOCUMENTVERIFY_list,
  API_QUERY_TADRAINGE,
  API_TACUSTOMIMG,
  API_POINTS_RULE
} from '@/constants/api'

/**
 * 更新用户信息
 * @param {*} payload 
 */
export const updateUserInfo = payload => fetch({ url: API_USER_INFO, payload, method: 'POST' })

/**
 * 获取用户手机号
 * @param {*} payload 
 */
export const queryUserPhone = payload => fetch({ url: API_USER_PHONE, payload, method: 'POST' })

/**
 * 获取用户积分 推荐客户 收藏数等
 * @param {*} payload 
 */
export const queryUserInfo = payload => fetch({ url: API_QUERY_USER_INFO, payload })

/**
 * 获取我的资料
 * @param {*} payload
 */
export const getDocumentVerify = payload => fetch({ url: API_QUERY_DOCUMENTVERIFY, payload })

/**
 * 获取我的资料审核列表
 * @param {*} payload
 */
export const getVerifyList = payload => fetch({ url: API_QUERY_DOCUMENTVERIFY_list, payload })
/**
 * 提交我的资料 (首次)
 * @param {*} payload
 */
export const commitDocumentVerify = payload => fetch({ url: API_QUERY_DOCUMENTVERIFY, payload, method: 'POST' })
/**
 * 提交我的资料 (非首次)
 * @param {*} payload
 */
export const editDocumentVerify = payload => fetch({ url: `${API_QUERY_DOCUMENTVERIFY}/${payload.id}`, payload, method: 'PUT' })

/**
 * 获取审核资料详情
 *  * @param {*} payload
 */
export const getProfileDetail = payload => fetch({ url: `${API_QUERY_DOCUMENTVERIFY}/${payload}`, payload })

/**
 * 用户签到
 * @param {*} payload 
 */
export const doUserSignin = payload => fetch({ url: API_USER_SIGNIN, payload, method: 'POST' })

/**
 * 获取h5中间页信息
 * @param {*} id 
 */
export const getHFiveDetail = (id, payload, header) => fetch({ url: `${API_QUERY_TADRAINGE}/${id}`, payload, header })
/**
 * 获取首页分享信息
 * @param {*} payload
 */
export const getIndexShare = payload => fetch({ url: API_TACUSTOMIMG, payload })
/**
 * 获取积分规则
 * @param {*} payload
 */
export const getPointsRule = payload => fetch({ url: API_POINTS_RULE, payload })

