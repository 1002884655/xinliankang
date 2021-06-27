import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView, Input } from '@tarojs/components'
import '../../../assets/css/iconfont.css'

export default withLayout((props) => {

  // const [PageProps] = useState(props)

  return (
    <view className='Page sureVisit'>

      <ScrollView scroll-y={true} refresher-enabled={false} refresher-background='#fff'>
        <view className='PageContent'>

          <text>客户姓名</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入姓名'></Input>
            </view>
          </view>

          <text>归属渠道</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入渠道'></Input>
            </view>
          </view>

          <text>内场接待</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入内场接待'></Input>
            </view>
          </view>

          <text>到访时间</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <text>请选择</text>
            </view>
            <text className='iconfont icon-jiantoudown'></text>
          </view>

          <text>到访照片</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <view className='UploadImg'>
                <text className='iconfont icon-xiangji centerLabel'></text>
              </view>
            </view>
          </view>

          <text>备注</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='补充说明（选填）'></Input>
            </view>
          </view>

          <view className='Btn'>
            <text>提交</text>
          </view>

        </view>
      </ScrollView>

    </view>
  )
})
