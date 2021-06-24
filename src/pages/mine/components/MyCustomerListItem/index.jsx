import React, { useState, useEffect } from 'react'
import './index.scss'
import Taro from '@tarojs/taro'

export default function MyCustomerListItem (props) {
  const { Data = {} } = props
  return (
    <view className='components MyCustomerListItem flex-h' onClick={() => { Taro.navigateTo({ url: `/pages/mine/myCustomerDetail/index?id=${Data.id}` }) }}>
      <view className='Img'>
        {
          Data.img &&
          <Image mode='aspectFill' className='centerLabel' src={Data.img || null} />
        }
      </view>
      <view className='flex-item'>
        <view className='Name flex-h'>
          <text className='flex-item'>徐慧慧</text>
          <text>11/11 15:12:58收回</text>
        </view>
        <view className='Time flex-h'>
          <text className='flex-item'>136 **** 9434</text>
          <text>跟进状态</text>
        </view>
      </view>
    </view>
  )
}
