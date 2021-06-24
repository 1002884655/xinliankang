import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView, Input } from '@tarojs/components'
import '../../../assets/css/iconfont.css'

export default withLayout((props) => {

  // const [PageProps] = useState(props)

  return (
    <view className='Page feedBack flex-v'>

      <view className='flex-item'>
        <view>
          <ScrollView scroll-y={true} refresher-enabled={false} refresher-background='#fff'>
            <view className='PageContent'>
              <text className='Title'>问题描述</text>
              <view>
                <Input placeholder='请填写10个字以上的问题描述以便我们提供更好的帮助'></Input>
              </view>
              <text className='Title'>联系方式（选填）</text>
              <view>
                <Input placeholder='输入邮箱/手机号方便联系'></Input>
              </view>
            </view>
          </ScrollView>
        </view>
      </view>

      <view className='Bottom'>
        <text>提交</text>
      </view>

    </view>
  )
})
