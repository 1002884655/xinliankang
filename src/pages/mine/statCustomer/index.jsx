import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import '../../../assets/css/iconfont.css'
import TransactedCustomer from '../components/TransactedCustomer/index'
import FollowCustomer from '../components/FollowCustomer/index'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
  const [MenuList] = useState([
    { name: '跟进客户', id: 1 },
    { name: '成交客户', id: 2 }
  ])
  const [CurrentMenuId, setCurrentMenuId] = useState(1)

  const CutMenu = (item) => {
    return () => {
      setCurrentMenuId(item.id)
    }
  }

  return (
    <view className='Page statCustomer flex-v'>

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
          {
            CurrentMenuId === 1 &&
            <FollowCustomer></FollowCustomer>
          }
          {
            CurrentMenuId === 2 &&
            <TransactedCustomer></TransactedCustomer>
          }
        </view>
      </view>

    </view>
  )
})
