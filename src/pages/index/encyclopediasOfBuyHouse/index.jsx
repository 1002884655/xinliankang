import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView, Image } from '@tarojs/components'
import '../../../assets/css/iconfont.css'
import Taro from '@tarojs/taro'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
  const [PageList] = useState([
    {name: '准备买房', icon: require('../../../assets/ency-icon3.png'), list: [{name: '买房资质查询', id: 1, tips: 'HOT', tipsColor: '#FF0000', icon: ''}, {name: '22个房产名词', id: 2, tips: 'NEW', tipsColor: '#30CFCF', icon: ''}]},
    {name: '看房选房', icon: require('../../../assets/ency-icon4.png'), list: [{name: '热门楼盘地图', id: 3, tips: '', icon: ''}, {name: '选户型攻略', id: 4, tips: '实用', tipsColor: '#62D547', icon: ''}, {name: '期房新房怎么选', id: 5, tips: '', icon: ''}]},
    {name: '认筹签约', icon: require('../../../assets/ency-icon5.png'), list: [{name: '买房签约流程', id: 6, tips: '哇！', tipsColor: '#FF396C', icon: require('../../../assets/ency-icon2.png')}, {name: '契税征收标准', id: 7, tips: '', icon: ''}, {name: '公司名义买房', id: 8, tips: '', icon: ''}]},
    {name: '贷款买房', icon: require('../../../assets/ency-icon6.png'), list: [{name: '新房贷政策', id: 9, tips: '', icon: ''}, {name: '贷款查征信', id: 10, tips: '', icon: require('../../../assets/ency-icon1.png')}]}
  ])

  return (
    <view className='Page encyclopediasOfBuyHouse'>

      <ScrollView scroll-y={true} refresher-enabled={false} refresher-background='#fff'>
        <view className='PageContent'>
          {
            PageList.map((item, index) => (
              <view key={`ListItem-${index}`}>
                <view className='Title'>
                  <text>{index + 1 > 9 ? index + 1 : `0${index + 1}`}</text>
                  <text>/{item.name}</text>
                  <Image mode='heightFix' src={item.icon}></Image>
                </view>
                <view className='List'>
                  {
                    item.list.map((subItem, subIndex) => (
                      <view key={`subItem-${subIndex}`} onClick={() => { Taro.navigateTo({ url: `/pages/index/encyDetail/index?id=${subItem.id}` }) }}>
                        <text className='Name'>{subItem.name}</text>
                        {
                          subItem.tips !== '' &&
                          <text className='Tips' style={{background: subItem.tipsColor}}>{subItem.tips}</text>
                        }
                        {
                          subItem.icon !== '' &&
                          <Image mode='heightFix' src={subItem.icon}></Image>
                        }
                      </view>
                    ))
                  }
                </view>
              </view>
            ))
          }
        </view>
      </ScrollView>

    </view>
  )
})
