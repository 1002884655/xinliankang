import React, { useState, useEffect } from 'react'
import './index.scss'
import { Image } from '@tarojs/components'

export default function DetailBottom (props) {
  const { Data = {} } = props
  return (
    <view className='components DetailBottom flex-h'>
      <view className='Item'>
        <Image mode="heightFix" src={require('../../../../../assets/buildingDetail-icon3.png')}></Image>
        <text>一键海报</text>
      </view>
      <view className='Item'>
        <Image mode="heightFix" src={require('../../../../../assets/buildingDetail-icon1.png')}></Image>
        <text>一键带看</text>
      </view>
      <view className='Item'>
        <Image mode="heightFix" src={require('../../../../../assets/buildingDetail-icon2.png')}></Image>
        <text>一键推荐</text>
      </view>
      <view className='flex-item'></view>
      <view className='Btn'>
        <text>一键咨询</text>
        <text className='active'>一键电话</text>
      </view>
    </view>
  )
}
