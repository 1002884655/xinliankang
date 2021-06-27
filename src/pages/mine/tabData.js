const MineMenuList = {
  User: [ // 普通用户
    [
      { name: '推荐客户', icon: require('../../assets/mine-icon8.png'), router: '/pages/mine/recommendUser/index' }
    ],
    [
      { name: '我的分享', icon: require('../../assets/mine-icon9.png'), router: '/pages/mine/myShare/index' },
      { name: '我的活动', icon: require('../../assets/mine-icon10.png'), router: '/pages/mine/myActivity/index' },
      { name: '我的收藏', icon: require('../../assets/mine-icon13.png'), router: '/pages/mine/myCollect/index' }
    ],
    [
      { name: '房贷计算器', icon: require('../../assets/mine-icon4.png'), router: '' },
      { name: '购房百科', icon: require('../../assets/mine-icon2.png'), router: '/pages/index/encyclopediasOfBuyHouse/index' },
      { name: '意见反馈', icon: require('../../assets/mine-icon16.png'), router: '/pages/mine/feedBack/index' }
    ]
  ],
  Broker: [ // 经纪人
    [
      { name: '报备客户', icon: require('../../assets/mine-icon1.png'), router: '/pages/mine/reportUser/index' },
      { name: '合作渠道', icon: require('../../assets/mine-icon3.png'), router: '/pages/mine/partnerChannel/index' }
    ],
    [
      { name: '我的客户', icon: require('../../assets/mine-icon15.png'), router: '/pages/mine/myCustomer/index' },
      { name: '我的分享', icon: require('../../assets/mine-icon9.png'), router: '/pages/mine/myShare/index' },
      { name: '我的活动', icon: require('../../assets/mine-icon10.png'), router: '/pages/mine/myActivity/index' },
      { name: '我的课堂', icon: require('../../assets/mine-icon12.png'), router: '/pages/mine/myCourse/index' },
      { name: '我的收藏', icon: require('../../assets/mine-icon13.png'), router: '/pages/mine/myCollect/index' }
    ],
    [
      { name: '房贷计算器', icon: require('../../assets/mine-icon4.png'), router: '' },
      { name: '购房百科', icon: require('../../assets/mine-icon2.png'), router: '/pages/index/encyclopediasOfBuyHouse/index' },
      { name: '意见反馈', icon: require('../../assets/mine-icon16.png'), router: '/pages/mine/feedBack/index' }
    ]
  ],
  Adviser: [ // 置业顾问
    [
      { name: '添加客户', icon: require('../../assets/mine-icon7.png'), router: '/pages/mine/addCustomer/index' },
      { name: '我的主页', icon: require('../../assets/mine-icon15.png'), router: '' },
      { name: '我的推广码', icon: require('../../assets/mine-icon14.png'), router: '' },
      { name: '客户分析', icon: require('../../assets/mine-icon5.png'), router: '' },
      { name: '盘客工具', icon: require('../../assets/mine-icon6.png'), router: '/pages/mine/statCustomer/index' }
    ],
    [
      { name: '我的分享', icon: require('../../assets/mine-icon9.png'), router: '/pages/mine/myShare/index' },
      { name: '我的活动', icon: require('../../assets/mine-icon10.png'), router: '/pages/mine/myActivity/index' },
      { name: '我的课堂', icon: require('../../assets/mine-icon12.png'), router: '/pages/mine/myCourse/index' },
      { name: '我的收藏', icon: require('../../assets/mine-icon13.png'), router: '/pages/mine/myCollect/index' }
    ],
    [
      { name: '房贷计算器', icon: require('../../assets/mine-icon4.png'), router: '' },
      { name: '购房百科', icon: require('../../assets/mine-icon2.png'), router: '/pages/index/encyclopediasOfBuyHouse/index' },
      { name: '意见反馈', icon: require('../../assets/mine-icon16.png'), router: '/pages/mine/feedBack/index' }
    ]
  ],
  Resident: [ // 驻场管理
    [
      { name: '推荐客户', icon: require('../../assets/mine-icon8.png'), router: '/pages/mine/recommendUser/index' },
      { name: '驻场管理', icon: require('../../assets/mine-icon17.png'), router: '/pages/mine/residentManager/index' }
    ],
    [
      { name: '我的客户', icon: require('../../assets/mine-icon11.png'), router: '/pages/mine/myCustomer/index' },
      { name: '我的分享', icon: require('../../assets/mine-icon9.png'), router: '/pages/mine/myShare/index' },
      { name: '我的活动', icon: require('../../assets/mine-icon10.png'), router: '/pages/mine/myActivity/index' },
      { name: '我的收藏', icon: require('../../assets/mine-icon13.png'), router: '/pages/mine/myCollect/index' }
    ],
    [
      { name: '房贷计算器', icon: require('../../assets/mine-icon4.png'), router: '' },
      { name: '购房百科', icon: require('../../assets/mine-icon2.png'), router: '/pages/index/encyclopediasOfBuyHouse/index' },
      { name: '意见反馈', icon: require('../../assets/mine-icon16.png'), router: '/pages/mine/feedBack/index' }
    ]
  ]
}

export default MineMenuList