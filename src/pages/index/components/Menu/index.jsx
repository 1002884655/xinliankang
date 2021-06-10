import React, { useState, useEffect } from 'react'
import './index.scss'
import { Swiper, SwiperItem, Image } from '@tarojs/components'

export default function Menu (props) {
  const { List = [] } = props
  let Arr = []
  List.map((item) => {
    if (Arr.length) {
      if (Arr[Arr.length - 1].length < 10) {
        Arr[Arr.length - 1].push({ ...item })
      } else {
        Arr.push([{ ...item }])
      }
    } else {
      Arr.push([{ ...item }])
    }
  })
  const [MenuList, setMenuList] = useState(Arr)

  return (
    <view className='components Menu'>
      <view>
        <view>
          <Swiper autoplay={false} indicator-dots={true}>
            {
              MenuList.map((item, index) => (
                <SwiperItem key={`Banner-${index}`}>
                  <view className="swiper-item">
                    {
                      item.map((subItem, subIndex) => (
                        <view key={`BannerItem-${subIndex}`}>
                          <Image mode='heightFix' src={subItem.icon || null} />
                          <text>{subItem.name}</text>
                        </view>
                      ))
                    }
                  </view>
                </SwiperItem>
              ))
            }
          </Swiper>
        </view>
      </view>
    </view>
  )
}
