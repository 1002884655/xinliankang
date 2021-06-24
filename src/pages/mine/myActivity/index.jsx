import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView } from '@tarojs/components'
import '../../../assets/css/iconfont.css'
import MyActivityListItem from '../components/MyActivityListItem/index'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
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
    <view className='Page myActivity'>

      <ScrollView scroll-y={true} refresher-enabled={true} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#f8f8f8'>
        <view className='PageContent'>
          <view className='List'>
            {
              PageList.map((item, index) => (
                <view>
                  <text>2021-05-23 12:00</text>
                  <MyActivityListItem Data={item} key={`MyActivityListItem-${index}`}></MyActivityListItem>
                </view>
              ))
            }
          </view>

          {/* bottom */}
          <view className='PageBottom'>
            <text>已经到底了~</text>
          </view>

        </view>
      </ScrollView>

    </view>
  )
})
