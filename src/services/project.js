import { fetch } from '@/utils/request'
import {
  API_HOUSE_LIST,
  API_PRESELECTION_RECORD,
  API_SALESBATCH_LIST,
  API_RATSE_RECORD,
  API_HOUSE_DETAIL,
  API_ADD_PRESELECTION,
  API_CANCEL_PRESELECTION,
  API_APARTMENT_TYPE,
  API_NOTICE_INFO,
  API_SALES_BATCH,
  API_RATSE_DETAIL,
  API_RATSE_ORDER,
  API_CANCEL_ORDER,
  API_CONTRACT_USER,
  API_CONTRACT_GET,
  API_CONTRACT_AUTO,
  API_CONTRACT_MANUAL,
  API_CONTRACT_CHECK,
  API_INDEX_CUSTOMER

} from '@/constants/api'


/**
 * 首页绑定私客
 * @param {*} payload
 */
export const reportIndexCustomer = (payload, header) => fetch({ url: API_INDEX_CUSTOMER, payload, header, method: 'POST' })
/**
 * 获取房源列表
 * @param {*} payload
 */
export const queryHouseList = (payload, header) => fetch({ url: API_HOUSE_LIST, payload, header })

/**
 * 获取房源分享信息
 * @param {*} id
 */
export const querySalesInfo = id => fetch({ url: `${API_SALES_BATCH}/${id}` })
/**
 * 获取认筹单详情
 * @param {*} id
 */
export const queryRaiseDetail = id => fetch({ url: `${API_RATSE_DETAIL}/${id}` })
/**
 * 认筹单线下缴费
 * @param {*} id
 */
export const raiseOffline = id => fetch({ url: `${API_RATSE_DETAIL}/${id}`, method: 'PUT' })
/**
 * 获取房源列表滚动提示
 * @param {*} id
 */
export const queryNoticeInfo = id => fetch({ url: `${API_NOTICE_INFO}/${id}` })

/**
 * 预选房源
 * @param {*} payload
 */
export const addPreselection = payload => fetch({ url: API_ADD_PRESELECTION, payload, method: 'POST' })
/**
 * 取消预选房源
 * @param {*} payload
 */
export const cancelPreselection = payload => fetch({ url: `${API_CANCEL_PRESELECTION}?${'houseId=' + payload.houseId}&${'personId=' + payload.personId}`, method: 'DELETE' })
/**
 * 获取房源详情
 * @param {*} payload
 */
export const queryHouseDetail = payload => fetch({ url: API_HOUSE_DETAIL, payload })

/**
 * 获取选房记录
 * @param {*} payload
 */
export const queryPreselectionRecord = payload => fetch({ url: API_PRESELECTION_RECORD, payload })
/**
 * 获取认筹记录
 * @param {*} payload
 */
export const queryRaiseRecord = payload => fetch({ url: API_RATSE_RECORD, payload })
/**
 * 获取销售批次列表
 * @param {*} payload
 */
export const querySalesList = payload => fetch({ url: API_SALESBATCH_LIST, payload })
/**
 * 获取某销售批次下所有房源户型
 * @param {*} payload
 */
export const queryApartmentType = payload => fetch({ url: API_APARTMENT_TYPE, payload })
/**
 *认筹下单接口
 * @param {*} payload
 */
export const raiseOrder = payload => fetch({ url: API_RATSE_ORDER, payload, method: 'POST' })
/**
 *认筹单取消支付接口
 * @param {*} payload
 */
export const cancelOrder = payload => fetch({ url: API_CANCEL_ORDER, payload, method: 'POST' })
/**
 *获取签约信息
 * @param {*} payload
 */
export const contractUser = payload => fetch({ url: API_CONTRACT_USER, payload, method: 'POST' })
/**
 *获取签约信息
 * @param {*} payload
 */
export const contractGet = payload => fetch({ url: API_CONTRACT_GET, payload })
/**
 *自动签署
 * @param {*} payload
 */
export const contractAuto = payload => fetch({ url: API_CONTRACT_AUTO, payload, method: 'POST' })
/**
 *手动签署
 * @param {*} payload
 */
export const contractManual = payload => fetch({ url: API_CONTRACT_MANUAL, payload, method: 'POST' })
/**
 *手动签署结果
 * @param {*} payload
 */
export const contractCheck = payload => fetch({ url: API_CONTRACT_CHECK, payload, method: 'POST' })



