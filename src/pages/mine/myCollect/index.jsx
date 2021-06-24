import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import '../../../assets/css/iconfont.css'
import MyCollectForBuilding from '../components/MyCollectForBuilding/index'
import MyCollectForNews from '../components/MyCollectForNews/index'
import MyCollectForActivity from '../components/MyCollectForActivity/index'
import MyCollectForCourse from '../components/MyCollectForCourse/index'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
  const [MenuList] = useState([
    { name: '项目', id: 1 },
    { name: '资讯', id: 2 },
    { name: '活动', id: 3 },
    { name: '课程', id: 4 }
  ])
  const [CurrentMenuId, setCurrentMenuId] = useState(1)

  const CutMenu = (id) => {
    return () => {
      if (id !== CurrentMenuId) {
        setCurrentMenuId(id)
      }
    }
  }

  return (
    <view className='Page MyCollect flex-v'>
      <view className='Menu'>
        <view className='flex-h'>
          {
            MenuList.map((item, index) => (
              <view className={item.id === CurrentMenuId ? 'flex-item active' : 'flex-item'} key={`MenuItem-${index}`} onClick={CutMenu(item.id)}>
                <text>{item.name}</text>
              </view>
            ))
          }
        </view>
      </view>
      <view className='flex-item'>
        <view>

          {/* 项目 */}
          {
            CurrentMenuId === 1 &&
            <MyCollectForBuilding></MyCollectForBuilding>
          }

          {/* 资讯 */}
          {
            CurrentMenuId === 2 &&
            <MyCollectForNews></MyCollectForNews>
          }

          {/* 活动 */}
          {
            CurrentMenuId === 3 &&
            <MyCollectForActivity></MyCollectForActivity>
          }

          {/* 课程 */}
          {
            CurrentMenuId === 4 &&
            <MyCollectForCourse></MyCollectForCourse>
          }
          
        </view>
      </view>
    </view>
  )
})
