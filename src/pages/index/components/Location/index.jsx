import React, { useState, useEffect } from 'react'
import './index.scss'
import '../../../../assets/css/iconfont.css'
import Taro from '@tarojs/taro'

export default function Location (props) {

  const ToLocation = () => {
    Taro.navigateTo({ url: `/pages/index/location/index` })
  }

  const ToSearch = () => {
    Taro.navigateTo({ url: `/pages/index/buildingSearch/index` })
  }

  return (
    <view className='components Location flex-h'>
      <text className='iconfont icon-dingwei' onClick={ToLocation}></text>
      <text onClick={ToLocation}>南京市</text>
      <text className='iconfont icon-jiantoudown' onClick={ToLocation}></text>
      <view className='flex-item'>
        <text className='iconfont icon-sousuo' onClick={ToSearch}></text>
        <text onClick={ToSearch}>输入你想查询的楼盘</text>
      </view>
    </view>
  )
}
