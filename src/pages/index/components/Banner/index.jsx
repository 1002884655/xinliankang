import React, { useState, useEffect } from 'react'
import './index.scss'
import { Swiper, SwiperItem, Image } from '@tarojs/components'

export default function Banner (props) {
  const { List = [] } = props
  return (
    <view className='components Banner'>
      <Swiper autoplay={true} interval={2000} indicator-dots={true}>
        {
          List.map((item, index) => (
            <SwiperItem key={`Banner-${index}`}>
              <view className="swiper-item">
                {
                  item.img &&
                  <Image mode='aspectFill' className='centerLabel' src={item.img || null} />
                }
              </view>
            </SwiperItem>
          ))
        }
      </Swiper>
    </view>
  )
}
