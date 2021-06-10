
import { fetch } from '@/utils/request'
import {
  API_CLIENT_LIST,
  API_RECOMENT_CLIENT,
  API_CLIENT_PROGRESS,
  API_TYPE_DATA

} from '@/constants/api'


/**
 * 客户列表
 * @param {*} payload 
 */
export const getClientList = payload => fetch({ url: API_CLIENT_LIST, payload })


/**
 * 推荐客户
 * @param {*} payload 
 */
export const recommendClient = payload => fetch({ url: API_RECOMENT_CLIENT, method: 'POST',payload })

/**
 * 客户进度详情
 * @param {*} id 
 */
export const clientProgress = id => fetch({ url: `${API_CLIENT_PROGRESS}/${id}` })

/**
 * 选项数据查询
 * @param {*} payload 
 */
export const getTypeData = payload => fetch({ url: API_TYPE_DATA, payload })
