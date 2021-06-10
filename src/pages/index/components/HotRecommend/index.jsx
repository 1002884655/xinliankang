import React, { useState, useEffect } from 'react'
import './index.scss'
import '../../../../assets/css/iconfont.css'

export default function HotRecommend (props) {
  const [MenuList] = useState([{ name: '热门活动', id: 1 }, { name: '热门团房', id: 2 }])
  const [CurrentId, setCurrentId] = useState(1)
  const [CurrentContentInfo, setCurrentContentInfo] = useState({ name: '#大运河孔雀城时代', desc: '5月30日六一儿童节表演赛案场展开！' })

  const CutMenu = (id) => {
    return () => {
      setCurrentId(id)
    }
  }

  return (
    <view className='components HotRecommend'>
      <view>
        <view className='Menu flex-h'>
          {
            MenuList.map((item, index) => (
              <view onClick={CutMenu(item.id)} className={CurrentId === item.id ? 'active flex-item' : 'flex-item'} key={`Menu-${index}`}>{item.name}</view>
            ))
          }
        </view>
        <view className='Content'>
          <view className='flex-h'>
            <text className='flex-item'>{CurrentContentInfo.name}</text>
            <text>{CurrentId === 1 ? '更多活动' : '更多团房'}</text>
          </view>
          <text>{CurrentContentInfo.desc}</text>
        </view>
      </view>
    </view>
  )
}
