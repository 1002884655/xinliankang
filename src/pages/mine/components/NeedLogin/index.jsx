import React, { useState, useEffect } from 'react'
import './index.scss'
import { Image } from '@tarojs/components'
import '../../../../assets/css/iconfont.css'

export default function Banner (props) {
  return (
    <view className='components NeedLogin flex-v'>
      <view className='Logo'>
        <Image mode='aspectFit' className='centerLabel' src={require('../../../../assets/logo.png')} />
      </view>
      <view className='LoginBtn'>
        <text>微信登录</text>
      </view>
      <view className='flex-item'></view>
      <view className='Bottom'>
        <view>
          <view>
            <text className='iconfont icon-shengming'></text>
            <text>免责声明</text>
          </view>
          <view>
            <text>以上价格仅供参考,具体一房一价的信息以售楼处展示为准。房屋位置交通、医疗、教育、商业等配套信息，来源于第三方不作为要约,仅供参考,双方具体权利义务应以法律规定及买卖合同约定为准。本平台对项目周边文化教育的介绍旨在提供相关信息1 意味着信息发布方对就学安排作出承诺。相关教育资首页信息存在调整的可能,应以政府教育主管部门门及办学颁布的政策规定为准。详情请仔细阅读</text>
            <text className='active'>《新联家使用免责条款》</text>
          </view>
        </view>
      </view>
    </view>
  )
}
