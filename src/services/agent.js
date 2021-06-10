
import { fetch } from '@/utils/request'
import {
  API_AGENT_LIST,
  API_REGISTER_AGENT,
  API_AGENT_CHANNEL,
  API_AGENT_CURRENT,
  API_EDIT_AGENT

} from '@/constants/api'


/**
 * 推荐经纪人列表
 * @param {*} payload
 */
export const getAgentList = payload => fetch({ url: API_AGENT_LIST, payload })

/**
 * 成为经纪人
 * @param {*} payload
 */
export const registerAgent = payload => fetch({ url: `${API_REGISTER_AGENT}?recommendAgentCode=${payload.recommendAgentCode}&&channelCode=${payload.channelCode}`,method: 'PUT' })

/**
 * 变更经纪人类型 
 * @param {*} payload
 */
export const becomeChannel = payload => fetch({ url: `${API_AGENT_CHANNEL}?channelCode=${payload.channelCode}&&personType=${payload.personType}`, method: 'PUT' })

/**
 * 我的主页
 * @param {*} payload
 */
export const agentCurrent = payload => fetch({ url: API_AGENT_CURRENT, payload })


/**
 * 修改经纪人
 * @param {*} payload
 */
export const editAgent = payload => fetch({ url: `${API_EDIT_AGENT}?name=${payload.name}&&avatar=${payload.avatar}&&phone=${payload.phone}`, method: 'PUT' })

