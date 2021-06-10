import { fetch } from '@/utils/request'
import {
  API_REPORT_LIST,
  API_REPORT_CLIENT,
  API_RECOMMEND_GET,
  API_RECOMMEND_EDIT
} from '@/constants/api'


/**
 * 获取报备客户列表
 * @param {*} payload
 */
export const queryReportList = payload => fetch({ url: API_REPORT_LIST, payload })


/**
 * 报备客户
 * @param {*} payload
 */
export const reportClient = payload => fetch({ url: API_REPORT_CLIENT, payload, method: 'POST' })

/**
 * 获取客户详情
 * @param {*} payload
 */
export const customerGet = customerId => fetch({ url: `${API_RECOMMEND_GET}/${customerId}`, method: 'GET' })

/**
 * 修改客户信息
 * @param {*} payload
 */
export const customerEdit = (payload) => fetch({ url: `${API_RECOMMEND_EDIT}/${payload.customerId}`,payload, method: 'PUT' })
