import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import NeedLogin from './components/NeedLogin'
import { ScrollView, Image } from '@tarojs/components'
import '../../assets/css/iconfont.css'
import MineMenuList from './tabData'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
  const UserRole = 1 // 1-普通用户 2-经纪人 3-置业顾问 4-驻场管理
  const [MenuList, setMenuList] = useState(UserRole === 1 ? MineMenuList.User : UserRole === 2 ? MineMenuList.Broker : UserRole === 3 ? MineMenuList.Adviser : MineMenuList.Resident)
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
                  <Image mode='aspectFill' className='centerLabel' src={require('../../assets/mine-icon18.png')} />
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
                    <text className='Role'>{UserRole === 1 ? '客户' : UserRole === 2 ? '经纪人' : UserRole === 3 ? '置业顾问' : '驻场管理'}</text>
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
                            <view className='Icon'>
                              <Image mode='aspectFit' className='centerLabel' src={subItem.icon} />
                            </view>
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
