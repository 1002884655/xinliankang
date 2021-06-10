import Taro from '@tarojs/taro'
import * as apis from '@/constants/api'
// import login from '@/utils/login'
import rtLog from './rtLog'

const CODE_SUCCESS = 1000
const CODE_UNLOGIN = 1001
const CODE_AUTH_EXPIRED = 1002
const accountInfo = wx.getAccountInfoSync();
const appId = accountInfo.miniProgram.appId

export { apis };

export const getStorage = function (key) {
  return Taro.getStorage({ key }).then(res => res.data).catch(() => '')
}

export const setStorage = function (key, data) {
  return Taro.setStorage({ key, data })
}

/**
 * 简易封装网络请求
 * // NOTE 需要注意 RN 不支持 *StorageSync，此处用 async/await 解决
 * @param {*} options
 */
export const fetch = async (options) => {
  const opts = optionBuilder(options)

  return Taro.request(opts[0])
    .then((res) => reqSuccess(res, opts))
    .catch((err) => reqFail(err, opts))
}

export const uploadFiles = async (files) => {
  const uploads = []
  const token = await getStorage('token')
  const authHeader = token ? { 'authorization': `Bearer ${token}` } : {}
  for (var i = 0; i < files.length; i++) {
    uploads[i] = new Promise((resolve, reject) => {
      wx.uploadFile({
        url: apis.API_UPLOAD_IMAGE,
        filePath: files[i],
        header: {
          ...authHeader,
          'appId': appId,
          'x-action': 'miniapp'
        },
        name: 'file',
        success: function (res) {
          // debugger
          const _data = JSON.parse(res.data)
          if (_data.code !== CODE_SUCCESS) {
            reject(new Error(_data.message))
          }

          resolve(_data.data)
        },
        fail(err) {
          reject(err)
        }
      })
    })
  }

  return Promise.all(uploads)
}

export function optionBuilder(options) {
  const { url, payload = {}, method = 'GET', showToast = true, autoLogin = true, header } = options
  const showMessage = Object.prototype.hasOwnProperty.call(payload, 'showToast') ? payload.showToast : showToast
  const consultant = Taro.getStorageSync('consultantId') || ''
  const recommender = Taro.getStorageSync('recommender') || ''

  return [
    {
      url,
      method,
      data: payload,
      header: {
        'content-type': 'application/json',
        'authorization': `Bearer ${Taro.getStorageSync('token')}`,
        'appId': appId,
        'x-action': 'miniapp',
        'x-version': Version,
        'x-consultant': consultant,
        'x-recommender': recommender,
        ...header || {},
      }
    },
    {
      showMessage,
      autoLogin
    }
  ]
}

export function reqSuccess(res, opts) {
  const [, settings] = opts || []
  const { showMessage, autoLogin = true } = settings || {}

  if (res.statusCode === 500) {
    Taro.showToast({
      title: "请检查网络",
      icon: 'none'
    })
    console.error(res)
    throw new Error('请检查网络')
  }

  const { data, code, message } = typeof res.data === 'string' ? JSON.parse(res.data) : res.data
  if (code === CODE_SUCCESS) {
    return data
  } else {
    const isExpired = (code === CODE_AUTH_EXPIRED || code === CODE_UNLOGIN)
    const defaultMsg = isExpired ? '登录失效' : message
    if (isExpired && autoLogin) {
      // token失效，重新登录后，跳转到首页
      login({}, () => {
        Taro.switchTab({
          url: '/pages/project/index'
        })
      })
    } else {
      if (showMessage) {
        Taro.showToast({
          title: defaultMsg,
          icon: 'none'
        })
      }
    }
    if (showMessage) {

      Taro.showToast({
        title: message,
        icon: 'none'
      })
    }

    throw res.data
  }
}

export function reqFail(err, opts) {
  const [reqParams, settings] = opts || []
  const { showMessage } = settings || {}

  rtLog.error('[request]', "==================================")
  rtLog.error('[request]', err)
  rtLog.error('[request]', reqParams.url)
  rtLog.error('[request]', wx.getLaunchOptionsSync())
  rtLog.error('[request]', "==================================")

  let errMessage = `请求失败: ${err.errMsg}`
  if (err.errMsg) {
    errMessage = '请检查网络'
  }

  if (err.message) {
    console.error('请求失败', err.message)
    errMessage = err.message.indexOf('java') > -1 ? '服务内部错误' : err.message
  }

  if (showMessage) {
    Taro.showToast({
      title: errMessage,
      icon: 'none',
      duration: 3000
    })
  }

  throw new Error(errMessage)
}
