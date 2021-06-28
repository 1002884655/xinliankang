import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import '../../../assets/css/iconfont.css'
import { ScrollView } from '@tarojs/components'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
  const [MenuList] = useState([
    { name: '新增客户', id: 1 },
    { name: '跟进客户', id: 2 },
    { name: '到访客户', id: 3 }
  ])
  const [CurrentMenuId, setCurrentMenuId] = useState(1)

  const [ChartMenuList] = useState([
    { name: '日', id: 1 },
    { name: '月', id: 2 }
  ])
  const [CurrentChartMenuId, setCurrentChartMenuId] = useState(1)

  const [SexList, setSexList] = useState([
    { name: '男', per: 0.6 },
    { name: '女', per: 0.3 },
    { name: '未知', per: 0.1 }
  ])

  const CutMenu = (item) => {
    return () => {
      setCurrentMenuId(item.id)
    }
  }

  const CutChartMenu = (item) => {
    return () => {
      setCurrentChartMenuId(item.id)
    }
  }

  return (
    <view className='Page customerAnalyse flex-v'>

      <view className='MenuList'>
        <view>
          {
            MenuList.map((item, index) => (
              <text key={`MenuItem-${index}`} className={CurrentMenuId === item.id ? 'active' : ''} onClick={CutMenu(item)}>{item.name}</text>
            ))
          }
        </view>
      </view>

      <view className='flex-item'>
        <view>
          <ScrollView scroll-y={true} refresher-enabled={false}>
            <view className='PageContent'>

              {/* 图表 */}
              <view className='Chart'>
                <view className='Menu'>
                  {
                    ChartMenuList.map((item, index) => (
                      <text key={`ChartMenuItem-${index}`} className={CurrentChartMenuId === item.id ? 'active' : ''} onClick={CutChartMenu(item)}>{item.name}</text>
                    ))
                  }
                </view>
                <view className='LineChart'>

                </view>
              </view>

              {/* 性别 */}
              <view className='Sex'>
                <text>性别</text>
                {
                  SexList.map((item, index) => (
                    <view className='flex-h' key={`SexItem-${index}`}>
                      <text>{item.name}</text>
                      <view className='flex-item'>
                        <view style={{width: `${Math.floor(item.per * 100)}%`}}></view>
                      </view>
                      <text>{Math.floor(item.per * 100)}%</text>
                    </view>
                  ))
                }
              </view>

            </view>
          </ScrollView>
        </view>
      </view>

    </view>
  )
})
