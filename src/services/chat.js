import { fetch } from '@/utils/request'
import {
  API_CHAT_SEND,
  API_CHAT_HISTORY,
  API_CHAT_FRIENDS,
  API_UPLOAD_IMAGE,
  API_CHAT_READED,
} from '@/constants/api'


/**
 * 聊天发送消息
 * @param {*} payload 
 */

export const sendMsg = payload => fetch({ url: API_CHAT_SEND, method: 'POST', payload })

/**
 * 获取聊天记录
 * @param {*} payload
 */
export const queryChatHistory = payload => fetch({ url: API_CHAT_HISTORY, payload })

/**
 * 获取好友列表 
 * @param {*} payload
 */
export const queryChatFriends = payload => fetch({ url: API_CHAT_FRIENDS, payload })

/**
 * 上传图片 
 * @param {*} payload
 */
export const uploadImage = payload => fetch({ url: API_UPLOAD_IMAGE, payload })

/**
 * 更新消息为已读
 * @param {*} payload 
 */
export const setMessageReaded = chatID => fetch({ url: `${API_CHAT_READED}/${chatID}`, method: 'PUT' })
