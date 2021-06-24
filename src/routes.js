
const routes = [

  /**********************************
   *  Tab 页面
   *********************************/
  {
    name: '合作渠道',
    page: 'pages/mine/partnerChannel/index',
    pkg: 'main',
    type: 'mine',
  },
  {
    name: '首页',
    page: 'pages/index/index',
    pkg: 'main',
    isTab: true,
    type: 'main',
  },
  {
    name: '视频',
    page: 'pages/video/index',
    pkg: 'main',
    isTab: true,
    type: 'other',
  },
  {
    name: '消息',
    page: 'pages/chat/index',
    pkg: 'main',
    isTab: true,
    type: 'other',
  },
  {
    name: '我是',
    page: 'pages/mine/index',
    pkg: 'main',
    isTab: true,
    type: 'center',
  },

  // /********************************
  //  * 项目相关
  //  *******************************/
  {
    name: '定位',
    page: 'pages/index/location/index',
    pkg: 'main',
    type: 'other',
  },
  {
    name: '楼盘搜索',
    page: 'pages/index/buildingSearch/index',
    pkg: 'main',
    type: 'building',
  },
  {
    name: '楼盘列表',
    page: 'pages/index/buildingList/index',
    pkg: 'main',
    type: 'building',
  },
  {
    name: '楼盘详情',
    page: 'pages/index/buildingDetail/index',
    pkg: 'main',
    type: 'building',
  },
  {
    name: '品牌列表',
    page: 'pages/index/brandList/index',
    pkg: 'main',
    type: 'building',
  },
  {
    name: '帮我找房',
    page: 'pages/index/helpToFindHouse/index',
    pkg: 'main',
    type: 'building',
  },
  {
    name: '增值服务',
    page: 'pages/index/addedValueService/index',
    pkg: 'main',
    type: 'building',
  },
  {
    name: '地图找房',
    page: 'pages/index/findHouseFromMap/index',
    pkg: 'main',
    type: 'building',
  },
  {
    name: '活动列表',
    page: 'pages/index/activityList/index',
    pkg: 'main',
    type: 'activity',
  },
  {
    name: '活动详情',
    page: 'pages/index/activityDetail/index',
    pkg: 'main',
    type: 'activity',
  },
  {
    name: '特价房',
    page: 'pages/index/specialPriceHouse/index',
    pkg: 'main',
    type: 'building',
  },
  {
    name: '康养',
    page: 'pages/index/recovered/index',
    pkg: 'main',
    type: 'building',
  },
  {
    name: '文旅商办',
    page: 'pages/index/culturalAndBusiness/index',
    pkg: 'main',
    type: 'building',
  },
  {
    name: '新闻资讯',
    page: 'pages/index/newsList/index',
    pkg: 'main',
    type: 'news',
  },
  {
    name: '资讯详情',
    page: 'pages/index/newsDetail/index',
    pkg: 'main',
    type: 'news',
  },
  {
    name: '购房百科',
    page: 'pages/index/encyclopediasOfBuyHouse/index',
    pkg: 'main',
    type: 'building',
  },
  {
    name: '百科详情',
    page: 'pages/index/encyDetail/index',
    pkg: 'main',
    type: 'building',
  },
  {
    name: '房贷计算',
    page: 'pages/index/mortgageCalculation/index',
    pkg: 'main',
    type: 'building',
  },

  // 我的
  {
    name: '基本信息',
    page: 'pages/mine/userInfo/index',
    pkg: 'main',
    type: 'mine',
  },
  {
    name: '推荐客户',
    page: 'pages/mine/recommendUser/index',
    pkg: 'main',
    type: 'mine',
  },
  {
    name: '报备客户',
    page: 'pages/mine/reportUser/index',
    pkg: 'main',
    type: 'mine',
  },
  {
    name: '我的分享',
    page: 'pages/mine/myShare/index',
    pkg: 'main',
    type: 'mine',
  },
  {
    name: '我的活动',
    page: 'pages/mine/myActivity/index',
    pkg: 'main',
    type: 'mine',
  },
  {
    name: '我的客户',
    page: 'pages/mine/myCustomer/index',
    pkg: 'main',
    type: 'mine',
  },
  {
    name: '我的收藏',
    page: 'pages/mine/myCollect/index',
    pkg: 'main',
    type: 'mine',
  },
  {
    name: '意见反馈',
    page: 'pages/mine/feedBack/index',
    pkg: 'main',
    type: 'mine',
  },

]

/**
 * 获取 app pages 列表
 */
function getPages() {
  const grp = routes.reduce((g, r) => {
    const { pkg, page } = r
    const pg = g[pkg] || []
    
    return Object.assign(g, {
      [`${pkg}`]: pg.concat(page),
    })
  }, {});

  const pages = grp.main;
  const subPackages = Object.keys(grp).filter(x => x !== 'main').reduce(((pkg, key) => {
    return pkg.concat({
      root: key,
      pages: grp[key],
    })
  }),[])


  return {
    pages,
    subPackages,
  }
}

// eslint-disable-next-line import/no-commonjs
module.exports = {
  routes,
  getPages,
};
