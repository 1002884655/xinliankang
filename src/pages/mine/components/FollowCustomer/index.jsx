import React, { useState, useEffect } from 'react'
import './index.scss'
import Taro from '@tarojs/taro'
import { ScrollView, Image } from '@tarojs/components'
import StatCustomerListItem from '../StatCustomerListItem/index'

export default function FollowCustomer (props) {
  const { Data = {} } = props
  const [PageList, setPageList] = useState(['', '', '', '', '', '', '', '', '', '', '', '', ''])
  const [IsPull, setPull] = useState(false)
  const [PullTimer, setPullTimer] = useState(null)

  const [StatusMenu] = useState([
    { name: '全部状态', id: 1 },
    { name: '到访', id: 2 },
    { name: '签约', id: 3 },
    { name: '认筹', id: 4 }
  ])
  const [CurrentStatusId, setCurrentStatusId] = useState(1)

  const [TimeMenu] = useState([
    { name: '全部', id: 1 },
    { name: '7天未成交', id: 2 },
    { name: '15天未成交', id: 3 }
  ])
  const [CurrentTimeId, setCurrentTimeId] = useState(1)

  const PageRefresh = () => { // 页面下拉刷新回调
    setPull(true)
  }

  const CutStatus = (item) => {
    return () => {
      setCurrentStatusId(item.id === CurrentStatusId ? null : item.id)
    }
  }

  const CutTime = (item) => {
    return () => {
      setCurrentTimeId(item.id === CurrentTimeId ? null : item.id)
    }
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
    <view className='components FollowCustomer'>
      <ScrollView scroll-y={true} refresher-enabled={true} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#fff'>
        <view className='PageContent'>

          <view className='Search'>
            <view>
              <text className='iconfont icon-sousuo'></text>
              <text>请输入用户名/手机号/到访时间搜索</text>
            </view>
          </view>

          <text>状态筛选</text>
          <view className='CheckBoxList'>
            {
              StatusMenu.map((item, index) => (
                <view key={`StatusItem-${index}`} onClick={CutStatus(item)}>
                  <text>{item.name}</text>
                  {
                    CurrentStatusId === item.id &&
                    <Image mode='widthFix' src={require('../../../../assets/findHouse-icon1.png')}></Image>
                  }
                </view>
              ))
            }
          </view>

          <text>时间筛选</text>
          <view className='CheckBoxList'>
            {
              TimeMenu.map((item, index) => (
                <view key={`TimeItem-${index}`} onClick={CutTime(item)}>
                  <text>{item.name}</text>
                  {
                    CurrentTimeId === item.id &&
                    <Image mode='widthFix' src={require('../../../../assets/findHouse-icon1.png')}></Image>
                  }
                </view>
              ))
            }
          </view>

          <text>结果</text>
          <view className='List'>
            {
              PageList.map((item, index) => (
                <StatCustomerListItem key={`ListItem-${index}`} data={item} showStatus={true}></StatCustomerListItem>
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
