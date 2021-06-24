import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView, Image } from '@tarojs/components'
import '../../../assets/css/iconfont.css'
import DetailBottom from './components/DetailBottom/index'
import BasicInfo from './components/BasicInfo/index'

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
    <view className='Page buildingDetail flex-v'>

      <view className='flex-item'>
        <view>
          <ScrollView scroll-y={true} refresher-enabled={false} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#f8f8f8'>
            <view className='PageContent'>

              {/* banner */}
              <view className='BannerContainer'>
                <view>
                  <view>

                  </view>
                </view>
              </view>

              {/* content */}
              <view className='DetailContent'>

                {/* 基本信息 */}
                <view className='BasicInfo'>
                  <BasicInfo></BasicInfo>
                </view>

              </view>

              {/* bottom */}
              <view className='ScrollBottom'>
                <text>已经到底了~</text>
              </view>

            </view>
          </ScrollView>
        </view>
      </view>

      <view className='PageBottom'>
        <DetailBottom></DetailBottom>
      </view>

    </view>
  )
})
