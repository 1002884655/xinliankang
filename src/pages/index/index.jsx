import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import Location from './components/Location/index'
import Banner from './components/Banner/index'
import Menu from './components/Menu/index'
import HotRecommend from './components/HotRecommend/index'
import LiveSale from './components/LiveSale/index'
import ColumnTitle from './components/ColumnTitle/index'
import ProjectListItem from '../../components/ProjectListItem/index'
import { ScrollView } from '@tarojs/components'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
  const [BannerList, setBannerList] = useState(['', '', ''])
  const [ProjectList, setProjectList] = useState(['', '', ''])
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
    <view className='Page Index'>

      <ScrollView scroll-y={true} refresher-enabled={true} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#fff'>
        <view className='PageContent'>

          {/* 定位 */}
          <view className="Location">
            <Location></Location>
          </view>

          {/* banner */}
          <view className='Banner'>
            <view>
              <view>
                <Banner List={BannerList}></Banner>
              </view>
            </view>
          </view>

          {/* 菜单 */}
          <view className='Menu'>
            <Menu></Menu>
          </view>

          {/* 热门推荐 */}
          <view className='HotRecommend'>
            <ColumnTitle Name='热门推荐' Icon="icon-shoucang"></ColumnTitle>
            <HotRecommend></HotRecommend>
          </view>

          {/* 直播购房 */}
          <view className='LiveSale'>
            <ColumnTitle Name='直播购房' Icon="icon-yinpin" ShowMore={true}></ColumnTitle>
            <LiveSale></LiveSale>
          </view>

          {/* 全部项目 */}
          <view className='AllProject'>
            <ColumnTitle Name='全部项目' Icon="icon-aixin" ShowMore={true}></ColumnTitle>
            <view className='ProjectList'>
              {
                ProjectList.map((item, index) => (
                  <ProjectListItem Data={item} key={`ProjectListItem-${index}`}></ProjectListItem>
                ))
              }
            </view>
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
