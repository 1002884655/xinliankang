import { fetch } from '@/utils/request'
import {
  API_POLICY_LIST,
} from '@/constants/api'


/**
 * 获取列表
 * @param {*} payload
 */
export const queryPolicyList = payload => fetch({ url: API_POLICY_LIST, payload })


/**
 * 获取详情 
 * @param {*} id
 */
export const queryPolicyDetail = id => fetch({ url: `${API_POLICY_LIST}/${id}` })
