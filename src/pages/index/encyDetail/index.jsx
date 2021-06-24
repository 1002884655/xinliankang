import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView } from '@tarojs/components'
import '../../../assets/css/iconfont.css'
import { Image, RichText } from '@tarojs/components'

export default withLayout((props) => {

  // const [PageProps] = useState(props)

  return (
    <view className='Page encyDetail flex-v'>
      <view className='flex-item'>
        <view>
          <ScrollView scroll-y={true} refresher-enabled={false} refresher-background='#fff'>
            <view className='PageContent'>

              <view className='Info'>
                <view>
                  <text className='Title'>公积金又有新变化，附最新南京公积金贷款和提取方法。</text>
                  <view>
                    <text>阅读：28</text>
                    <text>点赞15</text>
                    <text>收藏22</text>
                  </view>
                  <text className='Time'>时间：2019-10-20 10:00 </text>
                  <text className='Share'>分享好友</text>
                </view>
              </view>

              <view className='Content'>
                <RichText nodes={'<p>这是内容</p>'}></RichText>
              </view>

            </view>
          </ScrollView>
        </view>
      </view>
      <view className='Bottom'>
        <view>
          <Image mode='heightFix' src={require('../../../assets/buildingDetail-icon3.png')}></Image>
          <text>生成海报</text>
        </view>
        <view>
          <text className='iconfont icon-shoucang'></text>
          <text>收藏</text>
        </view>
      </view>
    </view>
  )
})
