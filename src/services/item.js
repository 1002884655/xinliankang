import { fetch } from '@/utils/request'
import {
  API_ITEMS_LIST,
  API_ITEMS_DETAIL,
  API_ITEMS_UV,
  API_ITEMS_LIKE,
  API_ITEMS_SHARE,
  API_ITEMS_TYPE,
  API_PROJECT_FAVOR,
  API_GOODS_BUILDING,
  API_GOODS_LIST,
  API_LIVE_DEATIL,
  API_ADDLIVE_NUM
} from '@/constants/api'

/**
 * 获取项目列表
 * @param {*} payload 
 */
export const getItemList = payload => fetch({ url: API_ITEMS_LIST, payload })
/**
 * 获取楼盘商品列表
 * @param {*} payload 
 */
export const getGoodsBuilding = payload => fetch({ url: API_GOODS_BUILDING, payload })
/**
 * 获取楼盘商品列表
 * @param {*} payload 
 */
export const getGoodsList = payload => fetch({ url: API_GOODS_LIST, payload })
/**
 * 商品列表
 * @param {*} payload
 */


/**
 * 获取项目详情
 * @param {*} id 
 */
export const getItemDetail = id => fetch({ url: `${API_ITEMS_DETAIL}/${id}` })

/**
 * 项目uv埋点
 * @param {*} id  项目id
 */
export const addItemUv = id => fetch({ url: `${API_ITEMS_UV}/${id}`, method: 'POST' })

/**
 * 项目点赞
 * @param {*} id  名片id
 */
export const addLike = id => fetch({ url: `${API_ITEMS_LIKE}/${id}`, method: 'POST' })

/**
 * 项目取消点赞
 * @param {*} id  名片id
 */
export const cancelLike = id => fetch({ url: `${API_ITEMS_LIKE}/${id}`, method: 'DELETE' })

/**
 *项目收藏
 * @param {*} payload 
 */
export const favorProject = id => fetch({ url: `${API_PROJECT_FAVOR}/${id}`, method: 'POST' })


/**
 * 取消项目收藏
 * @param {*} payload 
 */
export const cancelFavorProject = id => fetch({ url: `${API_PROJECT_FAVOR}/${id}`, method: 'DELETE' })

/**
 * 项目粉丝列表
 * @param {*} id  名片id
 */
export const queryItemFansList = (id, payload) => fetch({ url: `${API_ITEMS_UV}/${id}`, payload })


/**
 * 项目分享埋点
 * @param {*} id  名片id
 */
export const addItemShareNum = id => fetch({ url: `${API_ITEMS_SHARE}/${id}`, method: 'POST' })

/**
 * 直播页详情
 * @param {*} id 
 */
export const queryLiveDetail = (id, payload, header) => fetch({ url: `${API_LIVE_DEATIL}/${id}`, payload, header })

/**
 * 项目详情直播列表
 * @param {*} payload 
 */
export const queryLiveList = payload => fetch({ url: API_LIVE_DEATIL, payload })
/**
 * 增加直播点击量
 * @param {*} id
 */
// export const addLiveNum = payload => fetch({ url: API_ADDLIVE_NUM, payload, method: 'PUT' })
export const addLiveNum = id => fetch({ url: `${API_ADDLIVE_NUM}?id=${id}`, method: 'PUT' })


/**
 * 项目类型列表
 */
export const queryItemTypeList = () => fetch({ url: API_ITEMS_TYPE })

