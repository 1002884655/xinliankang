import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView } from '@tarojs/components'
import '../../assets/css/iconfont.css'
import VideoListItem from './components/VideoListItem/index'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
  const [IsPull, setPull] = useState(false)
  const [CurrnetMenuId, setCurrnetMenuId] = useState(1)
  const [MenuList, setMenuList] = useState([
    { name: '全部', id: 1 },
    { name: '预告', id: 2 },
    { name: '直播中', id: 3 },
    { name: '新房推荐', id: 4 },
    { name: '视频', id: 5 }
  ])
  const [PullTimer, setPullTimer] = useState(null)
  const [PageList, setPageList] = useState(['', '', '', '', '', '', '', '', '', '', '', '', ''])

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

  const CutMenu = (id) => {
    return () => {
      if (id !== CurrnetMenuId) {
        setCurrnetMenuId(id)
      }
    }
  }

  return (
    <view className='Page Video flex-v'>

      <view className='Search'>
        <view>
          <text className='iconfont icon-sousuo'></text>
          <text>输入项目名称或直播标题</text>
        </view>
      </view>

      <view className='Menu'>
        <view className='flex-h'>
          {
            MenuList.map((item, index) => (
              <view key={`MenuItem-${index}`} className={CurrnetMenuId === item.id ? 'active' : ''}>
                <text onClick={CutMenu(item.id)}>{item.name}</text>
              </view>
            ))
          }
        </view>
      </view>

      <view className='flex-item'>
        <view>
          <ScrollView scroll-y={true} refresher-enabled={true} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#f8f8f8'>
            <view className='PageContent'>
              {
                PageList.map((item, index) => (
                  <view className='ListItem' key={`List-${index}`}>
                    <view>
                      <view>
                        <VideoListItem Data={item}></VideoListItem>
                      </view>
                    </view>
                  </view>
                ))
              }

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
