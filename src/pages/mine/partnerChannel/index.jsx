import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView, Image } from '@tarojs/components'
import '../../../assets/css/iconfont.css'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
  const [RankingList, setRankingList] = useState([
    { name: '范丞丞', id: '', icon: '', num: '5', department: '销售部' },
    { name: '范丞丞', id: '', icon: '', num: '6', department: '销售部' },
    { name: '范丞丞', id: '', icon: '', num: '3', department: '销售部' }
  ])
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
    <view className='Page partnerChannel'>
      <ScrollView scroll-y={true} refresher-enabled={true} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#fff'>
        <view className='PageContent'>

          {/* 排行榜 */}
          <view className='Ranking'>
            <view className='Top flex-h'>
              <text className='flex-item'>龙虎榜</text>
              <Image mode='heightFix' src={require('../../../assets/mine-icon23.png')}></Image>
            </view>
            <view className='List flex-h'>
              {
                RankingList.map((item, index) => (
                  <view className={index === 1 ? 'flex-item active' : 'flex-item'} key={`ListItem-${index}`}>
                    {
                      index === 0 &&
                      <Image mode='heightFix' src={require('../../../assets/mine-icon21.png')}></Image>
                    }
                    {
                      index === 1 &&
                      <Image mode='heightFix' src={require('../../../assets/mine-icon20.png')}></Image>
                    }
                    {
                      index === 2 &&
                      <Image mode='heightFix' src={require('../../../assets/mine-icon22.png')}></Image>
                    }
                    <view className='Icon'>
                      <Image mode='aspectFill' src={item.icon || null}></Image>
                    </view>
                    <view className='Index'>
                      <text>{item.name}</text>
                      <text>{index === 0 ? 2 : index === 1 ? 1 : 3}</text>
                    </view>
                    <view className='Num'>
                      <text>{item.department}</text>
                      <text>{item.num}</text>
                    </view>
                  </view>
                ))
              }
            </view>
          </view>

          {/* 销售简报 */}
          <view className='SaleNews'>
            <view className='Top flex-h'>
              <text>销售简报</text>
              <Image mode='heightFix' src={require('../../../assets/mine-icon23.png')}></Image>
              <view className='flex-item'></view>
              <text>更多</text>
              <text className='iconfont icon-jiantouright'></text>
            </view>
            <view className='List'>
              <view className='flex-h'>
                <text className='flex-item'>新增客户</text>
                <text>34人</text>
                <text className='iconfont icon-jiantouright'></text>
              </view>
              <view className='flex-h'>
                <text className='flex-item'>跟进客户</text>
                <text>34人</text>
                <text className='iconfont icon-jiantouright'></text>
              </view>
              <view className='flex-h'>
                <text className='flex-item'>成交客户</text>
                <text>34人</text>
                <text className='iconfont icon-jiantouright'></text>
              </view>
            </view>
          </view>

          {/* 销售趋势 */}
          <view className='SaleLineChart'>
            <view className='Top flex-h'>
              <text>销售趋势</text>
              <view className='flex-item'></view>
              <view className='Type'>
                <text>新增客户</text>
                <text className='iconfont icon-sanjiaoxingdown'></text>
              </view>
              <view className='Sort'>
                <text>按天</text>
                <text className='iconfont icon-sanjiaoxingdown'></text>
              </view>
            </view>
            <view className='LineChart'>
              
            </view>
          </view>

        </view>
      </ScrollView>
    </view>
  )
})
