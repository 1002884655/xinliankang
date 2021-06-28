import React, { useState, useEffect } from 'react'
import './index.scss'
import Taro from '@tarojs/taro'
import { ScrollView, Image } from '@tarojs/components'

export default function UserDetailViewRecord (props) {
  const { Data = {} } = props
  const [PageList, setPageList] = useState(['', '', '', '', '', '', '', '', '', '', '', '', ''])
  const [IsPull, setPull] = useState(false)
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
    <view className='components UserDetailViewRecord'>
      <ScrollView scroll-y={true} refresher-enabled={true} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#fff'>
        <view className='PageContent'>

          <view className='Content'>
            <view className='flex-h'>
              <text>查看项目详情</text>
              <text>：</text>
              <view className='flex-item'>
                <text>银城悦见山</text>
              </view>
              <text>2021/05/21 13:00</text>
            </view>
            <view className='flex-h'>
              <text>查看户型图</text>
              <text>：</text>
              <view className='flex-item'>
                <text>银城悦见山</text>
              </view>
              <text>2021/05/21 13:00</text>
            </view>
            <view className='flex-h'>
              <text>报名活动</text>
              <text>：</text>
              <view className='flex-item'>
                <text>银城悦见山</text>
              </view>
              <text>2021/05/21 13:00</text>
            </view>
            <view className='flex-h'>
              <text>在线沟通</text>
              <text>：</text>
              <view className='flex-item'>
                <text>银城悦见山</text>
              </view>
              <text>2021/05/21 13:00</text>
            </view>
            <view className='flex-h'>
              <text>在线咨询</text>
              <text>：</text>
              <view className='flex-item'>
                <text>银城悦见山</text>
              </view>
              <text>2021/05/21 13:00</text>
            </view>
          </view>

          <view className='Btn'>
            <text className='active'>添加跟进</text>
          </view>

        </view>
      </ScrollView>
    </view>
  )
}
