
const routes = [

  /**********************************
   *  Tab 页面
   *********************************/

  {
    name: '我是',
    page: 'pages/mine/index',
    pkg: 'main',
    isTab: true,
    type: 'center',
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
    name: '聊天',
    page: 'pages/chat/index',
    pkg: 'main',
    isTab: true,
    type: 'other',
  },

  // /********************************
  //  * 项目相关
  //  *******************************/
  // {
  //   name: '项目列表',
  //   page: 'pages/project/list/index',
  //   pkg: 'main',
  //   type: 'building',
  // },
  // {
  //   name: '地图看房',
  //   page: 'pages/project/map/index',
  //   pkg: 'main',
  //   type: 'building',
  // },
  // {
  //   name: '项目详情',
  //   page: 'pages/project/detail/index',
  //   pkg: 'main',
  //   type: 'building',
  // },
  // {
  //   name: '项目亮点',
  //   page: 'pages/project/detail/highLight',
  //   pkg: 'main',
  //   type: 'building',
  // },
  // {
  //   name: '楼盘周边',
  //   page: 'pages/project/detail/map',
  //   pkg: 'main',
  //   type: 'building',
  // },
  // {
  //   name: '楼盘信息',
  //   page: 'pages/project/floor/index',
  //   pkg: 'main',
  //   type: 'building',
  // },
  // {
  //   name: '项目相册',
  //   page: 'pages/project/album/index',
  //   pkg: 'main',
  //   type: 'building',
  // },


  // /**************************************
  //  * 商城相关
  //  *************************************/
  // {
  //   name: '积分规则',
  //   page: 'pages/shop/rule/index',
  //   pkg: 'main',
  //   type: 'other',
  // },
  // {
  //   name: '积分明细',
  //   page: 'pages/shop/integralDetail/index',
  //   pkg: 'main',
  //   type: 'other',
  // },
  // {
  //   name: '商品详情',
  //   page: 'pages/shop/detail/index',
  //   pkg: 'main',
  //   type: 'other',
  // },


  // /************************************
  //  * 个人中心
  //  ***********************************/
  // {
  //   name: '登录',
  //   page: 'pages/person/login/index',
  //   pkg: 'main',
  //   type: 'other',
  // },
  // {
  //   name: '我的分享',
  //   page: 'pages/person/myShare/index',
  //   pkg: 'main',
  //   type: 'other',
  // },
  // {
  //   name: '我的活动',
  //   page: 'pages/activity/myActivity',
  //   pkg: 'main',
  //   type: 'activity',
  // },
  // {
  //   name: '我的拼团',
  //   page: 'pages/activity/assemblePage',
  //   pkg: 'main',
  //   type: 'activity',
  // },
  // {
  //   name: '我的助力',
  //   page: 'pages/activity/assistancePage',
  //   pkg: 'main',
  //   type: 'activity',
  // },
  // {
  //   name: '我的推广码',
  //   page: 'pages/person/spread/index',
  //   pkg: 'main',
  //   type: 'other',
  // },
  // {
  //   name: '我的卡片',
  //   page: 'pages/card/index',
  //   pkg: 'main',
  //   type: 'card',
  // },
  // {
  //   name: '更换头像',
  //   page: 'pages/card/photo',
  //   pkg: 'main',
  //   type: 'card',
  // },
  // {
  //   name: '我的客户',
  //   page: 'pages/person/myGuest/index',
  //   pkg: 'main',
  //   type: 'agent',
  // },
  // {
  //   name: '我的收藏',
  //   page: 'pages/person/favorite/index',
  //   pkg: 'main',
  //   type: 'other',
  // },
  // {
  //   name: '个人资料',
  //   page: 'pages/person/personDetail/index',
  //   pkg: 'main',
  //   type: 'center',
  // },
  // {
  //   name: '编辑资料',
  //   page: 'pages/person/personDetail/editDetail/index',
  //   pkg: 'main',
  //   type: 'center',
  // },
  // {
  //   name: '每日签到',
  //   page: 'pages/signin/index',
  //   pkg: 'main',
  //   type: 'other',
  // },


  // /****************************************
  //  * 置业相关
  //  ***************************************/
  // {
  //   name: '置业列表',
  //   page: 'pages/card/list/index',
  //   pkg: 'main',
  //   type: 'other',
  // },
  // {
  //   name: '置业绑定',
  //   page: 'pages/card/register/index',
  //   pkg: 'main',
  //   type: 'other',
  // },
  // {
  //   name: '咨询列表',
  //   page: 'pages/im/list/index',
  //   pkg: 'main',
  //   type: 'info',
  // },
  // {
  //   name: '聊天咨询',
  //   page: 'pages/im/index',
  //   pkg: 'main',
  //   type: 'info',
  // },
  // {
  //   name: '卡片围观记录',
  //   page: 'pages/card/fans/index',
  //   pkg: 'main',
  //   type: 'other',    
  // },

  // /***********************************
  //  * 客户相关
  //  **********************************/
  // {
  //   name: '访客信息',
  //   page: 'pages/person/myShare/accessRecord',
  //   pkg: 'main',
  //   type: 'agent',
  // },
  // {
  //   name: '客户详情',
  //   page: 'pages/person/myGuest/editGuest/index',
  //   pkg: 'main',
  //   type: 'agent',
  // },
  // {
  //   name: '报备客户',
  //   page: 'pages/report/index',
  //   pkg: 'main',
  //   type: 'agent',
  // },
  // {
  //   name: '报备授权',
  //   page: 'pages/report/login/index',
  //   pkg: 'main',
  //   type: 'agent',
  // },
  // {
  //   name: '报备详情',
  //   page: 'pages/report/detail/index',
  //   pkg: 'main',
  //   type: 'agent',
  // },


  // /************************************
  //  * 活动资讯
  //  ***********************************/
  // {
  //   name: 'H5',
  //   page: 'pages/project/h5Page',
  //   pkg: 'main',
  //   type: 'activity',
  // },
  // {
  //   name: '活动详情',
  //   page: 'pages/activity/detail/index',
  //   pkg: 'main',
  //   type: 'activity',
  // },
  // {
  //   name: '助力详情',
  //   page: 'pages/activity/detail/assistance',
  //   pkg: 'main',
  //   type: 'activity',
  // },
  // {
  //   name: '拼团详情',
  //   page: 'pages/activity/detail/assemble',
  //   pkg: 'main',
  //   type: 'activity',
  // },
  // {
  //   name: '资讯详情',
  //   page: 'pages/news/detail/index',
  //   pkg: 'main',
  //   type: 'news',
  // },
  // {
  //   name: '签到',
  //   page: 'pages/checkin/index',
  //   pkg: 'main',
  //   type: 'activity',
  // },
  // {
  //   name: '签到结果',
  //   page: 'pages/checkin/checkinsuccess/index',
  //   pkg: 'main',
  //   type: 'activity',
  // },

  // /*****************************************
  //  * 其他
  //  ****************************************/
  // {
  //   name: '授权',
  //   page: 'pages/person/authorize/index',
  //   pkg: 'main',
  //   type: 'other',
  // },
  // {
  //   name: '支付',
  //   page: 'pages/project/pay',
  //   pkg: 'main',
  //   type: 'other',
  // },
  // {
  //   name: '授权',
  //   page: 'pages/auth/index',
  //   pkg: 'main',
  //   type: 'other',
  // },
  // {
  //   name: '购房政策列表',
  //   page: 'pages/policy/index',
  //   pkg: 'main',
  //   type: 'other',
  // },
  // {
  //   name: '购房政策详情',
  //   page: 'pages/policy/detail/index',
  //   pkg: 'main',
  //   type: 'other',
  // },
  // {
  //   name: '房贷计算器',
  //   page: 'pages/toolKit/index',
  //   pkg: 'main',
  //   type: 'other',
  // },
  // {
  //   name: '房贷计算结果',
  //   page: 'pages/toolKit/calculateResult/index',
  //   pkg: 'main',
  //   type: 'other',
  // },
  // {
  //   name: '城市列表',
  //   page: 'pages/city/index',
  //   pkg: 'main',
  //   type: 'other',
  // },
  // {
  //   name: '外链容器页',
  //   page: 'pages/project/panorama/index',
  //   pkg: 'main',
  //   type: 'other',
  // },

  // /**
  //  * 子包: 在线购房
  //  */
  // {
  //   name: '房源列表',
  //   page: 'pages/houseList/index',
  //   pkg: 'onlineSelling',
  //   type: 'house',
  // },
  // {
  //   name: '认筹流程',
  //   page: 'pages/raiseMoney/index',
  //   pkg: 'onlineSelling',
  //   type: 'house',
  // },
  // {
  //   name: '合同签署结果',
  //   page: 'pages/raiseMoney/signResult',
  //   pkg: 'onlineSelling',
  //   type: 'house',
  // },
  // {
  //   name: '实名认证',
  //   page: 'pages/raiseMoney/Certification',
  //   pkg: 'onlineSelling',
  //   type: 'house',
  // },
  // {
  //   name: '直播详情',
  //   page: 'pages/live/index',
  //   pkg: 'onlineSelling',
  //   type: 'live',
  // },
  // {
  //   name: '选房帮助',
  //   page: 'pages/help/index',
  //   pkg: 'onlineSelling',
  //   type: 'house',
  // },
  // {
  //   name: '选房记录',
  //   page: 'pages/records/index',
  //   pkg: 'onlineSelling',
  //   type: 'house',
  // },
  // {
  //   name: '房源详情',
  //   page: 'pages/detail/index',
  //   pkg: 'onlineSelling',
  //   type: 'house',
  // },
  // {
  //   name: '预选结果',
  //   page: 'pages/detail/resultPage',
  //   pkg: 'onlineSelling',
  //   type: 'house',
  // },
  // {
  //   name: '筛选房源',
  //   page: 'pages/screenHouse/index',
  //   pkg: 'onlineSelling',
  //   type: 'house',
  // },
  // {
  //   name: '选择置业',
  //   page: 'pages/chooseConsultant/index',
  //   pkg: 'onlineSelling',
  //   type: 'house',
  // },
  // {
  //   name: '认筹协议',
  //   page: 'pages/protocol/index',
  //   pkg: 'onlineSelling',
  //   type: 'house',
  // },
  // {
  //   name: '认筹单',
  //   page: 'pages/raiseProfile/index',
  //   pkg: 'onlineSelling',
  //   type: 'house',
  // },
  // {
  //   name: '房源清单',
  //   page: 'pages/raiseProfile/houseResource',
  //   pkg: 'onlineSelling',
  //   type: 'house',
  // },
  // {
  //   name: '添加预选房源',
  //   page: 'pages/addHouse/index',
  //   pkg: 'onlineSelling',
  //   type: 'house',
  // },
  // {
  //   name: '添加其他房源',
  //   page: 'pages/houseCart/index',
  //   pkg: 'onlineSelling',
  //   type: 'house',
  // },


  // /**
  //  * 子包: 不常用功能
  //  */
  // {
  //   name: '盘客工具',
  //   page: 'pages/person/customerAnalysis/index',
  //   pkg: 'useless',
  //   type: 'agent',
  // },
  // {
  //   name: '我的客户',   // 置业-我的客户
  //   page: 'pages/person/customerAnalysis/myCustomer',
  //   pkg: 'useless',
  //   type: 'agent',
  // },
  // {
  //   name: '客户分析',
  //   page: 'pages/person/customerAnalysis/analysis',
  //   pkg: 'useless',
  //   type: 'agent',
  // },
  // {
  //   name: '我的资料',
  //   page: 'pages/person/profile/index',
  //   pkg: 'useless',
  //   type: 'agent',
  // },
  // {
  //   name: '资料审核',
  //   page: 'pages/person/profile/detail/index',
  //   pkg: 'useless',
  //   type: 'agent',
  // },
  // {
  //   name: '我的主页',
  //   page: 'pages/agent/index',
  //   pkg: 'useless',
  //   type: 'agent',
  // },
  // {
  //   name: '成为经纪人',
  //   page: 'pages/agent/become/index',
  //   pkg: 'useless',
  //   type: 'agent',
  // },
  // {
  //   name: '推荐客户',
  //   page: 'pages/agent/recommend/index',
  //   pkg: 'useless',
  //   type: 'agent',
  // },
  // {
  //   name: '我的客户',   // 经纪人-我的客户
  //   page: 'pages/agent/client/index',
  //   pkg: 'useless',
  //   type: 'agent',
  // },
  // {
  //   name: '客户审核进度',
  //   page: 'pages/agent/progress/index',
  //   pkg: 'useless',
  //   type: 'agent',
  // },
  // {
  //   name: '意见反馈',
  //   page: 'pages/person/feedback/index',
  //   pkg: 'useless',
  //   type: 'other',
  // },
  // {
  //   name: '积分兑换记录',
  //   page: 'pages/shop/record/index',
  //   pkg: 'useless',
  //   type: 'other',
  // },
  // {
  //   name: '我的邀请',
  //   page: 'pages/agent/invitation/index',
  //   pkg: 'useless',
  //   type: '',
  // },

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
