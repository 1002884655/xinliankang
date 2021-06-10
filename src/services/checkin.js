import { fetch } from '@/utils/request'
import {
  API_CHECKIN_DETAILS,
  API_CHECKIN_ACTIVE
} from '@/constants/api'



/**
 * 获取签到详情
 */
export const checkinDetails = (id, type) => fetch({ url: `${API_CHECKIN_DETAILS}/${id}?type=${type}`, method: 'GET' })



/**
 * 签到
 * @param {*} enlistId 
 */
export const checkinActive = enlistId => fetch({ url: `${API_CHECKIN_ACTIVE}/${enlistId}`, method: 'PUT' })

// /wx/buildingDynamicCheckin/{enlistId} 扫码活动签到 PUT