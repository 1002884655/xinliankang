import Taro, { getCurrentInstance } from "@tarojs/taro";
import { getCodeScene } from '@/services/common';
import store from "@/store";

/**
 * 是否为空
 * @param {*} o
 */
export function isEmpty(o) {
  if (typeof o === "string") {
    if (!o || o === "null" || o === "undefined") {
      return true;
    }
  }

  if (typeof o === "object") {
    return !Object.keys(o).length;
  }

  if (Array.isArray(o)) {
    return !o.length;
  }

  if (o === null || o === undefined) {
    return true;
  }

  return false;
}

export function ifNull(o, def) {
  return isEmpty(o) ? def : o;
}

/**
 * 是否函数
 * @param {*} f
 */
export function isFunction(f) {
  return typeof f === "function";
}

/**
 * 是否分享场景(含扫码)
 * @param {*} scene
 */
export function sceneInShare(scene) {
  return (
    [1007, 1008, 1011, 1012, 1013, 1031, 1032, 1036, 1047, 1048, 1049].indexOf(
      scene
    ) > -1
  );
}

/**
 * 造空数组
 * @param {int}} n
 */
export function times(n) {
  return n > 0 ? "*".repeat(n - 1).split("*") : [];
}

/**
 * 屏蔽手机中间 4 位
 * @param {*} phone
 */
export function maskPhone(phone) {
  return phone.replace(/^(\d{3})(\d{4})/, "$1****");
}

/**
 * 将 b 中不为 null 或者 undefined 的值合并到 a 中
 * @param {*} a
 * @param {*} b
 */
export function mergeNotNull(a, b) {
  const bKeys = Object.keys(b || {});
  if (!bKeys.length) {
    return a;
  }

  let res = { ...(a || {}) };

  bKeys.forEach(k => {
    const v = b[k];
    if (v === null || v === undefined) {
      return;
    }

    res[k] = v;
  });

  return res;
}

// eslint-disable-next-line no-undef
const ossPath = OSS_PATH;
// eslint-disable-next-line no-undef
const ossFastPath = OSS_FAST_PATH;

/**
 *
 * @param {*} img
 * @param {*} quality  仅支持 70,50,30,5
 */
export function getThumbnail(img, quality) {
  if (!img) return img;

  if (img.indexOf(ossPath) === 0 || img.indexOf(ossFastPath) === 0) {
    return `${img.replace(
      ossPath,
      ossFastPath
    )}?x-oss-process=style/compress${quality || 30}`;
  }

  return img;
}

export function resizeImage(img, size) {
  if (!img) return img;

  if (img.indexOf(ossPath) === 0 || img.indexOf(ossFastPath) === 0) {
    return `${img.replace(
      ossPath,
      ossFastPath
    )}?x-oss-process=style/resize${size || 750}`;
  }

  return img;
}

/**
 * 压缩图片 80%, 最大宽度 750
 * @param {*} img
 */
export function transferImage(img) {
  if (!img) return img;

  if (img.indexOf(ossPath) === 0 || img.indexOf(ossFastPath) === 0) {
    if (store.getState().system.systemInfo.platform !== "ios") {
      // ios 暂时不支持 webp
      return `${img.replace(
        ossPath,
        ossFastPath
      )}?x-oss-process=style/transwebp`;
    }

    return `${img.replace(
      ossPath,
      ossFastPath
    )}?x-oss-process=image/resize,m_lfit,w_750/quality,Q_80`;
  }

  return img;
}

/**
 * 简易版解析 url
 * @param {*} url
 */
export function parseURL(url) {
  if (!url) return undefined;

  let strTmp;
  let query;
  let hash;

  const gotHash = url.split("#");
  strTmp = gotHash[0];
  if (gotHash.length > 1) {
    hash = gotHash[1];
  }

  const gotQuery = strTmp.split("?");
  strTmp = gotQuery[0];
  if (gotQuery.length > 1) {
    query = gotQuery[1];
  }

  // 小程序只支持 https 开头
  const [_, origin, path] = /(https?:\/\/[^/]+)(.*)/.exec(strTmp);

  return {
    origin,
    path,
    query,
    hash
  };
}

/**
 * 解析 queryString   a=b&c=d  ==> { a:b, c:d }
 * @param {*} queryString
 */
export function parseQueryString(queryString) {
  if (!queryString || "?" === queryString) return undefined;

  const query =
    queryString.indexOf("?") === 0
      ? queryString.replace(/^\?/, "")
      : queryString;

  return query
    .split("&")
    .filter(x => x)
    .reduce((acc, it) => {
      const [k, v] = it.split("=");
      const val = Object.prototype.hasOwnProperty.call(acc, k)
        ? [...[].concat(acc[k]), v]
        : v;

      return {
        ...acc,
        [`${k}`]: ifNull(val, undefined)
      };
    }, {});
}

export function toQueryString(o) {
  const obj = o || {};
  return Object.keys(obj)
    .map(key => `${key}=${obj[key]}`)
    .join("&");
}

/**
 *
 * @param {*} url
 * @param {*} params
 */
export function mergeQueryParams(from, to) {
  const originParams = parseQueryString(from) || {};
  const newParams = {
    ...originParams,
    ...(parseQueryString(to) || {})
  };

  return Object.keys(newParams)
    .map(key => `${key}=${newParams[key]}`)
    .join("&");
}

/**
 * 格式化剩余时间为 xx天xx小时xx分xx秒
 * @param {int} leftTime 时间毫秒数
 */
export function formateLeftTime(leftTime, unit) {
  const nd = 1000 * 24 * 60 * 60;
  const nh = 1000 * 60 * 60;
  const nm = 1000 * 60;
  const ns = 1000;

  const day = Math.floor(leftTime / nd);
  const hour = Math.floor((leftTime % nd) / nh);
  const min = Math.floor(((leftTime % nd) % nh) / nm);
  const sec = Math.floor((((leftTime % nd) % nh) % nm) / ns);

  switch (unit) {
    case "min":
      return `${day}天${hour}小时${min}分`;
    default:
      return `${day}天${hour}小时${min}分${sec}秒`;
  }
}

/**
 * @description 获取当前页url
 */
export const getCurrentPageUrl = () => {
  let pages = Taro.getCurrentPages();
  let currentPage = pages[pages.length - 1];
  let url = currentPage.route;
  return url;
};

export const pageToLogin = () => {
  let path = getCurrentPageUrl();
  if (!path.includes("login")) {
    Taro.navigateTo({
      url: "/pages/login/login"
    });
  }
};

export const isObject = function(value) {
  var type = typeof value;
  return value != null && type === "object";
};

//使用递归的方式实现数组、对象的深拷贝
export const deepClone = function(obj) {
  if (!isObject(obj)) {
    throw new Error("obj 不是一个对象！");
  }
  let isArray = Array.isArray(obj);
  let cloneObj = isArray ? [] : {};
  for (let key in obj) {
    cloneObj[key] = isObject(obj[key]) ? deepClone(obj[key]) : obj[key];
  }

  return cloneObj;
};

export const getLocation = () => {
  return new Promise((resolve) => {
    Taro.getLocation().then(location => {
      Taro.setStorageSync('lat', location.latitude)
      Taro.setStorageSync('lon', location.longitude)

      resolve({ lon: location.longitude, lat: location.latitude })
    }).catch(err => {
      if (err.errMsg === 'getLocation:fail auth deny') {
        Taro.showModal({
          content: '请同意授权您的定位功能',
          showCancel: false,
          duration: 3000,
        })
      } else {
        Taro.showToast({
          title: `定位失败, 请手动选择城市: ${err.errMsg}`,
          icon: 'none',
          duration: 3000,
        })
      }

      console.error(err)
      resolve()
    })
  })
}

export const getRouterParams = (options) => {
  return new Promise(resolve => {
    const router = options || getCurrentInstance().router
    const originQuery = { ...router.query };
    let { query: { scene: paramsId }, scene } = router

    // query 里面如果跟同级场景一样, 说明是小程序原生场景值
    if (paramsId === scene) {
      paramsId = undefined
    }

    if (paramsId) {
      // 扫码进入
      getCodeScene(paramsId).then(res => {
        let params = JSON.parse(res).scene

        let { from: _from, recommender: _recommender, consultant, id, ...left } = parseQueryString(params) || {}

        router.query = Object.assign(router.query, {
          originQuery,
          id,
          paramsId,
          from: _from,
          recommender: _recommender,
          consultant,
          params,
          targetId: id,
          ...left,
        })
        Taro.setStorageSync('recommender', router.query.recommender)
        Taro.setStorageSync('consultantId', router.query.consultant)
        resolve(router)
      })
    } else {
      router.query = Object.assign(router.query, {
        originQuery,
        paramsId: router.query.id || '',
        from: router.query.from || 'search',
        recommender: router.query.recommender || '',
        targetId: router.query.id || '',
        consultant: router.query.consultant || '',
      })

      resolve(router)
    }
  })
}