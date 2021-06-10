import { fetch } from '@/utils/request'
import {
  API_FEEDBACK_SUBMIT
} from '@/constants/api'

/**
 * 提交用户反馈
 * @param {*} payload 
 */
export const submitFeedBack = payload => fetch({ url: API_FEEDBACK_SUBMIT, payload, method: 'POST' })
