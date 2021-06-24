import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView, Image, Input } from '@tarojs/components'
import '../../../assets/css/iconfont.css'
import BuyHouse from './components/BuyHouse/index'
import RentingHouse from './components/RentingHouse/index'
import HousePurchasing from './components/HousePurchasing/index'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
  const [DemandList] = useState([
    { name: '我要买房', id: 1, icon: '', spell: 'MAI FANG' },
    { name: '我要租房', id: 2, icon: '', spell: 'ZU FANG' },
    { name: '海外置业', id: 3, icon: '', spell: 'ZHI YE' }
  ])
  const [CurrentDemandId, setCurrentDemandId] = useState(2)
  const [ShowDemand, setShowDemand] = useState(true)

  const CutDemandId = (id) => {
    return () => {
      setCurrentDemandId(id)
    }
  }

  const StepChange = (id) => {
    setShowDemand(id === 1)
  }

  return (
    <view className='Page helpToFindHouse'>

      <ScrollView scroll-y={true} refresher-enabled={false}>
        <view className='PageContent'>

          {
            ShowDemand &&
            <view>
              <text>选择您的需求</text>
              <view className='Demand flex-h'>
                {
                  DemandList.map((item, index) => (
                    <view key={`DemandItem-${index}`} className={CurrentDemandId === item.id ? 'flex-item active' : 'flex-item'} onClick={CutDemandId(item.id)}>
                      <Image mode='heightFix' src={item.icon || null}></Image>
                      <text>{item.name}</text>
                      <text>{item.spell}</text>
                    </view>
                  ))
                }
              </view>
            </view>
          }

          {/* 买房 */}
          {
            CurrentDemandId === 1 &&
            <BuyHouse change={StepChange}></BuyHouse>
          }

          {/* 租房 */}
          {
            CurrentDemandId === 2 &&
            <RentingHouse></RentingHouse>
          }

          {/* 置业 */}
          {
            CurrentDemandId === 3 &&
            <HousePurchasing></HousePurchasing>
          }

        </view>
      </ScrollView>

    </view>
  )
})
