import React, { useState, useEffect } from 'react'
import './index.scss'
import Taro from '@tarojs/taro'

export default function MyActivityListItem (props) {
  const { Data = {} } = props
  return (
    <view className='components MyActivityListItem' onClick={() => { Taro.navigateTo({ url: `/pages/index/activityDetail/index?id=${Data.id}` }) }}>
      <view className='Img'>
        {
          Data.img &&
          <Image mode='aspectFill' className='centerLabel' src={Data.img || null} />
        }
      </view>
      <view className='Info'>
        <text className='Name'>5D沉浸式剧场</text>
        <text className='Address'>江宁禄口云熙99路号（诚信大道）</text>
        <text className='Time'>活动时间：2019/10/20 10:00 - 2019/10/22 10:00</text>
      </view>
    </view>
  )
}
