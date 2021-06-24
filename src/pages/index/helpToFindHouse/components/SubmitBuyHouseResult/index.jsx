import React, { useState, useEffect } from 'react'
import './index.scss'
import '../../../../../assets/css/iconfont.css'
import { Image } from '@tarojs/components'

export default function SubmitBuyHouseResult (props) {
  const { Data = {} } = props
  return (
    <view className='components SubmitBuyHouseResult'>
      <view className='centerLabel'>
        <view>
          <view>

            <view className='Status'>
              <text className='iconfont icon-gou'></text>
              <text>提交成功</text>
            </view>

            <view className='Tips'>
              <text>已接收到您的需求我们预计将在48小时内联系您！</text>
              <text>客服工作时间为周一至周五9:00-17:00</text>
              <text>请保持电话畅通；谢谢！</text>
            </view>

            <view className='Btn flex-h'>
              <text className='flex-item'>一键咨询</text>
              <text className='flex-item active'>一键电话</text>
            </view>

            {/* 匹配楼盘 */}
            <view className='Recommend'>
              <view className='Title'>
                <view>
                  <text>匹配楼盘</text>
                </view>
              </view>
              <view className='PlanTitle'>“方案一：综合匹配度<text>99%</text>”</view>
              <view className='RecommendBuildingItem'>
                <view>
                  <view className='Img'>
                    <Image mode='aspectFill' src={null} className='centerLabel'></Image>
                  </view>
                  <view className='Title flex-h'>
                    <view className='flex-item'>
                      <text>奥园金基天著尚居</text>
                    </view>
                    <view className='Price'>约<text>20000/㎡</text></view>
                  </view>
                  <text className='Address'>江宁禄口云熙99路号（诚信大道）</text>
                </view>
              </view>
            </view>

          </view>
        </view>
      </view>
    </view>
  )
}
