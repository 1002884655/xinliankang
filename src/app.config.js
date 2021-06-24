import { getPages } from './routes'

const { pages } = getPages()

export default {
  pages,
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    selectedColor: '#193C83',

    list: [
      {
        pagePath: "pages/index/index",
        text: "首页",
        iconPath: './assets/tabbar/index1.png',
        selectedIconPath: './assets/tabbar/index2.png',
      },
      {
        pagePath: "pages/video/index",
        text: "视频",
        iconPath: './assets/tabbar/video1.png',
        selectedIconPath: './assets/tabbar/video2.png',
      },
      {
        pagePath: "pages/chat/index",
        text: "消息",
        iconPath: './assets/tabbar/chat1.png',
        selectedIconPath: './assets/tabbar/chat2.png',
      },
      {
        pagePath: "pages/mine/index",
        text: "我是",
        iconPath: './assets/tabbar/mine1.png',
        selectedIconPath: './assets/tabbar/mine2.png',
      }
    ]
  },
  permission: {
    "scope.userLocation": {
      desc: "你的位置信息将用于显示当前区域信息"
    }
  },
}
