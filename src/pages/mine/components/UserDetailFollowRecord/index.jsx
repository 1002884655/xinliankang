import React, { useState, useEffect } from 'react'
import './index.scss'
import Taro from '@tarojs/taro'
import { ScrollView, Image } from '@tarojs/components'

export default function UserDetailFollowRecord (props) {
  const { Data = {} } = props
  const [PageList, setPageList] = useState([
    { content: '参加了5D沉浸式 剧场', time: '2019年7月12日 12:30:00' },
    { content: '参加了5D沉浸式 剧场', time: '2019年7月12日 12:30:00' },
    { content: '参加了5D沉浸式 剧场', time: '2019年7月12日 12:30:00' },
    { content: '参加了5D沉浸式 剧场', time: '2019年7月12日 12:30:00' },
    { content: '参加了5D沉浸式 剧场', time: '2019年7月12日 12:30:00' },
    { content: '参加了5D沉浸式 剧场', time: '2019年7月12日 12:30:00' }
  ])
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
    <view className='components UserDetailFollowRecord'>
      <ScrollView scroll-y={true} refresher-enabled={true} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#fff'>
        <view className='PageContent'>

          <view className='Content'>
            {
              PageList.map((item, index) => (
                <view className='flex-h' key={`Item-${index}`}>
                  <view className='flex-item'>
                    <text>{item.time}</text>
                  </view>
                  <view className='Line'>
                    <view></view>
                  </view>
                  <view className='flex-item'>
                    <text className='active'>{item.content}</text>
                  </view>
                </view>
              ))
            }
          </view>

          <view className='Btn'>
            <text className='active'>添加跟进</text>
          </view>

        </view>
      </ScrollView>
    </view>
  )
}
