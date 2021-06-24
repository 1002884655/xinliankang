import React, { useState, useEffect } from 'react'
import './index.scss'
import '../../../../../assets/css/iconfont.css'
import { ScrollView, Image } from '@tarojs/components'

export default function BasicInfo (props) {
  const { Data = {} } = props
  return (
    <view className='components BasicInfo'>

      {/* 标题名称 */}
      <view className='Title flex-h'>
        <view className='flex-item'>
          <text>葛洲坝·南京中国府高档小区</text>
        </view>
        <view className='Collect'>
          <text className='iconfont icon-shoucang'></text>
          <text>收藏</text>
        </view>
      </view>

      {/* 标签 */}
      <view className='Tags'>
        {
          ['全朝南', '品牌开发商', '轨交房'].map((item, index) => (
            <text key={`TagItem-${index}`}>{item}</text>
          ))
        }
      </view>

      {/* 项目列表 */}
      <view className='ProjectList'>
        <ScrollView scroll-x={true}>
          {
            ['', '', ''].map((item, index) => (
              <view className='ListItem' key={`List-${index}`}>
                <Image mode='heightFix' src={require('../../../../../assets/buildingDetail-icon4.jpg')} />
                <view>
                  <view>
                    <text>项目类型：</text>
                    <text className='active black'>公寓</text>
                  </view>
                  <view>
                    <text>房屋产权：</text>
                    <text className='active'>40年</text>
                    <text>装修标准：</text>
                    <text className='active'>毛坯</text>
                  </view>
                  <view>
                    <text>项目参考价格：</text>
                    <text className='active'>45-75万/套</text>
                  </view>
                  <text className='SaleStatus active'>在售</text>
                </view>
              </view>
            ))
          }
        </ScrollView>
      </view>

      {/* 隔断 */}
      <view className='CutLine'></view>

      {/* 更多信息 */}
      <view className='MoreInfo'>
        <view className='flex-h'>
          <view className='flex-item'>
            <text>楼盘地址：</text>
          </view>
          <view className='flex-item3'>
            <text className='active'>南京市建邺区友谊街与建邺路交汇处235号</text>
          </view>
        </view>
        <view className='flex-h'>
          <view className='flex-item'>
            <text>开盘时间：</text>
          </view>
          <view className='flex-item3'>
            <text className='active'>2019年8月5日</text>
          </view>
        </view>
        <view className='flex-h'>
          <view className='flex-item'>
            <text>容积率：</text>
          </view>
          <view className='flex-item'>
            <text className='active'>1.5</text>
          </view>
          <view className='flex-item'>
            <text>车位比率：</text>
          </view>
          <view className='flex-item'>
            <text className='active'>1 : 200</text>
          </view>
        </view>
        <view className='flex-h'>
          <view className='flex-item'>
            <text>绿化率：</text>
          </view>
          <view className='flex-item'>
            <text className='active'>40%</text>
          </view>
          <view className='flex-item'>
            <text>物业费：</text>
          </view>
          <view className='flex-item'>
            <text className='active'>1.9元/㎡/月</text>
          </view>
        </view>
        <view className='flex-h'>
          <view className='flex-item'>
            <text>规划户数：</text>
          </view>
          <view className='flex-item'>
            <text className='active'>2000</text>
          </view>
          <view className='flex-item'>
            <text>物业：</text>
          </view>
          <view className='flex-item'>
            <text className='active'>万科物业</text>
          </view>
        </view>
      </view>

      {/* 围观 */}
      <view className='Views flex-h'>
          <text>28人围观</text>
          <view className='flex-item'>
            {
              ['', '', '', '', '', ''].map((item, index) => (
                <view key={`ViewsItem-${index}`}>
                  <Image mode='aspectFill' className='centerLabel' src={null} />
                </view>
              ))
            }
            <text>...</text>
          </view>
      </view>

      {/* 互动 */}
      <view className='Interact flex-h'>
        <text className='flex-item'>更多楼盘信息</text>
        <text className='flex-item active'>订阅活动通知</text>
      </view>

      {/* 提示 */}
      <view className='Tips'>
        <text className='iconfont icon-bangzhu'></text>
        <text>查看报备规则？</text>
      </view>

    </view>
  )
}
