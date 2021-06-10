/**
 * 适当封装 Redux，简化调用
 */
/* eslint-disable import/prefer-default-export */
import { fetch } from './request'

export function createAction(options) {
  const { url, payload, method, fetchOptions, cb, type } = options
  return (dispatch) => {
    try {
      return fetch({ url, payload, method, ...fetchOptions }).then((res) => {
        dispatch({ type, payload: cb ? cb(res) : res })
        return res
      })
    } catch (e) {
      throw e
    }
  }
}

// 跟后端不交互
export function createActionNormal(options) {
  const { payload, type } = options
  return (dispatch) => {
    return new Promise(resolve => {
      dispatch({ type, payload })
      resolve(payload)
    })
  }
}
