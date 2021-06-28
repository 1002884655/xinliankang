import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import '../../../assets/css/iconfont.css'
import { Image } from '@tarojs/components'
import UserDetailBasicInfo from '../components/UserDetailBasicInfo/index'
import UserDetailViewRecord from '../components/UserDetailViewRecord/index'
import UserDetailActivityInfo from '../components/UserDetailActivityInfo/index'
import UserDetailFollowRecord from '../components/UserDetailFollowRecord/index'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
  const [MenuList] = useState([
    { name: '基本信息', id: 1 },
    { name: '访问记录', id: 2 },
    { name: '活动信息', id: 3 },
    { name: '跟进记录', id: 4 }
  ])
  const [CurrentMenuId, setCurrentMenuId] = useState(1)

  const CutMenu = (item) => {
    return () => {
      setCurrentMenuId(item.id)
    }
  }

  return (
    <view className='Page customerDetail flex-v'>

      <view className='UserInfo'>
        <view>
          <view>
            <view className='centerLabel'>
              <view className='flex-h'>
                <view className='Icon'>
                  <Image mode='aspectFill' src={null}></Image>
                </view>
                <view className='flex-item'>
                  <view>
                    <text>徐慧慧</text>
                    <text className='iconfont icon-nvxing'></text>
                  </view>
                  <text>136 1394 9434</text>
                </view>
                <text className='iconfont icon-liaotian'></text>
                <text className='iconfont icon-dianhua'></text>
              </view>
            </view>
            <text className='Status'>已到访</text>
            <text className='Tips'>NEW</text>
            <text className='Tips'>NEW</text>
          </view>
        </view>
      </view>

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

          {/* 基本信息 */}
          {
            CurrentMenuId === 1 &&
            <UserDetailBasicInfo></UserDetailBasicInfo>
          }

          {/* 访问记录 */}
          {
            CurrentMenuId === 2 &&
            <UserDetailViewRecord></UserDetailViewRecord>
          }

          {/* 活动信息 */}
          {
            CurrentMenuId === 3 &&
            <UserDetailActivityInfo></UserDetailActivityInfo>
          }

          {/* 跟进记录 */}
          {
            CurrentMenuId === 4 &&
            <UserDetailFollowRecord></UserDetailFollowRecord>
          }
        </view>
      </view>

    </view>
  )
})
