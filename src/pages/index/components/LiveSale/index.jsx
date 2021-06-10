import React, { useState, useEffect } from 'react'
import './index.scss'
import '../../../../assets/css/iconfont.css'
import { ScrollView, Image } from '@tarojs/components'

export default function LiveSale (props) {
  const [MenuList] = useState([{ name: '全部', id: 1 }, { name: '预告', id: 2 }, { name: '直播中', id: 3 }, { name: '新房推荐', id: 4 }])
  const [CurrentId, setCurrentId] = useState(1)
  const [PageList, setPageList] = useState(['', '', '', '', '', '', '', ''])

  const CutMenu = (id) => {
    return () => {
      setCurrentId(id)
    }
  }

  return (
    <view className='components LiveSale'>
      <view>
        <view className='Menu'>
          {
            MenuList.map((item, index) => (
              <view onClick={CutMenu(item.id)} className={CurrentId === item.id ? 'active' : ''} key={`Menu-${index}`}>{item.name}</view>
            ))
          }
        </view>
        <view className='Content'>
          <ScrollView scroll-x={true}>
            {
              PageList.map((item, index) => (
                <view className='ListItem' key={`List-${index}`}>
                  <Image mode='aspectFill' className='centerLabel' src={null} />
                </view>
              ))
            }
          </ScrollView>
        </view>
      </view>
    </view>
  )
}
