import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView } from '@tarojs/components'
import '../../../assets/css/iconfont.css'
import ProjectListItem from '../../../components/ProjectListItem/index'

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
    <view className='Page buildingList flex-v'>

      <view className='Search'>
        <view>
          <text className='iconfont icon-sousuo'></text>
          <text>输入项目名称或直播标题</text>
        </view>
      </view>

      <view className='Filter'>
        <view className='flex-h'>
          <view className='flex-item'>
            <text>区域</text>
            <text className='iconfont icon-sanjiaoxingdown'></text>
          </view>
          <view className='flex-item'>
            <text>价格</text>
            <text className='iconfont icon-sanjiaoxingdown'></text>
          </view>
          <view className='flex-item'>
            <text>户型</text>
            <text className='iconfont icon-sanjiaoxingdown'></text>
          </view>
          <view className='flex-item'>
            <text>更多</text>
            <text className='iconfont icon-sanjiaoxingdown'></text>
          </view>
          <text className='iconfont icon-paixu Sort'></text>
        </view>
      </view>

      <view className='flex-item'>
        <view>
          <ScrollView scroll-y={true} refresher-enabled={true} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#fff'>
            <view className='PageContent'>
              <view className='ProjectList'>
                {
                  PageList.map((item, index) => (
                    <ProjectListItem Data={item} key={`ProjectListItem-${index}`}></ProjectListItem>
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
