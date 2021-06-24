import React, { useState, useEffect } from 'react'
import './index.scss'
import { Image } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default function ActivityListItem (props) {
  const { Data = {} } = props
  return (
    <view className='components ActivityListItem' onClick={() => { Taro.navigateTo({ url: `/pages/index/newsDetail/index?id=${Data.id}` }) }}>
      <view className='Img'>
        <Image mode='aspectFill' src={null} className='centerLabel'></Image>
      </view>
      <view className='Info'>
        <view className='Name flex-h'>
          <view className='flex-item'>
            <text>5D沉浸式剧场</text>
          </view>
          <text className='yellow'>立即参与</text>
        </view>
        <view className='Time'>
          <text>活动时间：2019/10/20 10:00 - 2019/10/22 10:00</text>
        </view>
      </view>
    </view>
  )
}
