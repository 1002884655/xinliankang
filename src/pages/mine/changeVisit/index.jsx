import React, { useState, useEffect } from 'react'
import withLayout from '@/layout'
import './index.scss'
import { ScrollView, Input, Image } from '@tarojs/components'
import '../../../assets/css/iconfont.css'

export default withLayout((props) => {

  // const [PageProps] = useState(props)
  const [StatusList] = useState([
    { name: '认筹', id: 1 },
    { name: '认购', id: 2 },
    { name: '签约', id: 3 },
    { name: '待结佣', id: 4 },
    { name: '已结佣', id: 5 },
    { name: '作废', id: 6 }
  ])
  const [CurrentStatusId, setCurrentStatusId] = useState(null)

  const [RoomTypeList] = useState([
    { name: '二室一厅', id: 1 },
    { name: '三室二厅', id: 2 },
    { name: '三室一厅', id: 3 },
    { name: '四室二厅', id: 4 }
  ])
  const [CurrentRoomTypeId, setCurrentRoomTypeId] = useState(null)

  const CutStatus = (item) => {
    return () => {
      setCurrentStatusId(item.id === CurrentStatusId ? null : item.id)
    }
  }

  const CutRoomType = (item) => {
    return () => {
      setCurrentRoomTypeId(item.id === CurrentRoomTypeId ? null : item.id)
    }
  }

  return (
    <view className='Page changeVisit'>

      <ScrollView scroll-y={true} refresher-enabled={false} refresher-background='#fff'>
        <view className='PageContent'>

          <text className='required'>变更状态</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <view className='CheckBoxList'>
                {
                  StatusList.map((item, index) => (
                    <view key={`StatusItem-${index}`} onClick={CutStatus(item)}>
                      <text>{item.name}</text>
                      {
                        CurrentStatusId === item.id &&
                        <Image mode='widthFix' src={require('../../../assets/findHouse-icon1.png')}></Image>
                      }
                    </view>
                  ))
                }
              </view>
            </view>
          </view>

          <text className='required'>客户姓名</text>
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

          <text className='required'>内场接待</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入内场接待'></Input>
            </view>
          </view>

          <text className='required'>业绩分成人|占比/%</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入业绩分成人|占比/%'></Input>
            </view>
          </view>

          <text className='required'>户型</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
            <view className='CheckBoxList'>
                {
                  RoomTypeList.map((item, index) => (
                    <view key={`RoomTypeItem-${index}`} onClick={CutRoomType(item)}>
                      <text>{item.name}</text>
                      {
                        CurrentRoomTypeId === item.id &&
                        <Image mode='widthFix' src={require('../../../assets/findHouse-icon1.png')}></Image>
                      }
                    </view>
                  ))
                }
              </view>
            </view>
          </view>

          <text className='required'>房号</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入房号'></Input>
            </view>
          </view>

          <text className='required'>签约日期</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <text>请选择</text>
            </view>
            <text className='iconfont icon-jiantoudown'></text>
          </view>

          <text className='required'>成交金额</text>
          <view className='FormLine flex-h'>
            <view className='flex-item'>
              <Input placeholder='请输入金额'></Input>
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
