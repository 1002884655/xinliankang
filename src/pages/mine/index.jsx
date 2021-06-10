import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import NeedLogin from './components/NeedLogin'
import { ScrollView, Image } from '@tarojs/components'
import '../../assets/css/iconfont.css'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
  const [MenuList, setMenuList] = useState([
    [
      { name: '添加客户', icon: '', router: '' },
      { name: '我的主页', icon: '', router: '' },
      { name: '我的推广码', icon: '', router: '' },
      { name: '客户分析', icon: '', router: '' },
      { name: '盘客工具', icon: '', router: '' }
    ],
    [
      { name: '我的分享', icon: '', router: '' },
      { name: '我的活动', icon: '', router: '' },
      { name: '我的课堂', icon: '', router: '' },
      { name: '我的收藏', icon: '', router: '' }
    ],
    [
      { name: '房贷计算器', icon: '', router: '' },
      { name: '购房百科', icon: '', router: '' },
      { name: '意见反馈', icon: '', router: '' }
    ]
  ])
  const [IsPull, setPull] = useState(false)
  const [ShowLogin, setShowLogin] = useState(false)
  const [PullTimer, setPullTimer] = useState(null)

  const PageRefresh = () => { // 页面下拉刷新回调
    setPull(true)
  }

  useEffect(() => { // 下拉刷新触发
    if (IsPull) {
      clearTimeout(PullTimer)
      setPullTimer(setTimeout(() => {
        setPull(false)
      }, 2000))
    }
  }, [IsPull])

  return (
    <view className='Page Mine'>

      <ScrollView scroll-y={true} refresher-enabled={true} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#fff'>
        <view className='PageContent'>

          {/* 需要登录 */}
          {
            ShowLogin &&
            <NeedLogin></NeedLogin>
          }

          {/* 登录后 */}
          {
            !ShowLogin &&
            <view className='Content'>

              {/* 用户信息 */}
              <view className='UserInfo'>
                <view className='UserIcon'>
                  <Image mode='aspectFill' className='centerLabel' src={null} />
                </view>
                <view className='OtherInfo'>
                  <view className='Name'>
                    <view>
                      <text>用户姓名</text>
                      <view>
                        <text className='iconfont icon-bianji'></text>
                        <text>个人信息资料修改</text>
                      </view>
                    </view>
                    <text className='Role'>置业顾问</text>
                    <text className='New'>NEW</text>
                    <text className='iconfont icon-diqiu'></text>
                  </view>
                </view>
              </view>

              {/* 用户菜单 */}
              <view className='MenuList'>
                {
                  MenuList.map((item, index) => (
                    <view>
                      {
                        item.map((subItem, subIndex) => (
                          <view key={`MenuItem-${index}-${subIndex}`} className='flex-h'>
                            <text className={`iconfont ${subItem.icon}`}></text>
                            <view className='flex-item flex-h'>
                              <text className='flex-item'>{subItem.name}</text>
                              <text className='iconfont icon-jiantouright'></text>
                            </view>
                          </view>
                        ))
                      }
                    </view>
                  ))
                }
              </view>

            </view>
          }

        </view>
      </ScrollView>

    </view>
  )
})
