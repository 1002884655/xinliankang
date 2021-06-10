import { fetch } from '@/utils/request'
import {
  API_LOCATION_CITYP

} from '@/constants/api'


/**
 * 获取名片列表
 * @param {*} payload 
 */
export const getLocationCity = payload => fetch({ url: API_LOCATION_CITYP, payload })