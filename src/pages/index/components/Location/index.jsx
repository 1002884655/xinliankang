import React, { useState, useEffect } from 'react'
import './index.scss'
import '../../../../assets/css/iconfont.css'

export default function Location (props) {
  return (
    <view className='components Location flex-h'>
      <text className='iconfont icon-dingwei'></text>
      <text>南京市</text>
      <text className='iconfont icon-jiantoudown'></text>
      <view className='flex-item'>
        <text className='iconfont icon-sousuo'></text>
        <text>输入你想查询的楼盘</text>
      </view>
    </view>
  )
}
