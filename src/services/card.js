
import { fetch } from '@/utils/request'
import {
  API_CARDS_LIST,
  API_CARDS_APPLY,
  API_CARDS_UV,
  API_CARDS_LIKE,
  API_FORM_ID,
  API_CARDS_SHARE,
  API_CARD_FAVOR,
  API_UPDATE_PHOTO
} from '@/constants/api'


/**
 * 获取名片列表
 * @param {*} payload 
 */
export const getCardList = payload => fetch({ url: API_CARDS_LIST, payload })


/**
 * 获取名片详情
 * @param {*} id
 */
export const getCardDetail = id => fetch({ url: `${API_CARDS_LIST}/${id}` })

/**
 * 置业顾问名片绑定
 * @param {*} payload
 */
export const applyCard = payload => fetch({ url: API_CARDS_APPLY, payload, method: 'POST' })

/**
 * 名片uv埋点
 * @param {*} id  名片id
 */
export const addCardUv = id => fetch({ url: `${API_CARDS_UV}/${id}`, method: 'POST' })

/**
 * 名片点赞
 * @param {*} id  名片id
 */
export const addLike = id => fetch({ url: `${API_CARDS_LIKE}/${id}`, method: 'POST' })

/**
 * 置业顾问换头像
 * @param {*} payload
 */
export const updatePhoto = payload => fetch({ url: API_UPDATE_PHOTO, payload, method: 'PUT' })

/**
 * 名片取消点赞
 * @param {*} id  名片id
 */
export const cancelLike = id => fetch({ url: `${API_CARDS_LIKE}/${id}`, method: 'DELETE' })

/**
 * 获取formid
 * @param {*} payload
 */
export const postFormId = payload => fetch({ url: API_FORM_ID, payload, method: 'POST' })

/**
 * 名片粉丝列表
 * @param {*} id  名片id
 */
export const queryCardFansList = (id, payload) => fetch({ url: `${API_CARDS_UV}/${id}`, payload })



/**
 * 名片分享埋点
 * @param {*} id  名片id
 */
export const addCardShareNum = id => fetch({ url: `${API_CARDS_SHARE}/${id}`, method: 'POST' })



/**
 * 名片收藏
 * @param {*} payload 
 */
export const favorCard = id => fetch({ url: `${API_CARD_FAVOR}/${id}`, method: 'POST' })


/**
 * 取消名片收藏
 * @param {*} payload 
 */
export const cancelFavorCard = id => fetch({ url: `${API_CARD_FAVOR}/${id}`, method: 'DELETE' })