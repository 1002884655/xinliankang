import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView, Input } from '@tarojs/components'
import '../../../assets/css/iconfont.css'

export default withLayout((props) => {

  // const [PageProps] = useState(props)

  return (
    <view className='Page mortgageCalc'>

      <ScrollView scroll-y={true} refresher-enabled={false} refresher-background='#fff'>
        <view className='PageContent'>

          <text>房产总价/万元</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入房产总额'></Input>
            </view>
          </view>

          <text>首付比例</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <text>请选择</text>
            </view>
            <text className='iconfont icon-jiantoudown'></text>
          </view>

          <text>首付金额/万元</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入首付金额/万元'></Input>
            </view>
          </view>

          <text>商业贷款/万元</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入商业贷款/万元'></Input>
            </view>
          </view>

          <text>贷款年限</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <slider min="10" max="30" show-value activeColor='#193C83' />
            </view>
          </view>

          <text>商业贷款利率</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <text>请选择</text>
            </view>
            <text className='iconfont icon-jiantoudown'></text>
          </view>

          <view className='Agree'>
            <text className='iconfont icon-gou'></text>
            <text>使用公积金贷款</text>
          </view>

          <view className='Btn'>
            <text>计算</text>
          </view>

        </view>
      </ScrollView>

    </view>
  )
})
