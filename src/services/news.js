import { fetch } from '@/utils/request'
import {
  API_NEWS_LIST,
  API_NEWS_FAVOR,
  API_NEWS_UV,
  API_NEWS_SHARE,
  API_HOUSE_SHARE,
  API_HOUSE_POSTER,
  API_LIVE_SHARE,
  API_LIVE_POSTER,
  API_ACTIVITY_GROUP,
  API_INDEX_SHARE,
} from '@/constants/api'

/**
 * 首页分享埋点
 * @param {*} id  名片id
 */
export const addIndexShareNum = id => fetch({ url: `${API_INDEX_SHARE}/${id}`, method: 'POST' })


/**
 * 项目uv埋点
 * @param {*} id  项目id
 */
export const addNewsUv = id => fetch({ url: `${API_NEWS_UV}/${id}`, method: 'PUT' })

/**
 * 资讯分享埋点
 * @param {*} id  名片id
 */
export const addNewsShareNum = id => fetch({ url: `${API_NEWS_SHARE}/${id}`, method: 'POST' })

/**
 * 房源列表分享埋点（海报）
 * @param {*} id  id
 */
export const addHousePosterNum = id => fetch({ url: `${API_HOUSE_POSTER}/${id}`, method: 'POST' })
/**
 * 房源列表分享埋点（小程序）
 * @param {*} id  id
 */
export const addHouseShareNum = id => fetch({ url: `${API_HOUSE_SHARE}/${id}`, method: 'POST' })
/**
 * 直播详情分享埋点（海报）
 * @param {*} id  id
 */
export const addLivePosterNum = id => fetch({ url: `${API_LIVE_POSTER}/${id}`, method: 'POST' })
/**
 * 直播详情分享埋点（小程序）
 * @param {*} id  id
 */
export const addLiveShareNum = id => fetch({ url: `${API_LIVE_SHARE}/${id}`, method: 'POST' })

/**
 * 获取资讯列表
 * @param {*} payload
 */
export const queryNewsList = payload => fetch({ url: API_NEWS_LIST, payload })

/**
 * 获取资讯详情 
 * @param {*} id
 */
export const queryNewsDetail = (id, payload, header) => fetch({ url: `${API_NEWS_LIST}/${id}`, payload, header })

/**
 * 首页获取助力拼团 
 * @param {*} payload 
 */
export const queryHelpGroup = payload => fetch({ url: API_ACTIVITY_GROUP, payload })


/**
 *资讯收藏
 * @param {*} payload 
 */
export const favorNews = id => fetch({ url: `${API_NEWS_FAVOR}/${id}`, method: 'POST' })


/**
 * 取消资讯收藏
 * @param {*} payload 
 */
export const cancelFavorNews = id => fetch({ url: `${API_NEWS_FAVOR}/${id}`, method: 'DELETE' })