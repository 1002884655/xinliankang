import { fetch } from '@/utils/request'
import {
  API_GET_CODE,
  API_PUT_REGISTER,
  API_PUT_REGISTERCONSULTANT,
  API_CHECK_CODE
} from '@/constants/api'

/**
 * 提交用户反馈
 * @param {*} payload
 */
export const getCodeMessage = tel => fetch({ url: `${API_GET_CODE}?tel=${tel}`, method: 'POST' })

export const checkCaptcha = (tel, captcha) => fetch({ url: `${API_CHECK_CODE}?tel=${tel}&captcha=${captcha}`, method: 'POST' })

export const putRegister = payload => fetch({ url: `${API_PUT_REGISTER}?phone=${payload.tel}&&code=${payload.code}`, payload, method: 'PUT' })

export const putRegisterConsultant = payload => fetch({ url: `${API_PUT_REGISTERCONSULTANT}`, method: 'PUT' })
// /wx/registerConsultantOneClick
