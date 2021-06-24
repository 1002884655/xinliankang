import React, { useState, useEffect } from 'react'
import './index.scss'
import Taro from '@tarojs/taro'

export default function MyCourseListItem (props) {
  const { Data = {} } = props
  return (
    <view className='components MyCourseListItem flex-h' onClick={() => {Taro.navigateTo({ url: `/pages/index/buildingDetail/index?id=${Data.id}` })}}>
      <view className='Img'>
        <view>
          {
            Data.img &&
            <Image mode='aspectFill' className='centerLabel' src={Data.img || null} />
          }
        </view>
      </view>
      <view className='flex-item'>
        <view className='Name flex-h'>
          <view className='flex-item'>
            <text>课程名称</text>
          </view>
        </view>
        <text className='Address'>课程描述...</text>
        <view className='ShareInfo'>
          <view className='Users'>
            <view></view>
            <view></view>
            <view></view>
          </view>
          <text>...9人查看</text>
        </view>
      </view>
    </view>
  )
}
