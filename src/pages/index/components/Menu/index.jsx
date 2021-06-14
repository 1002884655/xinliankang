import React, { useState, useEffect } from 'react'
import './index.scss'
import { Swiper, SwiperItem, Image } from '@tarojs/components'
import Taro from '@tarojs/taro'

export default function Menu (props) {
  const List = [
    { name: '全部楼盘', id: 1, icon: require('../../../../assets/index-icon9.png'), router: '/pages/index/buildingList/index' },
    { name: '品牌地产', id: 2, icon: require('../../../../assets/index-icon8.png'), router: '/pages/index/brandList/index' },
    { name: '近期开盘', id: 3, icon: require('../../../../assets/index-icon6.png'), router: `/pages/index/buildingList/index?type=2` },
    { name: '帮我找房', id: 4, icon: require('../../../../assets/index-icon1.png'), router: '/pages/index/helpToFindHouse/index' },
    { name: '增值服务', id: 5, icon: require('../../../../assets/index-icon16.png'), router: '/pages/index/addedValueService/index' },
    { name: '地图找房', id: 6, icon: require('../../../../assets/index-icon2.png'), router: '/pages/index/findHouseFromMap/index' },
    { name: '活动信息', id: 7, icon: require('../../../../assets/index-icon5.png'), router: '/pages/index/activityList/index' },
    { name: '团房信息', id: 8, icon: require('../../../../assets/index-icon12.png'), router: `/pages/index/activityList/index?type=2` },
    { name: '特价房', id: 9, icon: require('../../../../assets/index-icon11.png'), router: '/pages/index/specialPriceHouse/index' },
    { name: '康养', id: 10, icon: require('../../../../assets/index-icon7.png'), router: '/pages/index/recovered/index' },
    { name: '文旅商办', id: 11, icon: require('../../../../assets/index-icon13.png'), router: '/pages/index/culturalAndBusiness/index' },
    { name: '新闻资讯', id: 12, icon: require('../../../../assets/index-icon15.png'), router: '/pages/index/newsList/index' },
    { name: '购房百科', id: 13, icon: require('../../../../assets/index-icon4.png'), router: '/pages/index/encyclopediasOfBuyHouse/index' },
    { name: '房贷计算', id: 14, icon: require('../../../../assets/index-icon3.png'), router: '/pages/index/mortgageCalculation/index' }
  ]
  let Arr = []
  List.map((item) => {
    if (Arr.length) {
      if (Arr[Arr.length - 1].length < 10) {
        Arr[Arr.length - 1].push({ ...item })
      } else {
        Arr.push([{ ...item }])
      }
    } else {
      Arr.push([{ ...item }])
    }
  })
  const [MenuList, setMenuList] = useState(Arr)

  const MenuClick = (item) => {
    return () => {
      if (item.router) {
        Taro.navigateTo({ url: item.router })
      }
    }
  }

  return (
    <view className='components Menu'>
      <view>
        <view>
          <Swiper autoplay={false} indicator-dots={true}>
            {
              MenuList.map((item, index) => (
                <SwiperItem key={`Banner-${index}`}>
                  <view className="swiper-item">
                    {
                      item.map((subItem, subIndex) => (
                        <view key={`BannerItem-${subIndex}`} onClick={MenuClick(subItem)}>
                          <Image mode='heightFix' src={subItem.icon || null} />
                          <text>{subItem.name}</text>
                        </view>
                      ))
                    }
                  </view>
                </SwiperItem>
              ))
            }
          </Swiper>
        </view>
      </view>
    </view>
  )
}
