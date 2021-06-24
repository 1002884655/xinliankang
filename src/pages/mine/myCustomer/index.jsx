import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView } from '@tarojs/components'
import '../../../assets/css/iconfont.css'
import MyCustomerListItem from '../components/MyCustomerListItem/index'

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
    <view className='Page myCustomer flex-v'>

      <view className='Filter'>
        <view className='flex-h'>
          <view className='Time'>
            <text>全部时间</text>
            <text className='iconfont icon-sanjiaoxingdown'></text>
          </view>
          <view className='Type'>
            <text>全部类型</text>
            <text className='iconfont icon-sanjiaoxingdown'></text>
          </view>
          <view className='flex-item'></view>
          <text className='iconfont icon-sousuo'></text>
        </view>
      </view>

      <view className='flex-item'>
        <view>

          <ScrollView scroll-y={true} refresher-enabled={true} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#fff'>
            <view className='PageContent'>
              <view className='List'>
                {
                  PageList.map((item, index) => (
                    <view>
                      <MyCustomerListItem Data={item} key={`MyCustomerListItem-${index}`}></MyCustomerListItem>
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
      </view>

    </view>
  )
})
