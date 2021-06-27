import React, { useState, useEffect } from 'react'
import './index.scss'
import Taro from '@tarojs/taro'
import { Image } from '@tarojs/components'

export default function StatCustomerListItem (props) {
  const { data = {}, showStatus = false } = props
  return (
    <view className='components StatCustomerListItem flex-h'>
      <view className='Icon'>
        <Image mode='scaleToFill' src={null}></Image>
      </view>
      <view className='flex-item'>
        <view>
          <text>范丞丞</text>
          <text className='iconfont icon-yonghu'></text>
        </view>
        <text>136 1394 9434</text>
      </view>
      <text className='iconfont icon-liaotian'></text>
      <text className='iconfont icon-dianhua active'></text>
      {
        showStatus &&
        <text className='Status'>报备</text>
      }
    </view>
  )
}
