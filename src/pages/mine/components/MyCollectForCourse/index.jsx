import React, { useState, useEffect } from 'react'
import './index.scss'
import { ScrollView } from '@tarojs/components'
import MyCourseListItem from '../../components/MyCourseListItem/index'

export default function MyCollectForCourse (props) {
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
    <view className='components MyCollectForCourse'>
      <ScrollView scroll-y={true} refresher-enabled={true} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#fff'>
        <view className='PageContent'>
          <view className='List'>
            {
              PageList.map((item, index) => (
                <MyCourseListItem Data={item} key={`MyCourseListItem-${index}`}></MyCourseListItem>
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
}
