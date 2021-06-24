import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView, Image } from '@tarojs/components'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
  const [IsPull, setPull] = useState(false)
  const [PullTimer, setPullTimer] = useState(null)
  const [PageList, setPageList] = useState(['', '', '', '', '', '', '', '', '', ''])

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
    <view className='Page Chat'>

      <ScrollView scroll-y={true} refresher-enabled={true} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#fff'>
        <view className='PageContent'>
          {
            PageList.map((item, index) => (
              <view className='ListItem flex-h' key={`ListItem-${index}`}>
                <view className='Icon'>
                  <view>
                    <Image mode='aspectFill' className='centerLabel' src={item.img || require('../../assets/mine-icon18.png')} />
                  </view>
                  <text className='Num'>99</text>
                </view>
                <view className='flex-item'>
                  <view className='flex-h'>
                    <text className='flex-item'>张三</text>
                    <text>刚刚</text>
                  </view>
                  <view className='Msg'>
                    <text>户型很好，很满意</text>
                  </view>
                </view>
              </view>
            ))
          }
        </view>
      </ScrollView>

    </view>
  )
})
