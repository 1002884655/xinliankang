import React, { useState, useEffect } from 'react'
import './index.scss'

export default function VideoListItem (props) {
  const { Data = {} } = props
  return (
    <view className='components VideoListItem'>
      <view className='Img'>
        <view>
          {
            Data.img &&
            <Image mode='aspectFill' className='centerLabel' src={Data.img || null} />
          }
        </view>
      </view>
      <view className='Title'>
        <text>{Data.title || '这是一条直播视频的标题请你关注一下...'}</text>
      </view>
      <view className='Location flex-h'>
        <text className='iconfont icon-dingwei'></text>
        <view className='flex-item'>
          <view>
            <text>{Data.location || '南京万科九都荟'}</text>
          </view>
        </view>
      </view>
    </view>
  )
}
