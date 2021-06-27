import React, { useState, useEffect } from 'react'
import './index.scss'
import Taro from '@tarojs/taro'
import { Image } from '@tarojs/components'

export default function ResidentListItem (props) {
  const { Data = {} } = props
  return (
    <view className='components ResidentListItem'>
      <view className='flex-h'>
        <text>最新报备：</text>
        <view className='flex-item'>
          <text>1710300417793</text>
        </view>
        <text className='Status'>到访确认</text>
      </view>
      <view className='flex-h'>
        <text>客户姓名：</text>
        <view className='flex-item'>
          <text>栋</text>
        </view>
      </view>
      <view className='flex-h'>
        <text>手机号码：</text>
        <view className='flex-item'>
          <text>136****9434</text>
        </view>
        <Image mode='heightFix' src={require('../../../../assets/mine-icon27.png')}></Image>
        <text className='Type'>结佣</text>
      </view>
      <view className='flex-h'>
        <text>报备经纪：</text>
        <view className='flex-item'>
          <text>成凤  15005184629</text>
        </view>
      </view>
      <view className='flex-h'>
        <text>报备时间：</text>
        <view className='flex-item'>
          <text>2017/10/30 15:25</text>
        </view>
      </view>
      <view className='Opt'>
        <text className='active' onClick={() => { Taro.navigateTo({ url: `/pages/mine/changeVisit/index?id=${Data.id}` }) }}>更新交易</text>
        <text>无效</text>
      </view>
    </view>
  )
}
