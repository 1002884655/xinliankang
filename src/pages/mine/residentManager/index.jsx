import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView, Image } from '@tarojs/components'
import '../../../assets/css/iconfont.css'
import ResidentListItem from '../components/ResidentListItem/index'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
  const [PageList, setPageList] = useState(['', '', '', '', '', '', '', '', '', '', '', '', ''])
  const [IsPull, setPull] = useState(false)
  const [PullTimer, setPullTimer] = useState(null)
  const [FilterMenu] = useState([
    { name: '报备', id: 1 },
    { name: '到访', id: 2 },
    { name: '认筹', id: 3 },
    { name: '认购', id: 4 },
    { name: '签约', id: 5 },
    { name: '报备无效', id: 6 },
    { name: '报备过期', id: 7 }
  ])
  const [CurrentFilterMenuId, setCurrentFilterMenuId] = useState(null)

  const PageRefresh = () => { // 页面下拉刷新回调
    setPull(true)
  }

  const CutFilter = (item) => {
    return () => {
      setCurrentFilterMenuId(item.id === CurrentFilterMenuId ? null : item.id)
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
    <view className='Page residentManager flex-v'>

      <view className='Search'>
        <view>
          <text className='iconfont icon-sousuo'></text>
          <text>请输入关键字搜索</text>
        </view>
      </view>

      <view className='flex-item'>
        <view>
          <ScrollView scroll-y={true} refresher-enabled={true} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#fff'>
            <view className='PageContent'>

              <view className='Filter'>
                <text>筛选条件</text>
                <view>
                  {
                    FilterMenu.map((item, index) => (
                      <view key={`FilterItem-${index}`} onClick={CutFilter(item)}>
                        <text>{item.name}</text>
                        {
                          CurrentFilterMenuId === item.id &&
                          <Image mode='widthFix' src={require('../../../assets/findHouse-icon1.png')}></Image>
                        }
                      </view>
                    ))
                  }
                </view>
              </view>

              <view className='List'>
                {
                  PageList.map((item, index) => (
                    <ResidentListItem Data={item} key={`ResidentListItem-${index}`}></ResidentListItem>
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
