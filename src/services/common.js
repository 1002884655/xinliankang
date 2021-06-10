import { fetch } from "@/utils/request";
import {
  API_PRELOAD,
  API_QRCODE,
  API_BANNER_LIST,
  API_QUERY_CODE_SCENE,
  API_BURIED_POINT,
  API_CITY_LIST,
  API_TEMPLATE_TYPE,
  API_INDEX_ICONS
} from "@/constants/api";

/**
 * 预加载数据
 *  @param {*} payload
 *
 */
export const getPreloadData = payload =>
  fetch({ url: API_PRELOAD, payload, method: "GET" });

/**
 * 获取二维码
 *  @param {*} payload
 *
 */
export const getMiniQrcode = payload =>
  fetch({ url: API_QRCODE, payload, method: "POST" });

/**
 * 获取二维码参数
 *  @param {*} scene
 *
 */
export const getCodeScene = scene =>
  fetch({ url: `${API_QUERY_CODE_SCENE}/${scene}` });

/**
 * 获取banner列表
 *  @param {*} type 打开方式, 这里值为 banner(轮播图) 或者 screen(首屏广告)
 *  @param {*} payload
 *
 *
 */
export const queryBanners = (type, payload) =>
  fetch({ url: `${API_BANNER_LIST}/${type}`, payload });

/**
 * 获取 banner , 首屏等一些信息
 * @param {*} payload
 */
export const queryExtContents = payload =>
  fetch({ url: API_BANNER_LIST, payload });

/**
 * 获取 首页图标
 * @param {*} payload
 */
export const queryIndexIcons = payload =>
  fetch({ url: API_INDEX_ICONS, payload });

/**
 * 新增埋点
 * @param {*} payload
 */
export const savePoint = payload =>
  fetch(
    { url: API_BURIED_POINT, payload, method: "POST", showToast: false },
    2
  );

/**
 * 更新埋点
 * @param {*} id
 * @param {*} payload
 */
export const updatePoint = (id, payload) =>
  fetch({ url: `${API_BURIED_POINT}/${id}`, payload, method: "PUT" }, 2);

/**
 * 获取城市列表
 * @param {*}
 */
export const queryCityList = () => fetch({ url: API_CITY_LIST });

/**
 * 获取消息模板
 * @param {*}
 */
export const queryMessageTPL = type =>
  fetch({ url: `${API_TEMPLATE_TYPE}/${type}` });
