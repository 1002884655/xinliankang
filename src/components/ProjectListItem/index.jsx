import React, { useState, useEffect } from 'react'
import './index.scss'

export default function ProjectListItem (props) {
  const { Data = {} } = props
  return (
    <view className='components ProjectListItem flex-h'>
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
            <text>楼盘名称</text>
          </view>
          <text>约</text>
          <text>20000m²</text>
        </view>
        <text className='Address'>楼盘地址sdsdsdsdsds</text>
        <view className='Tags'>
          <text>标签1</text>
          <text>标签2</text>
          <text>标签3</text>
        </view>
        <view className='ShareInfo'>
          {/* <text className='iconfont'></text> */}
          <text>3次分享</text>
          <view className='Users'>
            <view></view>
            <view></view>
            <view></view>
          </view>
          <text>...9人围观</text>
        </view>
      </view>
    </view>
  )
}
