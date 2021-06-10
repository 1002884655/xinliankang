import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView } from '@tarojs/components'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
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
    <view className='Page Video'>

      <ScrollView scroll-y={true} refresher-enabled={true} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#fff'>
        <view className='PageContent'>
          视频
        </view>
      </ScrollView>

    </view>
  )
})
