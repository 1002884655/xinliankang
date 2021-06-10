import React, { useState, useEffect } from 'react'
import './index.scss'

export default function ColumnTitle (props) {
  const { Icon = '', Name = '', ShowMore = false, ToMore = () => { }, children } = props
  return (
    <view className='components ColumnTitle flex-h'>
      <text className={`iconfont ${Icon}`}></text>
      <text className='Name'>{Name}</text>
      {
        children
      }
      <view className='flex-item'></view>
      {
        ShowMore &&
        <view className='More' onClick={ToMore}>
          <text>更多</text>
          <text className='iconfont icon-jiantouright'></text>
        </view>
      }
    </view>
  )
}
