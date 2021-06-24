import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView, Image } from '@tarojs/components'
import '../../../assets/css/iconfont.css'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
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
    <view className='Page myCustomerDetail'>

      <ScrollView scroll-y={true} refresher-enabled={true} refresher-triggered={IsPull} onrefresherrefresh={PageRefresh} refresher-background='#f8f8f8'>
        <view className='PageContent'>

          {/* 基本信息 */}
          <view className='BasicInfo'>
            <view className='Title flex-h'>
              <text>基本信息</text>
            </view>
            <view className='Content'>
              <view className='UserInfo flex-h'>
                <view className='Icon'>
                  <Image mode='aspectFill' src={null}></Image>
                </view>
                <view className='flex-item'>
                  <text>范丞丞</text>
                  <text>136 1394 9434</text>
                </view>
                <text className='iconfont icon-jiantouright'></text>
              </view>
              <view className='Status'>
                <view className='flex-h'>
                  <view className='flex-item'>
                    <text>对楼盘意向值:</text>
                    <text>xxxxxxxxxxx</text>
                  </view>
                </view>
                <view className='flex-h'>
                  <view className='flex-item'>
                    <text>跟进状态:</text>
                    <text>跟进中</text>
                  </view>
                  <view className='flex-item'>
                    <text>报备状态:</text>
                    <text>报备中</text>
                  </view>
                </view>
                <view className='flex-h'>
                  <view className='flex-item'>
                    <text>跟进结果:</text>
                    <text>已跟进</text>
                  </view>
                  <view className='flex-item'>
                    <text>报备结果:</text>
                    <text>已报备</text>
                  </view>
                </view>
                <view className='flex-h'>
                  <view className='flex-item'>
                    <text>预计收回时间:</text>
                    <text>2020-06-12-12:00</text>
                  </view>
                </view>
              </view>
            </view>
          </view>

          {/* 房源订单 */}
          <view className='Order'>
            <view className='Title flex-h'>
              <text>房源订单</text>
            </view>
            <view className='Content'>
              <view>
                <view className='flex-h'>
                  <view className='flex-item'>
                    <text>120万(户型名称)</text>
                  </view>
                  <Image mode='heightFix' src={require('../../../assets/mine-icon25.png')}></Image>
                  <text className='active'>签约</text>
                  <text className='iconfont icon-jiantouright'></text>
                </view>
                <view className='Info'>
                  <text>建筑面积:117㎡</text>
                  <text>总价:X/单价:XXX</text>
                  <text>套内面积:X</text>
                </view>
              </view>
              <view>
                <view className='flex-h'>
                  <view className='flex-item'>
                    <text>120万(户型名称)</text>
                  </view>
                  <Image mode='heightFix' src={require('../../../assets/mine-icon24.png')}></Image>
                  <text className='active'>到访</text>
                  <text className='iconfont icon-jiantouright'></text>
                </view>
                <view className='Info'>
                  <text>建筑面积:117㎡</text>
                  <text>总价:X/单价:XXX</text>
                  <text>套内面积:X</text>
                </view>
              </view>
            </view>
          </view>

          {/* 操作人员 */}
          <view className='OptUser'>
            <view className='Title flex-h'>
              <text>操作人员</text>
              <view className='flex-item'></view>
              <view className='More'>
                <text>更多</text>
                <text className='iconfont icon-jiantouright'></text>
              </view>
            </view>
            <view className='Content'>
              <view className='UserInfo flex-h'>
                <view className='Icon'>
                  <Image mode='aspectFill' src={null}></Image>
                </view>
                <view className='flex-item'>
                  <text>最后跟进人</text>
                  <text>跟进时间</text>
                </view>
              </view>
            </view>
          </view>

          {/* 跟进记录 */}
          <view className='Record'>
            <view className='Title flex-h'>
              <text>跟进记录</text>
              <view className='Edit'>
                <Image mode='heightFix' src={require('../../../assets/mine-icon26.png')}></Image>
                <text>修改</text>
              </view>
              <view className='flex-item'></view>
              <view className='More'>
                <text>更多</text>
                <text className='iconfont icon-jiantouright'></text>
              </view>
            </view>
            <view className='Content'>
              {
                ['', '', ''].map((item, index) => (
                  <view key={`Item-${index}`}>
                    <view className='flex-h'>
                      <text>范丞丞</text>
                      <view className='flex-item'></view>
                      <text>2021-05-21 12:00</text>
                    </view>
                    <view className='Desc'>
                      <text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </text>
                    </view>
                  </view>
                ))
              }
            </view>
          </view>

        </view>
      </ScrollView>

    </view>
  )
})
