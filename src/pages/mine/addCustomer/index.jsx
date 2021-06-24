import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView, Input, Image } from '@tarojs/components'
import '../../../assets/css/iconfont.css'

export default withLayout((props) => {

  // const [PageProps] = useState(props)

  return (
    <view className='Page addCustomer'>

      <ScrollView scroll-y={true} refresher-enabled={false} refresher-background='#fff'>
        <view className='PageContent'>

          <text>客户姓名</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入客户真实姓名'></Input>
            </view>
          </view>

          <text>客户电话</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入手机号'></Input>
            </view>
          </view>

          <text>性别</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <text>请选择</text>
            </view>
            <text className='iconfont icon-jiantoudown'></text>
          </view>

          <text>意向楼盘</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入楼盘名称'></Input>
            </view>
          </view>

          <text>内场接待（选填）</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <text>请选择</text>
            </view>
            <Image mode='heightFix' src={require('../../../assets/mine-icon19.png')}></Image>
            <text>选择</text>
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
