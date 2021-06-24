import React, { useState, useEffect } from 'react'
import './index.scss'
import { Image } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default function NewsListItem (props) {
  const { Data = {} } = props
  return (
    <view className='components NewsListItem flex-h' onClick={() => { Taro.navigateTo({ url: `/pages/index/newsDetail/index?id=${Data.id}` }) }}>
      <view className='Img'>
        <Image mode='aspectFill' src={null} className='centerLabel'></Image>
      </view>
      <view className='flex-item'>
        <text>破晓·内容生态下半场的版权之道2019企业版权</text>
        <text>于2019-12-12 14:20:30发布</text>
      </view>
    </view>
  )
}
