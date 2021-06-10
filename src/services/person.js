import { fetch } from '@/utils/request'
import {
  API_MY_CUSTOMER,
  API_CUSTOMER_LIST,
  API_CUSTOMER_DETAIL,
  API_VISIT_RECORD,
  API_ACTIVITY_LIST_CUSTOMER,
  API_FOLLOW_LIST,
  API_SEX_INFO,
  API_ECHERTS_DAILY,
  API_ECHERTS_MONTH,
  API_BUILDING_TYPE,
  API_CONSULTANT_VISIT_RECORD,
  API_MORE_ACTIVITY,
  API_SHARE_LIST,
  API_SHARE_INFOLIST,
  API_BIND_CUSTOMER
} from '@/constants/api'


/**
 * 获取客户分析性别数据
 * @param {*} type
 */
export const querySexInfo = (type, payload) => fetch({ url: `${API_SEX_INFO}/${type}`, payload })
/**
 * 获取客户图表日数据
 * @param {*} type
 */
export const getEchartDailyInfo = (type, payload) => fetch({ url: `${API_ECHERTS_DAILY}/${type}`, payload })
/**
 * 获取客户图表月数据
 * @param {*} type
 */
export const getEchartMonthInfo = (type, payload) => fetch({ url: `${API_ECHERTS_MONTH}/${type}`, payload })

/**
 * 获取我的客户数据
 * @param {*} payload
 */
export const queryMyCustomer = payload => fetch({ url: API_MY_CUSTOMER, payload })

/**
 * 获取客户列表
 * @param {*} type  
 */
export const queryCustomerList = (type, payload) => fetch({ url: `${API_CUSTOMER_LIST}/${type}`, payload })
/**
 * 获取项目类型
 * @param {*} buildingId 
 */
export const getBuildingType = (buildingId, payload) => fetch({ url: `${API_BUILDING_TYPE}/${buildingId}`, payload })
/**
 * 获取客户详情
 * @param {*} customerId  
 */
export const getCustomerDetail = (customerId, payload) => fetch({ url: `${API_CUSTOMER_DETAIL}/${customerId}`, payload })
/**
 * 完善客户信息
 * @param {*} customerId  
 */
export const commitCustomerInfo = (customerId, payload) => fetch({ url: `${API_CUSTOMER_DETAIL}/${customerId}`, payload, method: 'PUT' })
/**
 * 获取访问记录
 * @param {*} payload  
 */
export const getVisitRecord = (payload) => fetch({ url: API_VISIT_RECORD, payload })
/**
 * 获取活动信息
 * @param {*} payload  
 */
export const getActivityList = (payload) => fetch({ url: API_ACTIVITY_LIST_CUSTOMER, payload })
/**
 * 获取跟进记录
 * @param {*} payload  
 */
export const getFollowRecord = (payload) => fetch({ url: API_FOLLOW_LIST, payload })

/**
 * 添加跟进记录
 * @param {*} payload  
 */
export const addFollowRecord = (payload) => fetch({ url: API_FOLLOW_LIST, payload, method: 'POST' })
/**
 * 获取访客信息
 * @param {*} payload  
 */
export const getConsulantVisitRecord = (payload) => fetch({ url: API_CONSULTANT_VISIT_RECORD, payload })
/**
 * 获取访问记录
 * @param {*} payload  
 */
export const getMoreVisitRecord = (payload) => fetch({ url: API_MORE_ACTIVITY, payload })
/**
 * 获取分享记录
 * @param {*} payload  
 */
export const getSharePersonList = (payload) => fetch({ url: API_SHARE_LIST, payload })
/**
 * 获取分享人的详细信息
 * @param {*} payload  
 */
export const judgeBindCustomer = (payload) => fetch({ url: API_BIND_CUSTOMER, payload })
/**
 * 获取访问人列表
 * @param {*} payload  
 */
export const getSharePersonInfoList = (payload) => fetch({ url: API_SHARE_INFOLIST, payload })



